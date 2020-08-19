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
