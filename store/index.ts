export const state = () => ({
    user: null
})

export const mutations = {

    setUser(state, user) {
        state.user = user
    },
}

// export const actions = {

//     async login({ commit }, {email, password}) {
//         const auth = this.$firebaseauth()
//         let err = await auth.login(email, password)
//         if (!err) {
//             commit('setUser', auth.user())
//             return null
//         }

//         return err
//     }
// }