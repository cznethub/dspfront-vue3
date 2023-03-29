import { Styles } from './styles';
import { EnumRepositoryKeys } from '@/components/submissions/types';
import { supportedRepositoryModels } from '@/constants';
import cloneDeep from 'lodash/cloneDeep';
import mergeWith from 'lodash/mergeWith';
import Repository from '@/models/repository.model';
import External from '@/models/external.model';

export const classes = (
  strings: TemplateStringsArray,
  ...variables: any[]
): string => {
  return strings
    .reduce((acc, curr, index) => {
      return `${acc}${curr}${variables[index] || ''}`;
    }, '')
    .trim();
};

/**
 * Helper function to merge two styles definitions. The contained classes will be combined, not overwritten.
 *
 * Example usage:
 * ```ts
 * const myStyles = mergeStyles(defaultStyles, { control: { root: 'mycontrol' } });
 * ```
 */
export const mergeStyles = (
  stylesA: Partial<Styles>,
  stylesB: Partial<Styles>
): Partial<Styles> => {
  const styles = cloneDeep(stylesA);
  mergeWith(styles, stylesB, (aValue, bValue) => {
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return `${aValue} ${bValue}`;
    }
    return undefined;
  });
  return styles;
};


/** Returns whether the repository has been authorized or not. 
 * If promptAuthorize is `true`, also opens the authorization window if repository was not authorized. */
export function isRepositoryAuthorized(repository: EnumRepositoryKeys, promptAuthorize: boolean = true) {
  const activeRepository = supportedRepositoryModels[repository];

  if (activeRepository && activeRepository !== External && !(activeRepository?.$state.accessToken)) {
    if (promptAuthorize) {
      Repository.openAuthorizeDialog(repository)
    }
    return false;
  }

  return true;
}