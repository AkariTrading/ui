import { Plugin } from '@nuxt/types'
import { User } from "~/util/types"

interface auth {
    login: (email: any, password: any) => Promise<any>;
    logout: () => Promise<any>;
}

import { mutations, RootState } from "~/store"

declare module 'vue/types/vue' {
    // this.$auth inside Vue components
    interface Vue {
        $auth: auth
    }
}

declare module '@nuxt/types' {
    // nuxtContext.app.$auth inside asyncData, fetch, plugins, middleware, nuxtServerInit
    interface NuxtAppOptions {
        $auth: auth
    }
    // nuxtContext.$auth
    interface Context {
        $auth: auth
    }
}

declare module 'vuex/types/index' {
    // this.$auth inside Vuex stores
    interface Store<S> {
        $auth: auth
    }
}

const plugin: Plugin = ({store, $axios, res, req, redirect}, inject) => {

    $axios.onError(error => {
        if (error.response.status === 500) {
            redirect('/sorry')
        }
    })

    const login = async (email: string, password: string) => {

        // call /api/login

        const user: User = {
            email: "lol"
        }

        store.commit(mutations.setUser.name, user)

    }

    const logout = async () => {
    }

    const methods: auth = {
        login: login,
        logout: logout,
    }

    inject('auth', methods)
}

export default plugin
