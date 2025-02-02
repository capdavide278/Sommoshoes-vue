import  {createWebHistory, createRouter} from 'vue-router'

import Prodotti from './components/Prodotti.vue'

const routes = [
    {path: '/prodotti', component: Prodotti},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
