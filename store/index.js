export const state = () => ({
  whiteLogo: true,
  whiteLogoPage: false,
})

export const mutations = {
  setWhite(state, bool) {
    state.whiteLogo = bool
    state.whiteLogoPage = bool
  },
}
