import { GetterTree, ActionTree } from 'vuex'

import { User } from "~/util/types"

export const state = () => ({
    user: null as User,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    user: state => state.user,
}

export const mutations = {
    setUser: (state: RootState, user: User) => (state.user = user),
}

export const actions: ActionTree<RootState, RootState> = {

    async fetchThings({ commit }) {
    },
}