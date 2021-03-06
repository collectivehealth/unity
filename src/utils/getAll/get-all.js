import angular from 'angular';

import {
  get
} from '../';

/**
 * @private
 *
 * @description
 *
 * Loads a list of injectables and attaches them to the provided object.
 *
 * @param  {array} injectables - List of injectables to load.
 * @param  {object} spec - Object to attach injectables to.
 */
export default function getAll(injectables = [], spec = {}) {
  angular.forEach(injectables, name => {
    spec[name] = get(name);
  });
}
