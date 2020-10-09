<template>
  <div class="border-b-2 border-gray-200 mb-4">
   <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center ">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">fiScript</span> <span class="ml-4 text-red-500">Demo</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a target="_blank" href="https://twitter.com/goodarchitect94" class="text-gray-900 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">@goodarchitect94</a>
      <a target="_blank" href="https://www.buymeacoffee.com/goodarchitect/what-fiscript-io" class="text-gray-900 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Documentation</a>
    </nav>

    <div class="coffe">
      <a href="https://www.buymeacoffee.com/goodarchitect" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
    </div>

    <!-- <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="goodarchitect" data-color="#FFDD00" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script> -->
    <!-- <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> -->
  </div>
  </div>
</template>


<style>
</style>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({

  data() {
    return {
      showDropdown: false,
    };
  },

  mounted() {

  },

  methods: {
    onHideDropdown() {
      this.showDropdown = false;
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    logout() {
      this.$auth.logout();
    }
  },
});
</script>