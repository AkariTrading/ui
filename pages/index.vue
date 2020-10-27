<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  middleware: "auth",

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

      balances: [
        {
          symbol: "LINKUSDT",
          amount: 1200,
          avgBuy: 8.75,
          total: 12000,
        },
        {
          symbol: "ETHUSDT",
          amount: 123,
          avgBuy: 415.75,
          total: 5000,
        },
        {
          symbol: "XRPBTC",
          amount: 120000,
          avgBuy: 0.000021,
          total: 3200,
        },
      ],
    };
  },
});
</script>

<template>
  <div>
    <div class="w-10/12 mx-auto py-6 px-4">
      <div class="flex flex-row items-start">
        <div class="shadow w-3/5 mr-4">
          <div class="p-4">
            <div
              class="rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            >
              <!-- <div class="flex flex-row justify-between mb-5">
                <div class="">
                  <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    Exchanges
                  </h2>
                </div>
                <div class="">
                  <button class="text-gray-600">Connect Exchange</button>
                </div>
              </div> -->

              <div class="mb-4">
                <div class="flex flex-row justify-between">
                  <div class="flex flex-wrap">
                    <span
                      class="px-3 pb-3 w-auto justify-center border-b-2 font-medium items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t"
                    >
                      BINANCE
                    </span>
                  </div>

                  <div class="">
                    <button class="leading-relaxed text-gray-600">
                      Connect Exchange
                    </button>
                  </div>
                </div>
              </div>

              <div class="">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  Balance
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  $35,000
                </h1>
              </div>
              <div class="flex flex-col">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        class="py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Symbol
                      </th>
                      <th
                        class="py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Amount
                      </th>

                      <th
                        class="py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Avg Buy
                      </th>

                      <th
                        class="py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="balance in balances" :key="balance.symbol">
                      <td class="py-2 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">
                          {{ balance.symbol }}
                        </div>
                      </td>
                      <td class="py-2 whitespace-no-wrap">
                        <span
                          class="py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
                        >
                          {{ balance.amount }}
                        </span>
                      </td>

                      <td class="py-2 whitespace-no-wrap">
                        <span
                          class="py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
                        >
                          {{ balance.avgBuy }}
                        </span>
                      </td>

                      <td class="py-2 whitespace-no-wrap">
                        <span class="py-2 whitespace-no-wrap text-sm leading-5">
                          ${{ balance.total }}
                        </span>
                      </td>
                    </tr>

                    <!-- More rows... -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="w-2/5">
          <div class="shadow p-4 mb-4">
            <div
              class="rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            >
              <div class="flex flex-row justify-between mb-5">
                <div class="">
                  <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    Running Jobs
                  </h2>
                </div>
                <div class="">
                  <button class="leading-relaxed text-gray-600">New Job</button>
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
                  <tbody class="divide-y divide-gray-200">
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
              class="rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            >
              <div class="flex flex-row justify-between mb-5">
                <div class="">
                  <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    Scripts
                  </h2>
                </div>
                <div class="">
                  <nuxt-link to="/script"
                    ><button class="text-gray-600">
                      Create Script
                    </button></nuxt-link
                  >
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

<style>
</style>
