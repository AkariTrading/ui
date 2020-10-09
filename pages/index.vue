<template>
  <div>
    <Nav />

    <div class="w-10/12 mx-auto py-6 px-4">
      <div class="flex flex-row items-start">
        <div class="shadow w-3/5 mr-4">
          <div class="p-4 mx-auto">yo</div>
        </div>

        <div class="w-2/5">
          <div class="shadow p-4 mb-4">
            <div
              class="bg-white rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            >
              <div class="flex flex-row justify-between mb-5">
                <div class="">
                  <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    Running Jobs
                  </h2>
                </div>
                <div class="">
                  <button class="leading-relaxed text-gray-600">
                    Create Script
                  </button>
                </div>
              </div>

              <div class="flex flex-col">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        class="py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        class="py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Last Updated
                      </th>
                      <th class="py-2 bg-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="script in scripts" :key="script.title">
                      <td class="py-2 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">
                          {{ script.title }}
                        </div>
                      </td>
                      <td class="py-2 whitespace-no-wrap">
                        <span
                          class="py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
                        >
                          {{ script.updatedAt }}
                        </span>
                      </td>
                      <td
                        class="py-2 whitespace-no-wrap text-right text-sm leading-5 font-medium"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>

                    <!-- More rows... -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="shadow p-4">
            <div
              class="bg-white rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            >
              <div class="flex flex-row justify-between mb-5">
                <div class="">
                  <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    Scripts
                  </h2>
                </div>
                <div class="">
                  <button class="leading-relaxed text-gray-600">
                    Create Script
                  </button>
                </div>
              </div>

              <div class="flex flex-col">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        class="py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        class="py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Last Updated
                      </th>
                      <th class="py-2 bg-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="script in scripts" :key="script.title">
                      <td class="py-2 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">
                          {{ script.title }}
                        </div>
                      </td>
                      <td class="py-2 whitespace-no-wrap">
                        <span
                          class="py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
                        >
                          {{ script.updatedAt }}
                        </span>
                      </td>
                      <td
                        class="py-2 whitespace-no-wrap text-right text-sm leading-5 font-medium"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>

                    <!-- More rows... -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      scripts: [
        {
          title: "BTC, moving averate test",
          updatedAt: "Jan 1st, 2012",
        },
        {
          title: "Algo test #2",
          updatedAt: "Mar 1st, 2012",
        },
      ],
    };
  },
});
</script>

<style>
</style>
