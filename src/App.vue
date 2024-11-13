<script setup>
import { onMounted, ref } from 'vue'
import Scroll from '@/components/scroll.vue'
import Description from '@/components/description.vue'
import {isSocialMediaAppBrowser} from '@/utils/utils'
import { socialButtonStyle, fadedSocialButtonStyle } from '@/utils/styles'

const latitude = ref(null)
const longitude = ref(null)

let userId = localStorage.getItem('userId');

const isSocialMediaBrowser = ref(isSocialMediaAppBrowser());
const ua = navigator.userAgent.toLowerCase();

const detectDevice = () => {
  const ua = navigator.userAgent.toLowerCase();
  const isChrome = ua.includes('chrome')
  const isAndroid = ua.includes('android')
  const isIPhone = ua.includes('iphone')
  const isWindows = ua.includes('windows')
  const isSafari = ua.includes('Safari');
  if (isSafari) return 'isSafari';
  if (isIPhone) return 'iPhone';
  if (isAndroid) return 'Android';
  if (isWindows) return 'Windows';
};




/* const sendLocation = () => {
  if (!userId) {
  userId = crypto.randomUUID(); // Generate a unique ID
  localStorage.setItem('userId', userId);
}
  //const ua = navigator.userAgent.toLowerCase().trim();
  
  // Check if the device is running Windows
  //if (ua.includes('windows')) {
  if (userId) {
    if ('geolocation' in navigator) {  // Check if geolocation is available
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude.value = position.coords.latitude
          longitude.value = position.coords.longitude
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
};
 */
const show = ref(false)
const hide = ref(false)  // Define 'hide' if it's needed
const isTransitioned = ref(null)  // Define 'hide' if it's needed

const toggle = () => {
  show.value = !show.value
  setTimeout(() => {
      isTransitioned.value = show.value
    }, 1000)

} 



</script>

<template>
  <div >
    <p class="ml-4 mt-4">
      Is Social Browser - {{ isSocialMediaBrowser }} <br>
      Device - {{ detectDevice() }} <br>
      User Agent - {{ ua }} <br>
    </p>

    <div class="m-auto p-8 bg-gray-100 w-min flex flex-col items-center">
      <p class=" text-lg  ">Test area </p>
      If button is disabled and message apears - app is working corectly <br>
      if not - app was redirectet to browser or don't work properly
      <button
        class="h-10 w-80 mt-4"
        :class="isSocialMediaBrowser ?  fadedSocialButtonStyle : socialButtonStyle"
        :disabled="isSocialMediaBrowser"
      >
        login with google
      </button>
       
    <div v-if="isSocialMediaBrowser" 
    class=" flex items-center h-20 w-96 bg-[#FFD064] rounded-md mt-4"
    >
      To sign in with Google, tap the 3 dots (⋮) & select ‘Open in Browser’”
    </div>
  </div>


<!--     <div v-if="!isSocialMediaBrowser" class=" flex items-center ml-4 my-4 p-3 h-20 w-96 bg-red-400">
      If false
    </div> -->
  </div>

<div class="hidden" >
    <div class="flex h-screen bg-slate-500">
      <div class="w-full flex flex-row h-[calc(100vh-60px)]">
        <div id="onboarding-generator-points" data-step="2" class="h-full overflow-visible z-20">
        <transition
          enter-active-class="ease-in-out duration-[1s] transform"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"

          leave-active-class="ease-in-out duration-[1s] transform"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"

          
          mode="out-in">
          <div v-if="show" class="h-screen min-w-[618px] max-w-[618px] z-10 bg-gray-300">
            <Description />
          </div>
        </transition>
      </div>
      <div class="flex-none h-screen absolute">
        <Scroll />
      </div>
      <div 
      :class="isTransitioned ? 'w-[calc(100%-618px)]' : 'absolute left-[70px] h-full w-[618px]'" 
      class="w-96 h-screen bg-slate-300">
        PDF svsdfbsdfbsdfsdfsdfgdF
      </div>
    </div>
    <button @click="toggle" class="bg-gray-400 mt-9 p-3 m-4">push</button>
  </div>
</div>
</template>

<style scoped>

</style>