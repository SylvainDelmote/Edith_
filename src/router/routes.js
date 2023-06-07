import securite from './securite'
import Layout from '../layouts/MainLayout.vue'

const routes = [
  {
    path: '/login',
    component: () => import('pages/LoginSSO.vue')
  },

  {
    path: '/',
      // meta: { auth: true},
    component: Layout,
    children: [
      {path: '',    component: () => import('../pages/IndexPage.vue'), meta:{title:"Edith"}} ,
      {path: '/index',    component: () => import( '../pages/IndexPage.vue'), meta:{title:"Edith"}} ,
      {path: '/lecteur',    component: () => import('../pages/PageLecteur.vue'), meta:{title:"Edith ~ Lecteur"}} ,
      {path: '/editeur',    component: () => import('../pages/PageEditeur.vue'), meta:{title:"Edith ~ Editeur"}} ,
      {path: '/profil',  component: () => import('../pages/ProfilUser.vue'),  meta:{title:"Profil"}},
      ...securite,
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  
    { path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue'), meta:{title:"Oops"}}
  
]

export default routes
