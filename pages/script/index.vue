<template>
  <div class="h-screen">
    <Nav />

    <div>
      <button @click="onRun">Click ME</button>
    </div>

    <div class="mx-auto flex h-full">
      <div id="editor" class="w-3/6 h-full text-2xl">{{ body }}</div>
    </div>
  </div>
</template>

<script lang="ts">
const ace = require("assets/ace/src/ace.js");
require("assets/ace/src/theme-twilight.js");
require("assets/ace/src/mode-javascript");

import Vue from "vue";

export default Vue.extend({
  mounted() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/twilight");
    var JavaScriptMode = ace.require("ace/mode/javascript").Mode;
    this.editor.session.setMode(new JavaScriptMode());

    this.editor.session.on("change", () => {
      this.body = this.editor.getValue();
    });
  },

  methods: {
    onRun() {
      console.log(this.body);
    },
  },

  data() {
    return {
      editor: null,
      body: "\n\n var x = console.log()",
    };
  },
});
</script>

<style>
/* #editor {
  position: absolute;
  width: 500px;
  height: 400px;
} */
</style>


