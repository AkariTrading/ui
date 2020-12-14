import { Middleware } from '@nuxt/types'

const auth: Middleware = async ({ store, redirect, req, $axios, $auth }) => {

    console.log("server", process.server, "client", process.client);

    redirect("/demo")
    return

    if (store.state.user) {
        return
    }

    if (process.server && req.headers.cookie) {
        if (req.headers.cookie.match(/session_token=\S+/).length) {
            if (!await $auth.verify()) {
                redirect("/login")
                return
            }
        }

    } else if (process.client && document.cookie) {
        if (document.cookie.match(/session_token=\S+/).length) {
            if (!await $auth.verify()) {
                redirect("/login")
                return
            }
        }
    } else {
        redirect("/login")
    }
}

export default auth;