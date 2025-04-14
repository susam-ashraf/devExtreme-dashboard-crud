import { defineStore } from "pinia";

interface ModalState {
  open: boolean;
  isEdit: boolean;
}

export const useModalStore = defineStore<
  "modal",
  ModalState,
  {},
  { toggleModal: (toggle: boolean, isEditData: boolean) => void }
>("modal", {
  state: (): ModalState => ({
    open: false,
    isEdit: false,
  }),
  actions: {
    toggleModal(toggle: boolean, isEditData: boolean) {
      this.open = toggle;
      this.isEdit = isEditData;
    },
  },
});
