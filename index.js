'use strict';

/**
 * Module dependencies.
 */
const serve = require('koa-static')
const path = require('path')

module.exports = (hostnames, app, static_dir) => {
    return async (ctx, next) => {
        try {
            // If there is a koa-static middleware get its index
            const serve_index = app.middleware.findIndex(func => func.name === 'serve')
            // Skip if no hostname matches
            if (!hostnames.includes(ctx.hostname)) return await next()
            // Compose path to static folder using hostname (must be the same as hostname)
            const static_middleware = serve(path.join(__dirname, static_dir, ctx.hostname))

            if (serve_index > -1) {
                // Replace existing koa-static with the new one
                app.middleware[serve_index] = static_middleware
            } else {
                // Add new koa-static middleware
                app.use(static_middleware)
            }

            return await next()
        } catch (e) {
            ctx.throw(e.status || 500, e.message)
        }
    }
}