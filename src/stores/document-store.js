import { defineStore } from 'pinia';

export const useDocumentStore = defineStore('document', {
  state: () => ({
    documentName: null,
    documentID : null
  }),
  getters: {
    // documentName: (state) => state.documentName
  },
  actions: {
    setDocumentName(newDocumentName) {
      this.documentName = newDocumentName
    },
    setDocumentID(newDocumentID){
      this.documentID = newDocumentID
    }

  },
});
