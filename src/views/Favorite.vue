<script setup>
import { store } from '@/Store';
const props = defineProps(['jobList'])

function removeSaved(index) {
    store.removeSaved(index);
}
</script>

<template>
  <p>Saved</p>

  <p v-if="store.savedItems.length === 0">No items added yet.</p>

  <ul v-else>
    <li v-for="(job, index) in store.savedItems" :key="index">
      {{ job.jobTitle }}
      <button @click="removeSaved(index)">Remove</button>
    </li>
  </ul>

</template>
