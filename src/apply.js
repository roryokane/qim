import {updateKey} from './createNavigator';
import {traverseEach} from './traverse';
import {curry3} from './utils/curry';
import {undefinedIfNone} from './$none';

const apply = (path, transform, obj) => {
  //return undefinedIfNone(updateEach([$nav(path), $apply(transform)], obj, 0));
  path = Array.isArray(path) ? path : [path];
  return undefinedIfNone(traverseEach(updateKey, undefined, undefined, path, obj, 0, transform));
};

export default curry3(apply);
