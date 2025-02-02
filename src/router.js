import  {createMemoryHistory, createRouter} from 'vue-router'

import Header from './components/Header.vue'
import Prodotti from './components/Prodotti.vue'

const routes = [
    {path: '/', component: Header},
    {path: '/prodotti', component: Prodotti},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
