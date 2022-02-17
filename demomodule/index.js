import path from 'path'
import serveStatic from 'serve-static'

export default function (moduleOptions) {
  console.log('\n *****')
  Object.keys(this).forEach((key) => console.log(key))
  console.log('\n *****')
  const {
    nuxt,
    extendRoutes,
    options,
    addLayout,
    addPlugin,
    addModule,
    addServerMiddleware,
  } = this

  // Agrego las rutas comunes
  extendRoutes((routes) => {
    routes.push({
      path: '/login',
      component: path.resolve(__dirname, 'pages/login.vue'),
    })
    routes.push({
      path: '*',
      component: path.resolve(__dirname, 'pages/404.vue'),
    })
  })

  // Agrego los archivos css
  options.css.push(path.resolve(__dirname, 'css/shared.css'))
  options.css.push('@picocss/pico')

  // Agrego un layout
  addLayout(path.resolve(__dirname, 'layouts/base.vue'), 'default')

  // addPlugin()
  options.plugins.push({
    src: path.resolve(__dirname, 'plugins/segundo.js'),
  })
  addPlugin({
    src: path.resolve(__dirname, 'plugins/primero.js'),
  })

  // options.plugins.push({
  //   src: path.resolve(__dirname, 'plugins/segundo.js'),
  // } )

  // Agrego módulos
  const toastOptions = {
    duration: 10000,
    iconPack: 'mdi',
    theme: 'bubble',
    ...options.toast,
  }
  addModule(['@nuxtjs/toast', toastOptions])
  addModule('@nuxtjs/axios')

  // Server Middleware https://nuxtjs.org/docs/configuration-glossary/configuration-servermiddleware/
  addServerMiddleware({
    handler: path.resolve(__dirname, 'server-middlewares/hola.js'),
    path: '/hola',
  })
  addServerMiddleware(serveStatic(path.resolve(__dirname, 'static')))

  nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: path.resolve(__dirname, 'components'),
      prefix: 'common',
    })
  })
}
