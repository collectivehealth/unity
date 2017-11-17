### `service(name: string[, opts: object]): object`

Configures a service for testing. Because services are singletons and are instantiated as soon as the application runs, you cannot mock a service's injectables with `service`. Instead, mock them at the application level with [`module`](/src/utils/module).

**Parameters:**

|Name|Type|Description|
|---|---|---|
|`name`|`String`|Name of the service.|
|`[opts]`|`Object`|Options object.|
|`[opts.inject]`|`Object`|Additional injectables to attach to the spec object for convenience. *Discouraged, use [`get()`](/collectivehealth/unity#getname-string-object) instead.*|

**Returns:**

`Object` - Spec object with the following properties:

|Name|Type|Description|
|---|---|---|
|`<Service Name>`|`Object`|Reference to the service.|

**Example:**

```js
import {
  module,
  service
} from '@collectivehealth/unity';

describe('MyAwesomeService', () => {
  let T;

  beforeEach(() => {
    module('MyApp');
    T = service('MyAwesomeService');
  });

  it('should be awesome', () => {
    expect(T.MyAwesomeService.isAwesome()).toBe(true);
  });
});
```
