const port = process.env.PORT || 10000

const Koa = require('koa')
const path = require('path')
const app = new Koa()
const serve = require('koa-static')
const staticPath = path.join(__dirname, 'public')

app.use(
  serve(staticPath, {
    maxAge: 3600,
    sMaxAge: 600,
    '404': 'next',
  })
)

app.listen(port)

console.info(`serving http://0.0.0.0:${port}/index.html`)
