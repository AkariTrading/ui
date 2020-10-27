import { Middleware } from '@nuxt/types'

const auth: Middleware = ({store, redirect}) => {
    if (store.state.user) {
        return
    }

    redirect("/login")
}

export default auth;