import securite from './securite'
import MainLayout from '../layouts/MainLayout.vue'
import EditorLayout from '../layouts/EditorLayout.vue'
import LecteurLayout from '../layouts/LecteurLayout.vue'


const routes = [
  {
    path: '/login',
    component: () => import('pages/LoginSSO.vue')
  },

  {
    path: '/',
      //  meta: { auth: true},
    component: MainLayout,
    children: [
      {path: '',    component: () => import('../pages/IndexPage.vue'), meta:{title:"Edith"} } ,
      {path: '/index',    component: () => import( '../pages/IndexPage.vue'), meta:{title:"Edith"}} ,
      {path: '/profil',  component: () => import('../pages/ProfilUser.vue'),  meta:{title:"Profil"}},
      {path: '/theme',  component: () => import('../pages/ThemePage.vue'),  meta:{title:"Theme"}},
      ...securite,
    ]
  },
  {
    path: '/editeur',
      //  meta: { auth: true},
    component: EditorLayout,
    children: [
      {path: '/editeur',    component: () => import('../pages/PageEditeur.vue'), meta:{title:"Edith ~ Editeur"}} ,

      ...securite,
    ]
  },

    {
    path: '/lecteur',
      //  meta: { auth: true},
    component: LecteurLayout,
    children: [
      {path: '/lecteur',    component: () => import('../pages/PageLecteur.vue'), meta:{title:"Edith ~ Lecteur"}} ,

      ...securite,
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  
    { path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue'), meta:{title:"Oops"}}
  
]

export default routes
