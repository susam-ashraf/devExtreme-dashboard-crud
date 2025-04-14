<template>
  <div>
    <div class="relative overflow-x-auto mt-14">
      <form
        class="max-w-4xl mx-auto grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-2 mb-10 shadow-xl p-10"
      >
        <div class="mb-5">
          <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >Employee Id</label
          >
          <input
            type="text"
            v-model="state.search"
            id="empId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Employee Id"
            required
          />
        </div>
        <div class="mb-5">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >Employee Name</label
          >
          <input
            type="text"
            v-model="state.searchName"
            id="empName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Employee Name"
            required
          />
        </div>
        <button
          type="button"
          class="mr-20 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Search
        </button>
      </form>

      <!-- Attendance modal -->
      <DashboardDevExtreameModal />

      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_empId") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_empName") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_typeReason") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_reason") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_dateEntry") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_dateReturn") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_action") }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in filterTableData"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ order.ID }}
            </th>
            <td class="px-6 py-4">
              {{ order.EmployeeName }}
            </td>
            <td class="px-6 py-4">
              {{ order.TypeReason }}
            </td>
            <td class="px-6 py-4">
              {{ order.Reason }}
            </td>
            <td class="px-6 py-4">
              {{ order.EntryWork }}
            </td>
            <td class="px-6 py-4">
              {{ order.ReturnWork }}
            </td>
            <td class="px-6 py-4">
              <button @click="toggleModal" type="button" class="">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted } from "vue";

import { useTableDataStore } from "../../../stores/tableData.js";
import type { EmployeeDataType } from "@/types/dataTypes.js";
import { useModalStore } from "@/stores/modal.js";

const store = useTableDataStore();

const state = reactive({
  search: <string>"",
  searchName: <string>"",
  tableData: <EmployeeDataType[]>[],
});

const filterTableData = computed(() => {
  let filtered: EmployeeDataType[] = state.tableData;
  if (state.search != "") {
    const search = state.search.toLowerCase();
    // const searchName = state.searchName.toLowerCase();
    filtered = filtered.filter(
      (item: EmployeeDataType) =>
        item.ID.toString().includes(search) || item.EmployeeName.toLowerCase().includes(search)
    );
  }
  return filtered;
});
onMounted(() => {
  // You can perform any data fetching or initialization here
  state.tableData = store.orders as EmployeeDataType[];
});

const modalStore = useModalStore();

function toggleModal() {
  modalStore.toggleModal(!modalStore.open, true);
}
</script>

<style scoped>
#gridContainer {
  height: 440px;
}

.options {
  padding: 20px;
  margin-top: 20px;
  background-color: rgba(191, 191, 191, 0.15);
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option {
  margin-top: 10px;
}

.option > span {
  margin-right: 10px;
}

.option > .dx-selectbox {
  display: inline-block;
  vertical-align: middle;
}
</style>
