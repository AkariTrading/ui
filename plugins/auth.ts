import { Plugin, Context } from '@nuxt/types'
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

const plugin: Plugin = (ctx, inject) => {

    ctx.$axios.onError(error => {
        if (error.response.status === 401) {
            ctx.redirect('/login')
        }
    })

    const methods: auth = {
        login: login(ctx),
        logout: logout(ctx),
        verify: verify(ctx)
    }

    inject('auth', methods)
}

function login(ctx: Context) {
    return async (email: string, password: string) => {

        try {
            var result = await ctx.$axios.post("/api/auth/login", { email, password });
            if (result.status !== 200) {
                return false
            } else {
                ctx.store.commit(mutations.setUser.name, { email: email } as User)
                return true
            }

        } catch (err) {
            return false
        }
    }
}

function logout(ctx: Context) {
    return async () => {
        await ctx.$axios.$post("/api/auth/logout").catch(err => err);
        ctx.store.commit(mutations.setUser.name, null);
        ctx.redirect("/login")
    }
}

function verify(ctx: Context) {
    return async () => {
        try {
            const result = await ctx.$axios.get<User>("/api/auth/verifySession");
            if (result.status !== 200) {
                return false
            } else {
                console.log(result.data)
                ctx.store.commit(mutations.setUser.name, { email: result.data.email } as User)
                return true
            }
        } catch (err) {
            return false
        }
    }
}


export default plugin
