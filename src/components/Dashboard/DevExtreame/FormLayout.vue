<template>
  <form>
    <div class="space-y-12 min-w-2xl">
      <div class="border-b border-gray-900/10 pb-5 min-w-2xl"></div>

      <div class="border-b border-gray-900/10 pb-12 min-w-2xl">
        <div class="mt-10 grid grid-cols-6 gap-x-16 gap-y-8 sm:grid-cols-6 susam bg-green">
          <div class="sm:col-span-3">
            <label for="id_no" class="block text-sm/6 font-medium text-gray-900">ID No : </label>
            <div class="mt-2">
              <input
                v-model="state.EmployeeId"
                type="text"
                name="id_no"
                id="id_no"
                autocomplete="given-name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm/6 font-medium text-gray-900"
              >Employee Name</label
            >
            <div class="mt-2">
              <input
                v-model="state.EmployeeName"
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <form class="max-w-sm mx-auto">
              <label for="countries" class="block text-sm/6 font-medium text-gray-900"
                >Type of Reason</label
              >
              <select
                id="countries"
                v-model="state.TypeReason"
                class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a reason</option>
                <option value="sick_leave">Sick Leave</option>
                <option value="vacation">Vacation</option>
                <option value="half_day_leave">Half Day Leave</option>
                <option value="others">Others</option>
              </select>
            </form>
          </div>
          <div class="sm:col-span-3">
            <label for="reason" class="block text-sm/6 font-medium text-gray-900">Reason</label>
            <div class="mt-2">
              <input
                v-model="state.Reason"
                type="text"
                name="reason"
                id="reason"
                autocomplete="reason"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <div class="col-span-3">
            <label for="street-address" class="block text-sm/6 font-medium text-gray-900"
              >Date & Time of Entry to Work
            </label>
            <div class="mt-2">
              <div class="relative max-w-sm">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
                <input
                  v-model="state.EntryWork"
                  datepicker
                  id="default-datepicker"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <label for="street-address" class="block text-sm/6 font-medium text-gray-900"
              >Return To work Time
            </label>
            <div class="mt-2">
              <div class="relative max-w-sm">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
                <input
                  v-model="state.ReturnWork"
                  datepicker
                  id="default-datepicker"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <label for="street-address" class="block text-sm/6 font-medium text-gray-900"
              >New Office Opening Date & Time
            </label>
            <div class="mt-2">
              <div class="relative max-w-sm">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
                <input
                  v-model="state.OfficeOpening"
                  datepicker
                  id="default-datepicker"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <label for="street-address" class="block text-sm/6 font-medium text-gray-900"
              >New Office Re-Entry Date & Time
            </label>
            <div class="mt-2">
              <div class="relative max-w-sm">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
                <input
                  v-model="state.OfficeReEntry"
                  datepicker
                  id="default-datepicker"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button @click="toggleModal" type="button" class="text-sm/6 font-semibold text-gray-900">
        Cancel
      </button>
      <button
        @click="
          updateTableData();
          toggleModal();
        "
        type="button"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  EmployeeId: "",
  EmployeeName: "",
  TypeReason: "",
  Reason: "",
  EntryWork: "",
  ReturnWork: "",
  OfficeOpening: "",
  OfficeReEntry: "",
});

import { useTableDataStore } from "../../../stores/tableData.js";
import { useModalStore } from "@/stores/modal.js";

const store = useTableDataStore();

function updateTableData() {
  store.addTabelData(state.EmployeeId, state.EmployeeName);
}

const modalStore = useModalStore();

function toggleModal() {
  modalStore.toggleModal(!modalStore.open, false);
}
</script>
