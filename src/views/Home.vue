<template>

<Search @submit="handleSearch" />
<p v-if="errorMessage">{{ errorMessage }}</p>
<Scroll v-if="jobList.length > 0" :jobList="jobList" @select="handleJobClick" @save="addToSaved"/>
<Description :selectJob="jobDescription" />

</template>  

<script setup>
  import { ref } from 'vue';
  import { store } from '@/Store';


  import Search from '@/components/search.vue';
  import Scroll from '@/components/scroll.vue';
  import Description from '@/components/description.vue';

  
  const jobList = ref([]);
  const errorMessage = ref('')
  const jobDescription = ref(null)
    

  const handleSearch = async (searchQuery, geo, industry) => {
    try {
      const response = await fetch(`https://jobicy.com/api/v2/remote-jobs?tag=${searchQuery}&geo=${geo}&industry=${industry}`);  
      const data = await response.json();
      console.log(data);
      if (data.jobCount === 0) {
        errorMessage.value = 'Job not found';
        console.log('Jobs not found');
        jobList.value = [];
      } else {
        jobList.value = data['jobs'];
        errorMessage.value = '';
      }
    } catch (error) {
      errorMessage.value = 'An error occurred. Please try again.';
      console.error(error);
    }
  };
  
  const handleJobClick = (job) => {
    jobDescription.value = job.jobDescription
  }

const addToSaved = (job) => {
  store.addToSaved(job);
};
  
  
  </script>