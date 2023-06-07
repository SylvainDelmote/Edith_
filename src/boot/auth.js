import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { createAuth } from '@websanova/vue-auth'
import driverAuthBearer from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js'
import driverHttpAxios from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js'
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js'

const apiAuth = axios.create({ baseURL: process.env.API_URL })

export default boot(({
  app,
  router
}) => {
  const auth = createAuth({
    plugins: {
      http: apiAuth,
      router: router
    },
    drivers: {
      auth: driverAuthBearer,
      http: driverHttpAxios,
      router: driverRouterVueRouter
    },
    options: {
      rolesKey: 'role',
      notFoundRedirect: { name: 'login' },
      refreshData: {
        url: '/auth/login',
        method: 'GET',
        interval: 2,
        enabled: true
      }
    }
  })
  // Set auth instance on app
  app.use(auth)
})
