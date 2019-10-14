const Koa = require('koa')
const next = require('next')
const { parse } = require('url')
const Router = require('koa-router')
const cache = require('lru-cache');
const { join } = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new cache({
  max: 20, // Максимум 20 запросиков мы закэшируем
  maxAge: 1000 * 60 * 5, // 5 минуточек-с-с-с
});

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/', (ctx) => {
    renderAndCache(ctx, '/')
  })

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
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})

async function renderAndCache(ctx, pagePath, queryParams) {
  const key = req.url;

  // if page is in cache, server from cache
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    // if not in cache, render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // if something wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}