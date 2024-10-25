<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['select','save'])
const props = defineProps(['jobList'])

</script>

<template>
  <p v-for="(job, index) in props.jobList" :key="index">
    {{ job.jobTitle }}
    <p @click="emit('select', job)">Show details</p>
    <button @click.stop="emit('save', job)">Add</button>
  </p>
</template>
