# koa2-vhost
Koa2 middleware to map hostnames to static folders

## Install package
`npm i --save koa2-vhost`
## Example of usage
```javascript
const Koa = require('koa')
const path = require('path')
const vhost = require('koa-vhost')
const STATIC_DIR = process.env.STATIC_DIR || 'static'

/* Arguments
 * list of hostnames (you need to create folders in static directory with the same names) - required
 * Koa app object - required
 * path to your static directory - required
 * path to default folder (in case if none of hostnames matched this one will be used) - not required
*/
app.use(vhost(["example.com", "example2.com", "example3.com"], app, STATIC_DIR, 'default'))

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
```
## Static directory structure
```
static
└── example1.com
    └── index.html
└── example2.com
    └── index.html
└── example3.com
    └── index.html
└── default
    └── index.html
```
