<template>
  <v-container class="cz-about d-flex full-height pa-0">
    <div id="panel-left" class="flex-grow-1 hidden-sm-and-down"
      :style="{ 'background-image': 'linear-gradient(rgb(0 52 82 / 31%), rgba(0, 0, 0, 0)), url(' + require('@/assets/img/bg-4.png') + ')' }">
    </div>
    <v-container id="panel-right" class="pa-8">
      <div class="text-h4">About the Critical Zone Collaborative Network</div>
      <a href="http://www.criticalzone.org" target="_blank">http://www.criticalzone.org</a>
      <v-divider class="has-space-bottom" />
      <p class="text-body-1">
        The Critical Zone Collaborative Network (CZNet) is the next phase of NSF’s Critical Zone research program, comprised of nine Thematic Cluster study areas with a wide range of geological, climatic, and land use settings that provide an opportunity to better understand the evolution and function of the critical zone.
      </p>
      <p class="text-body-1">
        The CZNet builds upon the outcomes of the Critical Zone Observatories (CZO) to address significant interdisciplinary scientific questions at the regional and national scale, and develop predictive models of complex CZ phenomena.

  The nine Thematic Clusters represent an array of CZ locations selected on the basis of a unifying scientific theme. Each Cluster has several geographic locations encompassing multiple of watersheds that facilitate investigations of environmental gradients relevant to the Cluster research theme. CZNet showcases convergent science and multidisciplinary teams.

  The CZ Coordinating Hub manages the standardization, archival, and access of the data generated by the Clusters, convenes regular meetings of the Thematic Clusters, and plans for future research infrastructure needs of the network. The Hub supports national outreach activities and organizes workshops that engage the larger CZ community. These activities enhance scientific progress within the domains of CZ research and encourage the participation of a broad range of scientists from various disciplines, at different career stages, and from groups that are traditionally underrepresented in the sciences.
      </p>
    </v-container>
    
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'cz-about',
    components: { },
  })
  export default class CzAbout extends Vue {

  }
</script>

<style lang="scss" scoped>
  #panel-left {
    background-size: cover;
    flex: 3;
  }

  #panel-left {
    padding-top: 8rem;
    background-size: cover;
  }

  #panel-right {
    flex: 1;
    flex-direction: column;
  }
</style>
