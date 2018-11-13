import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import indexhome from '@/views/indexhome/indexhome'
import productHall from '@/views/productHall/producthall'
import industryChain from '@/views/industryChain/indestrychain'
import preferredShop from '@/views/preferredShop/preferrshop'
import dyeEnterprises from '@/views/dyeEnterprises/dyeenterprises'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/indexhome',
      name: 'indexhome',
      component: indexhome
    },
    {
      path: '/productHall',
      name: 'productHall',
      component: productHall
    },
    {
      path: '/industryChain',
      name: 'industryChain',
      component: industryChain
    },
    {
      path: '/preferredShop',
      name: 'preferredShop',
      component: preferredShop
    },
    {
      path: '/dyeEnterprises',
      name: 'dyeEnterprises',
      component: dyeEnterprises
    }
  ]
})
