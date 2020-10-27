<template>
  <div>
    <div class="flex flex-row">
      <div>
        <input value="untitled" />
      </div>

      <div>
        <button
          class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          @click="onRun"
        >
          Save
        </button>
      </div>
    </div>

    <div class="mx-auto flex h-full">
      <div class="w-3/6 h-full">
        <textarea class="editor" ref="editor" id="editor" name="editor"></textarea>
      </div>

      <div class="w-3/6 p-4">
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
        <div class="p-8 border-4 min-"></div>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import Vue from "vue";

import * as code from "codemirror";
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/javascript/javascript");
require("codemirror/keymap/sublime.js");

export default Vue.extend({
  mounted() {
    let cm = code.fromTextArea(this.$refs.editor, {
      lineNumbers: true,
      value: 'console.log("Hello, World");',
      mode: "javascript",
      theme: "monokai",
      keyMap: "sublime",
    });

    this.cm = cm;
  },

  methods: {
    onRun() {
      console.log(this.body);
    },
  },

  data() {
    return {
      body: "\n\n var x = console.log()",
      cm: null,
    };
  },
});

// const ace = require("assets/ace/src/ace.js");
// require("assets/ace/src/theme-twilight");
// require("assets/ace/src/mode-javascript");
// require("assets/ace/src/worker-javascript");

// import Vue from "vue";

// export default Vue.extend({

//   mounted() {

//     this.editor = ace.edit("editor");
//     this.editor.setTheme("ace/theme/twilight");
//     var JavaScriptMode = ace.require("ace/mode/javascript").Mode;
//     this.editor.session.setMode(new JavaScriptMode());

//     this.editor.session.on("change", () => {
//       this.body = this.editor.getValue();
//     });
//   },

//   methods: {
//     onRun() {
//       console.log(this.body);
//     },
//   },

//   data() {
//     return {
//       editor: null,
//       body: "\n\n var x = console.log()",
//     };
//   },
// });
</script>

<style >
@import "codemirror/lib/codemirror.css";
@import "codemirror/theme/monokai.css";

.editor {
  height: 100%;
}

.CodeMirror {
  height: 100%;
}

</style>


