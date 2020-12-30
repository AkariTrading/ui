import { Plugin, Context } from '@nuxt/types'
import { TaskRequest, TaskResponse, ErrorResponse, BacktestRequest, BacktestResponse } from "~/util/types"

interface api {
    task: (TaskRequest) => Promise<TaskResponse>;
    backtest: (BacktestRequest) => Promise<BacktestResponse>;
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

    if (process.env.NODE_ENV === "development")
        ctx.$axios.setBaseURL('http://localhost:7300')
    else
        ctx.$axios.setBaseURL('http://localhost:7300')

    const methods: api = {
        task: task(ctx),
        backtest: backtest(ctx)
    }

    inject('api', methods)
}

function task(ctx: Context) {
    return async (task: TaskRequest) => {
        try {
            return await ctx.$axios.$post<TaskResponse>("/task", task)
        }
        catch (e) {
            return extractErrorResponse(e) as TaskResponse
        }
    }
}

function backtest(ctx: Context) {
    return async (task: BacktestRequest) => {
        try {
            return await ctx.$axios.$post<TaskResponse>("/backtest", task)
        }
        catch (e) {
            return extractErrorResponse(e) as TaskResponse
        }
    }
}

function extractErrorResponse(err: any) {
    if (err.response?.data?.errorCode !== undefined) {
        let ret: ErrorResponse = {
            errCode: err.response.data.errorCode,
            errorBody: err.response.data.errorBody
        }
        return ret;
    }

    let ret: ErrorResponse = {
        errCode: "unknown",
    }
    return ret
}

export default plugin
