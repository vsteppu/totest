// src/store.js
import { reactive } from 'vue';

export const store = reactive({
  jobItems: [],
  savedItems: [],        // Items to be added to the About page


  addItem(item) {
    this.jobItems.push(item);
  },


  addToSaved(job) {
    this.savedItems.push(job);
  },


  removeItem(index) {
    this.jobItems.splice(index, 1);
  },

  removeSaved(index) {
    this.savedItems.splice(index, 1);
  },
});
