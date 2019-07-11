import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

interface State {
  value: string
}

export default new Vuex.Store({
  state: {
    value: ""
  },
  getters: {
    getValue(state: State): string {
      return state.value
    }
  },
  mutations: {
    setValue(state: State, payload: string): void {
      state.value = payload
    }
  }
})
