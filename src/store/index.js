import { createStore } from 'vuex'

export default createStore({
  state: {
    tabTache: [],
  },
  mutations: {
    addTache(state, word){
      state.tabTache.push(word);
      localStorage.setItem("tabTache", JSON.stringify(state.tabTache));
    },
    changeActive(state, index){
       state.tabTache[index].active = !state.tabTache[index].active
    },
    deleteTache(state, index){
      state.tabTache.splice(index, 1)
    }
  },
  actions: {
    addTache({commit}, word){
      commit('addTache', word)
    },
    changeActive({commit}, index){
      commit('changeActive', index)
    },
    deleteTache({commit}, index){
      commit('deleteTache', index)
    }

  },
  modules: {
  },
  
})
