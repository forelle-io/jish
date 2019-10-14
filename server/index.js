const Koa = require('koa')
const next = require('next')
const { parse } = require('url')
const Router = require('koa-router')
const cache = require('koa-cache-lite');
const { join } = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

cache.configure({
  '/': 3000,
}, {
  debug: true
})

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.all('*', async ctx => {
    const parsedUrl = parse(ctx.req.url, true)
      const rootStaticFiles = [
        '/manifest.json',
        '/sitemap.xml',
        '/favicon.ico',
        '/robots.txt',
        '/browserconfig.xml',
        '/site.webmanifest',
        '/service-worker'
      ]
      if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
        const path = join(__dirname, 'static', parsedUrl.pathname)
        app.serveStatic(ctx.req, ctx.res, path)
      } else {
        await handle(ctx.req, ctx.res)
      }
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.use(cache.middleware())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})