<script setup>
import { ref, defineEmits } from 'vue';

const searchQuery = ref('')
const industry = ref('')
const geo = ref('usa')

const emit = defineEmits(['submit']);

</script>


<template>
  <header>
    
    <div>
      <input v-model="searchQuery" @keyup.enter="emit('submit', searchQuery,geo,industry)"/>
      <select v-model="geo">
        <option value="usa" selected>USA</option>
        <option value="japan">Japan</option>
        <option value="uk">UK</option>
      </select>
      <select v-model="industry">
        <option value="dev">Programming</option>
        <option value="business" >Business Development</option>
        <option value="data-science">Data Science</option>
      </select>
      <input type="submit" @click="emit('submit', searchQuery, geo, industry)"/>
    </div>

  </header>
</template>
