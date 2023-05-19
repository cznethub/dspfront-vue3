import { router } from '@/router'
import { Model, useRepo } from 'pinia-orm'
import { Subject } from 'rxjs'
import { RawLocation } from 'vue-router'
import axios from "axios"
import CzNotification from './notifications.model'
import Submission from './submission.model'

export interface ICzCurrentUserState {
  orcid: string
  orcidAccessToken: string
}

export interface IUserState {
  isLoggedIn: boolean
  orcid: string
  orcidAccessToken: string
  next: string,
  hasUnsavedChanges: boolean,
  registeringSubmission: Partial<Submission> | null
}

export default class User extends Model {
  static entity = 'users'
  static isLoginListenerSet = false
  static logInDialog$ = new Subject<RawLocation | undefined>()
  static loggedIn$ = new Subject<void>()
  
  static fields () {
    return {}
  }

  static get $state(): IUserState {
    return useRepo(this).all()
  }

  static get next() {
    return 
  }

  static get accessToken() {
    return this.$state?.orcidAccessToken
  }

  static state(): IUserState {
    return {
      isLoggedIn: false,
      orcid: '',
      orcidAccessToken: '',
      next: '',
      hasUnsavedChanges: false,
      registeringSubmission: null
    }
  }

  static openLogInDialog(redirectTo?: RawLocation) {
    this.logInDialog$.next(redirectTo)
  }

  static async logIn(callback?: () => any) {
    window.open(
      `${window.location.origin}/api/login?window_close=True`,
      "_blank",
      "location=1,status=1,scrollbars=1, width=800,height=800"
    )

    if (!this.isLoginListenerSet) {
      this.isLoginListenerSet = true // Prevents registering the listener more than once
      window.addEventListener("message", async (message) => {
        console.info(`User: listening to login window...`)
        if (message.data.token) {
          CzNotification.toast({ 
            message: 'You have logged in!',
            type: 'success'
          })
          this.state().isLoggedIn = true
          this.state().orcid = message.data.orcid
          this.state().orcidAccessToken = message.data.token
          document.cookie = `Authorization=Bearer ${message.data.token}; expires=${message.data.expiresIn}; path=/`
          this.isLoginListenerSet = false 
          this.loggedIn$.next()
          if (callback) {
            callback()
          }
        }
        else {
          CzNotification.toast({
            message: 'Failed to Log In',
            type: 'error'
          })
        }

      }, { "once": true })
    }
  }

  static async checkAuthorization() {
    try {
      const response = await axios.get('/api', { 
        params: { "access_token": User.$state.orcidAccessToken }
      })
      
      if (response.status !== 200) {
        // Something went wrong, authorization may be invalid
        this.state().isLoggedIn = false
      }
    }
    catch(e: any) {
      // console.log(e.response.status)
      this.state().isLoggedIn = false
    }
  }

  static async logOut() {
    try {
      await axios.get('/api/logout')
      this._logOut()
    }
    catch(e) {
      // We don't care about the response status. We at least log the user out in the frontend.
      this._logOut()
    }
  }

  private static async _logOut() {
    this.state().isLoggedIn = false,
    this.state().orcidAccessToken = ''
    this.isLoginListenerSet = false

    CzNotification.toast({ 
      message: 'You have logged out!',
      type: 'info'
    })

    if (router.currentRoute.meta?.hasLoggedInGuard) {
      router.push({ path: '/' })
    }
  }
}