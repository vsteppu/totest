<script setup>
import { ref } from 'vue';
import { isInstagramBrowser } from '../src/utils'


const device =ref('') 
const instagram =ref('') 

const checkBrowser = () => {
  const isInstagram = isInstagramBrowser()
  const ua = navigator.userAgent
  console.log(ua)
  console.log(isInstagram)
  instagram.value = isInstagram
  if (isInstagram) {
    if (/iPad|iPhone|iPod/.test(ua)) {
      device.value = `It's Apple`
      window.location.href = redirectUrl;
    } else {
      device.value = `It's Android`
      //window.open('https://search-for-jobs.netlify.app', '_blank');
      //window.location.replace('https://search-for-jobs.netlify.app/')
      //window.location.href = window.location.protocol + '//' + window.location.host;
      //window.location.href = `intent:${window.location.host}#Intent;end`;
      window.location.href = `intent:https://totestforme.netlify.app/#Intent;end`;
    }
  } else {
    device.value = `It's windows`
  }
}

</script>

<template>
  <div>{{ 'Device: ' + device }}</div>
  <div>{{ 'Is Instagram: ' + instagram }}</div>
  <button @click="checkBrowser()">Verify</button>
</template>
