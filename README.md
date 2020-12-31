# Api generator for frontend

Generates an object with API urls as values

## Usage

```javascript
const baseUrl = "https://something.com"
const apiRaw = {
  simpleRoute: 'simple-route',
  'other-route': 'other-route',
  'node': {
    nestedRoute: 'nested-route'
  }
}

const options = {
  // ...
}

const api = generateApi(baseUrl, apiRaw, options)
/*
  api => {
      simpleRoute: 'https://something.com/simple-route',
      'other-route': 'https://something.com/other-route',
      'node': {
        nestedRoute: 'https://something.com/node/nested-route'
      }
  }

  Also, api.node translates to https://something.com/node
*/

// request to 'https://something.com/simple-route'
const response = await fetch(api.simpleRoute);

// request to 'https://something.com/node'
const response = await fetch(api.node);

// request to 'https://something.com/node/nested-route'
const response = await fetch(api.node.nestedRoute);
```

## Options

| Option | Type | Description |
| --- | :---: | --- | 
| withTailingSlash | boolean | Adds tailing slash to url |

## License
MIT
