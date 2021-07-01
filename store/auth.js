export const state = () => ({
  isLogged: false,
})

export const mutations = {
  setIsLogged(state, isLogged) {
    state.isLogged = isLogged
  },
}
