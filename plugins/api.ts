import { Plugin, Context } from '@nuxt/types'
import { TaskRequest } from "~/util/types"

interface api {
    task: (task: TaskRequest) => Promise<string>;
}

declare module 'vue/types/vue' {
    interface Vue {
        $api: api
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $api: api
    }
    interface Context {
        $api: api
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $api: api
    }
}

const plugin: Plugin = (ctx, inject) => {

    const methods: api = {
        task: task(ctx),
    }

    inject('api', methods)
}

function task(ctx: Context) {
    return async (task: TaskRequest) => {
        try {
            return await ctx.$axios.$post("/task", task);
        } catch (err) {
            return ""
        }
    }
}

export default plugin
