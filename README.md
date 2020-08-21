# koa2-vhost
Koa2 middleware to map hostnames to static folders (https://www.npmjs.com/package/koa2-vhost)

## Install package
`npm i --save koa2-vhost`
## Example of usage
```javascript
const Koa = require('koa')
const path = require('path')
const vhost = require('koa2-vhost')
const STATIC_DIR = path.join(__dirname, process.env.STATIC_DIR || 'static')

/* Arguments
 * object of hostnames mapped to folders (you need to create folders in static directory with the same names) - required
 * path to your static directory - required
 * path to default folder (in case if none of hostnames matched this one will be used) - not required
*/
app.use(vhost({
    "example.com": "example",
    "example2.com": "example2",
    "example3.com": "example3"
}, STATIC_DIR, 'default'))

module.exports = app.listen(80, () => {
  console.log(`Listening on http://localhost:80`)
})
```
## Static directory structure
```
static
└── example1
    └── index.html
└── example2
    └── index.html
└── example3
    └── index.html
└── default
    └── index.html
```
