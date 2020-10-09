<template>
  <div class="relative h-full">
    <div class="flex h-full">
      <div class="w-8/12 relative">
        <div class="editor-wrapper absolute top-0 left-0 right-0 bottom-0">
          <textarea ref="editor" class="editor"></textarea>
        </div>
      </div>

      <div class="w-4/12 px-4">
        <div
          class="shadow bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 z-10 mb-8"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Backtest
          </h2>
          <p class="leading-relaxed mb-3 text-gray-600">
            Using historical price data from Binance, test your algorithm's
            profitability.
          </p>
          <div class="mb-4">
            <label for="symbol" class="leading-7 text-sm text-gray-600"
              >Base Asset</label
            >
            <input
              v-model="baseAsset"
              type="text"
              name="symbol"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="mb-4">
            <label for="symbol" class="leading-7 text-sm text-gray-600"
              >Quote Asset</label
            >
            <input
              value="BTCUSDT"
              v-model="quoteAsset"
              type="text"
              name="symbol"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="mb-4">
            <label for="days" class="leading-7 text-sm text-gray-600"
              >Past Days</label
            >
            <input
              value="100"
              v-model="days"
              type="number"
              name="days"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            @click="onBacktest"
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Run
          </button>
          <p class="text-xs text-gray-500 mt-3">
            Backtest requires a "trade" function and uses one-minute candles
            sticks.
          </p>
        </div>

        <div
          class="shadow bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Task
          </h2>
          <p class="leading-relaxed mb-3 text-gray-600">
            A one-time task that can be used to analyze market trends.
          </p>
          <button
            @click="onTask"
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Run
          </button>
          <p class="text-xs text-gray-500 mt-3">
            Task requires a "task" function.
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="showResult"
      class="shadow absolute top-0 right-0 px-8 py-3 task-result"
    >
      <h2 v-if="loading">Loading....</h2>

      <button v-if="!loading" @click="onCloseResult" class="p-4">Close</button>
      <br />

      <div v-if="errResponse" class="red leading-relaxed">
        <p>error: {{ errResponse.errCode }}</p>
        <p v-if="errResponse.errorBody">{{ errResponse.errorBody }}</p>
      </div>

      <p class="leading-relaxed" v-for="(item, index) in result">
        {{ item.date }}: {{ item.body }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
// type BacktestRequest struct {
// 	Body           string             `json:"body"`           // javascript code
// 	Exchange       string             `json:"exchange"`       // "binance"
// 	Symbol         string             `json:"symbol"`         // "binance"
// 	BaseAsset      string             `json:"baseAsset"`      // BTC
// 	QuoteAsset     string             `json:"quoteAsset"`     // USD
// 	StartTimestamp int64              `json:"startTimestamp"` // unix timestamp in milliseconds
// 	EndTimestamp   int64              `json:"endTimestamp"`   // unit timestamp in milliseconds
// 	Balance        map[string]float64 `json:"balance"`        // {"BTC": 3, "USD": 1000}
// 	Fee            float64            `json:"fee"`
// 	// State      map[string]interface{} `json:"state"`
// }

import Vue from "vue";
import { EditorFromTextArea } from "codemirror";
import {
  BacktestRequest,
  BacktestResponse,
  TaskRequest,
  TaskResponse,
} from "~/util/types";
import { toDateStr } from "~/util/util";

let cm: EditorFromTextArea;
let code: any;

if (process.client) {
  code = require("codemirror");
  require("codemirror/mode/javascript/javascript");
  require("codemirror/keymap/sublime.js");
  require("codemirror/addon/hint/javascript-hint.js");
  require("codemirror/addon/lint/lint.js");
  require("codemirror/addon/lint/javascript-lint.js");
}

export default Vue.extend({
  // middleware: "auth",

  head() {
    return {
      script: [
        {
          src: "https://unpkg.com/jshint@2.9.6/dist/jshint.js",
        },
      ],
    };
  },

  mounted() {

    const storage = window.localStorage;

    cm = code.fromTextArea(this.$refs.editor, {
      lineNumbers: true,
      mode: "javascript",
      theme: "monokai",
      keyMap: "sublime",
      indentWithTabs: true,
      indentUnit: 4,
      gutters: ["CodeMirror-lint-markers"],
      lint: { esversion: 6, asi: true },
    });

    cm.setValue(
      storage.getItem('editor') || 'export function task({candles, symbols}) {\n\tconsole.log("one-time task")\n}'
    );

    cm.on('change', (ctx) => {
      storage.setItem('editor', ctx.getValue())
    })

    this.cm = cm;
  },

  methods: {
    async onTask() {
      this.showResult = true;
      this.loading = true;

      const req: TaskRequest = {
        body: this.cm.getValue(),
        exchange: "binance",
      };

      let result: TaskResponse = await this.$api.task(req);
      this.loading = false;

      if (result.errCode) {
        this.errResponse = result;
        return;
      }

      this.result = result.logs.map((l) => {
        return {
          body: l.body,
          date: toDateStr(l.timestamp),
        };
      });
    },

    async onBacktest() {
      this.showResult = true;
      this.loading = true;

      const milliInMinute = 60 * 1000;
      const milliInDay = 24 * 60 * milliInMinute;

      const endTimestamp = Date.now() - 10 * milliInMinute;
      const baseAsset = this.baseAsset.toUpperCase();
      const quoteAsset = this.quoteAsset.toUpperCase();
      const balance = { [this.baseAsset]: 0, [this.quoteAsset]: 100 };

      const req: BacktestRequest = {
        body: this.cm.getValue(),
        exchange: "binance",
        baseAsset,
        quoteAsset,
        symbol: baseAsset + quoteAsset,
        startTimestamp: endTimestamp - this.days * milliInDay,
        endTimestamp,
        balance,
        fee: 0.001,
      };

      let res: BacktestResponse = await this.$api.backtest(req);
      this.loading = false;

      if (res.errCode) {
        this.errResponse = res;
        return;
      }

      const logs = res.logs.map((l) => {
        return {
          body: l.body,
          date: toDateStr(l.timestamp),
        };
      });

      let result = [
        {
          body: `start date ${toDateStr(res.startTimestamp)}, end date ${toDateStr(res.endTimestamp)}`,
          date: "",
        },
        {
          body: `start balance ${JSON.stringify(balance)}`,
          date: "",
        },
        {
          body: `final balance ${JSON.stringify(res.balance)}`,
          date: "",
        },

        {
          body: `total ${quoteAsset} ${res.balance[baseAsset] * res.lastPrice + res.balance[quoteAsset]}`,
          date: "",
        },
      ];

      this.result = [...result, ...logs];
    },

    onCloseResult() {
      this.showResult = false;
      this.loading = false;
      this.errResponse = null;
      this.result = null;
    },
  },

  data() {
    let cm: EditorFromTextArea = null;
    return {
      cm,
      result: null,
      showResult: false,
      loading: false,
      errResponse: null,
      days: 90,
      baseAsset: "BTC",
      quoteAsset: "USDT",
    };
  },
});
</script>

<style>
@import "codemirror/lib/codemirror.css";
@import "codemirror/theme/monokai.css";
@import "codemirror/addon/lint/lint.css";

.task-result {
  z-index: 10;
  background-color: black;
  width: 50%;
  height: 100%;
  color: white;
  overflow-wrap: break-word;
  font-size: 14px;
  overflow-y: scroll;
}

.editor-wrapper {
  background-color: #272822;
}

.editor {
  background-color: #272822;
  resize: none;
}

.CodeMirror {
  height: 100%;
}
</style>


