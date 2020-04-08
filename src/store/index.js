import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items : [
      {
        id: 1,
        name: 'Clown Fish',
        category: 'fish',
        description: 'a nice description about fish',
        image: 'https://cdn.shopify.com/s/files/1/0855/3388/products/6297.jpeg?v=1441108913'
      },
      {
        id: 2,
        name: 'Blue fish',
        category: 'fish',
        description: 'a nice description about fish',
        image: 'http://images5.fanpop.com/image/photos/28500000/Blue-Fish-blue-28506589-400-300.jpg'
      },
      {
        id: 3,
        name: 'Starfish',
        category: 'crustation',
        description: 'a nice description about fish',
        image: 'https://images.unsplash.com/photo-1514503612056-e3f673b3f3bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
      },
      {
        id: 4,
        name: 'Hammerhead Shark',
        category: 'shark',
        description: 'a nice description about shark',
        image: 'https://ichef.bbci.co.uk/news/624/cpsprodpb/1245E/production/_102564847_gettyimages-946921072.jpg'
      },
    ]
  },
  mutations: {
  },
  getters: {
    items: state => state.items,
    getItemById: (state) => (id) => {
      return state.items.find(item => item.id === id)
    },
  },
  actions: {
  },
  modules: {
  }
})
