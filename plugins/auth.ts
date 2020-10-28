import { Plugin } from '@nuxt/types'
import { User } from "~/util/types"

interface auth {
    login: (email: any, password: any) => Promise<boolean>;
    verify: () => Promise<boolean>;
    logout: () => Promise<any>;
}

import { mutations } from "~/store"

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

const plugin: Plugin = ({ store, $axios, redirect }, inject) => {

    $axios.onError(error => {
        if (error.response.status === 401) {
            redirect('/login')
        }
    })

    const login = async (email: string, password: string) => {

        try {
            var result = await $axios.post("/api/auth/login", { email, password });
            if (result.status !== 200) {
                return false
            } else {
                store.commit(mutations.setUser.name, { email: email } as User)
                return true
            }

        } catch (err) {
            return false
        }
    }

    const verify = async () => {
        try {
            const result = await $axios.get<User>("/api/auth/verifySession");
            if (result.status !== 200) {
                return false
            } else {
                console.log(result.data)
                store.commit(mutations.setUser.name, { email: result.data.email } as User)
                return true
            }
        } catch (err) {
            return false
        }
    }

    const logout = async () => {
        await $axios.$post("/api/auth/logout").catch(err => err);
        store.commit(mutations.setUser.name, null);
        redirect("/login")
    }

    const methods: auth = {
        login: login,
        logout: logout,
        verify: verify
    }

    inject('auth', methods)
}

export default plugin
