<script setup>
import { isSocialMediaAppBrowser } from './utils/utils';
import { onMounted, ref } from 'vue';

const show = ref(false)

const isSocialMediaBrowser = ref(isSocialMediaAppBrowser());
const ua = navigator.userAgent.toLowerCase();

const detectDevice = () => {
  const ua = navigator.userAgent.toLowerCase();
  const isChrome = ua.includes('chrome')
  const isAndroid = ua.includes('android')
  const isIPhone = ua.includes('iphone')
  const isWindows = ua.includes('windows')
  const isSafari = ua.includes('Safari');

  if (isChrome) {

  }
  if (isSafari) return 'isSafari';
  if (isIPhone) return 'iPhone';
  if (isAndroid) return 'Android';
  if (isWindows) return 'Windows';
};

onMounted(() => {
  console.log(isSocialMediaBrowser.value);
});
</script>


<template>
  <p class="ml-4 mt-4">
    Is Social Browser - {{ isSocialMediaBrowser }} <br>
    Device - {{ detectDevice() }} <br>
    User Agent - {{ ua }} <br>
  </p>
  <div v-if="isSocialMediaBrowser" class=" flex items-center ml-4 my-4 p-3 h-20 w-96 bg-teal-400">
    If True
  </div>
  <div v-if="!isSocialMediaBrowser" class=" flex items-center ml-4 my-4 p-3 h-20 w-96 bg-red-400">
    If false
  </div>
  <div class="hidden">
    <button @click="show=!show" class=" bg-gray-400 mt-9 p-3 m-4 ">push</button>
    <transition 
      enter-active-class="ease-in duration-[0.3s] transform"
      enter-from-class="-translate-x-full"
      enter-to-class=" translate-x-0"
      
      leave-active-class="ease-out duration-[1s] transform"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
      >
      <div v-if="show" class=" flex items-center ml-4 my-4 p-3 h-20 w-96 bg-teal-400">
        Hello from Rihana
      </div>
      <div v-else class=" flex items-center ml-4 my-4 p-3 h-20 w-96 bg-red-400">
        Hello from Nikki Minaj
      </div>
    </transition>

  </div>
</template>
