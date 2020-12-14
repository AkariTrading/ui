<template>
  <div class="relative h-full">

    <div class="flex h-full">
      <div class="w-4/6 flex-auto">
        <textarea
          class="editor"
          ref="editor"
          id="editor"
          name="editor"
        ></textarea>
      </div>

      <div class="w-2/6 px-4 ">

      <div class="shadow bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 mb-8">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Backtest</h2>
        <p class="leading-relaxed mb-3 text-gray-600">Using historical price data from Binance, test your algorithm's profitability.</p>
        <div class="relative mb-4">
          <label for="symbol" class="leading-7 text-sm text-gray-600">Symbol</label>
          <input value="BTCUSDT" type="text" name="symbol" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="days" class="leading-7 text-sm text-gray-600">Past Days</label>
          <input value="100" type="number" name="days" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Run</button>
        <p class="text-xs text-gray-500 mt-3">Backtest requires a "trade" function and uses one-minute candles sticks.</p>
      </div>


      <div class="shadow bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Task</h2>
        <p class="leading-relaxed mb-3 text-gray-600">A one-time task that can be used to analyze market trends.</p>
        <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Run</button>
        <p class="text-xs text-gray-500 mt-3">Task requires a "task" function.</p>
      </div>
    </div>
  </div>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import {EditorFromTextArea}  from "codemirror"

let cm : EditorFromTextArea
let code: any;

if (process.client) {
  code = require("codemirror");
  require("codemirror/mode/javascript/javascript");
  require("codemirror/keymap/sublime.js");
}

export default Vue.extend({

  // middleware: "auth",

  mounted() {

    cm = code.fromTextArea(this.$refs.editor, {
      lineNumbers: true,
      value: 'console.log("Hello, World");',
      mode: "javascript",
      theme: "monokai",
      keyMap: "sublime",
    });

    this.cm = cm;
  },

  methods: {
    onRun() {},
  },

  data() {
    return {
      body: "\n\n var x = console.log()",
      cm: null,
    };
  },
});

</script>

<style>
@import "codemirror/lib/codemirror.css";
@import "codemirror/theme/monokai.css";

.editor {
  height: 100%;
}

.CodeMirror {
  height: 100%;
}
</style>


