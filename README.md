[![][npm-img]][npm-url] [![][travis-img]][travis-url] [![][david-img]][david-url] [![][david-dev-img]][david-dev-url] [![][cc-img]][cc-url] [![][xo-img]][xo-url]

# unity

Unity is a library that helps you write shorter, cleaner unit tests for your Angular 1.x applications by eliminating much of the boilerplate requried to set up a test suite and by providing utility functions for common tasks.

## Requirements

- Angular `>=1.3.0`.
- If you run your tests in a browser-like environment (ex: Karma + PhantomJS):
  - You may need an ES6 polyfill, like [`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/).
  - You will need to run a module-bundler on your test files.
- If you run your tests in [Jest](https://facebook.github.io/jest/), Unity should Just Work!

## Install

```bash
yarn add --dev @collectivehealth/unity
```
or

```bash
npm install --save-dev @collectivehealth/unity
```

## Example

### Before

```js
let $controller;
let $document;
let $location;
let $q;
let $scope;

describe('MyController', () => {
  beforeEach(module('MyApp'));

  beforeEach(inject((_$controller_, _$document_, _$location_, _$q_) => {
    $controller = _$controller_;
    $document = _$document_;
    $location = _$location_;
    $q = _$q_;
    $scope = {};
  }));

  it('should work', () => {
    let myCtrl = $controller('MyCtrl', {
      $scope: $scope
    });

    // ...
  });
});
```

- Multiple shared variables that are re-used across specs.
- Syntax is verbose.
- Three locations need to be updated to get access to an injectable. 😿

### After

```js
import {
  controller,
  get,
  module
} from '@collectivehealth/unity';

describe('MyCtrl', () => {
  let T;

  beforeEach(() => {
    module('MyApp');
    T = controller('MyCtrl');
  });

  it('should work', () => {
    // T.$scope is the controller's scope.
    // T.MyCtrl is the controller instance.
    // Use get('$document'), get('$location'), etc. to interact with other injectables.
  });
});
```

- One shared variable across specs, regardless of how many injectables are being used.
- Syntax is terse and readable.
- Zero boilerplate to access an injectable, just use `get()` wherever you need it! 😺

---

For more information, check out the [documentation](/src). Happy testing! 🎉

[travis-img]: https://img.shields.io/travis/collectivehealth/unity.svg?style=flat-square
[travis-url]: https://travis-ci.org/collectivehealth/unity

[david-img]: https://img.shields.io/david/collectivehealth/unity.svg?style=flat-square
[david-url]: https://david-dm.org/collectivehealth/unity

[david-dev-img]: https://img.shields.io/david/dev/collectivehealth/unity.svg?style=flat-square
[david-dev-url]: https://david-dm.org/collectivehealth/unity?type=dev

[xo-img]: https://img.shields.io/badge/code_style-XO-e271a5.svg?style=flat-square
[xo-url]: https://github.com/sindresorhus/xo

[npm-img]: https://img.shields.io/npm/v/@collectivehealth/unity.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@collectivehealth/unity

[cc-img]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square
[cc-url]: https://github.com/conventional-changelog/standard-version
