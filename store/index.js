import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First Post',
                previewText: 'This is our first post!',
                thumbnail: 'https://images.pexels.com/photos/1323592/pexels-photo-1323592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              },
              {
                id: '2',
                title: 'Second Post',
                previewText: 'This is our second post!',
                thumbnail: 'https://images.pexels.com/photos/1323592/pexels-photo-1323592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              }
            ])
            resolve()
          }, 1000)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
