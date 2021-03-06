'use strict';

/**
 * Module dependencies.
 */
const serve = require('koa-static')
const path = require('path')

/* Arguments
 * object of hostnames mapped to folders (you need to create folders in static directory with the same names) - required
 * path to your static directory - required
 * path to default folder (in case if none of hostnames matched this one will be used) - not required
*/

module.exports = (hostnames, static_dir, default_dir = '') => {
    return async (ctx, next) => {
        try {
            // If there is a koa-static middleware get its index
            const serve_index = ctx.app.middleware.findIndex(func => func.name === 'serve')
            // Use default hostname if no matches
            const hostname = hostnames[ctx.hostname] ? hostnames[ctx.hostname] : default_dir
            // Compose path to static folder using hostname (must be the same as hostname)
            const static_middleware = serve(path.join(static_dir, hostname))

            if (serve_index > -1) {
                // Replace existing koa-static with the new one
                ctx.app.middleware[serve_index] = static_middleware
            } else {
                // Add new koa-static middleware
                ctx.app.use(static_middleware)
            }

            return await next()
        } catch (e) {
            ctx.throw(e.status || 500, e.message)
        }
    }
}