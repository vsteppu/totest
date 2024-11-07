<script setup>
import { isSocialMediaAppBrowser } from './utils/utils';
import { onMounted, ref } from 'vue';

const isSocialMediaBrowser = ref(isSocialMediaAppBrowser());
const ua = navigator.userAgent.toLowerCase();

const detectDevice = () => {
  const ua = navigator.userAgent.toLowerCase();
  const isAndroid = ua.includes('android')
  const isIPhone = ua.includes('iphone')
  const isWindows = ua.includes('windows')

  if (isIPhone) return 'iPhone';
  if (isAndroid) return 'Android';
  if (isWindows) return 'Windows';
};

onMounted(() => {
  if(isSocialMediaBrowser.value == isInstagram){
    window.open(link, '_system')
  }
  
  console.log(isSocialMediaBrowser.value);
});
</script>


<template>
  <p>
  Is Social Browser - {{ isSocialMediaBrowser }} <br>
  Device - {{ detectDevice() }} <br>
  User Agent - {{ ua }} <br>
  </p>

  <div>
<!--     <transition
    enter-active-class="ease-in-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    
    leave-active-class="ease-in-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      
      mode="out-in"
      >
      <div class="h-full bg-gray-300">
      </div>
    </transition> -->
</div>
</template>
