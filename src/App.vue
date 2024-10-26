<script setup>
import { ref, onMounted } from 'vue';
import { isInstagramBrowser } from './utils/utils';

const device = ref('');
const instagram = ref(false);

// Configure your redirect URL here
const redirectUrl = 'https://your-website.com';

const handleRedirect = () => {
  const isInstagram = isInstagramBrowser();
  const userAgent = navigator.userAgent;
  
  instagram.value = isInstagram;
  
  if (isInstagram) {
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      // iOS devices
      device.value = 'iOS';
      // Direct URL redirect works better for iOS
      window.location.href = redirectUrl;
    } else {
      // Android devices
      device.value = 'Android';
      // Use Android Intent URL scheme
      const intentUrl = `intent:${redirectUrl}#Intent;scheme=https;package=com.android.chrome;end`;
      window.location.href = intentUrl;
    }
  } else {
    device.value = 'Other Browser';
    // Optional: redirect or stay on page for non-Instagram browsers
    window.location.href = redirectUrl;
  }
};

// Optional: Auto-redirect on component mount
onMounted(() => {
  handleRedirect();
});
</script>

<template>
  <div class="p-4">
    <div>{{ 'Device Type: ' + device }}</div>
    <div>{{ 'Instagram Browser: ' + instagram }}</div>
    <button 
      @click="handleRedirect" 
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Open in Default Browser
    </button>
  </div>
</template>