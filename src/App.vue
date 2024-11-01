<script setup>
import { ref } from 'vue';
import { results } from '../src/utils/api-for-test';

const sum = ref(0)

const isDisabled = ref(false)

const add = () => {
    isDisabled.value=true
sum.value += 1
}

</script>

<template>



  <!-- Check if `results` is an array and has items before looping -->
  <div v-if="Array.isArray(results) && results.length">
    <div v-for="data in results" :key="data?.id">
      <div v-if="data && data.id === undefined">
        Everything is ok
      </div>
      <div v-else-if="data && data.id === null">
        Some error occurred
      </div>
      <div v-else>
        Data ID: {{ data?.id || 'No ID' }}
      </div>
    </div>
  </div>
  <div v-else>
    Loading or no data available
  </div>



</template>
