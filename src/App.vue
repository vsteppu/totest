<script setup>
import { ref, onMounted } from 'vue';
import { isInstagramBrowser } from './utils/utils';

const device = ref('');
const instagram = ref(false);

// Your actual URL
const currentUrl = window.location.href;
// Remove any 'intent://' if present
const cleanUrl = currentUrl.replace('intent://', 'https://');

const handleRedirect = () => {
  const isInstagram = isInstagramBrowser();
  const userAgent = navigator.userAgent;
  
  instagram.value = isInstagram;
  console.log('Is Instagram Browser:', isInstagram);
  
  if (isInstagram) {
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      device.value = 'iOS';
      // For iOS, try to force open in new window
      const newWindow = window.open(cleanUrl, '_blank');
      if (!newWindow) {
        window.location.href = cleanUrl;
      }
    } else {
      device.value = 'Android';
      // For Android, use a more specific intent URL format
      try {
        // Try the more specific Chrome intent first
        const intentUrl = `intent://${window.location.hostname}${window.location.pathname}${window.location.search}#Intent;` +
          'scheme=https;' +
          'package=com.android.chrome;' +
          `S.browser_fallback_url=${encodeURIComponent(cleanUrl)};` +
          'end';
        window.location.href = intentUrl;
        
        // Fallback after a short delay if the intent doesn't work
        setTimeout(() => {
          if (document.hidden) {
            return; // Chrome was opened
          }
          // If Chrome didn't open, try the default browser
          window.location.href = cleanUrl;
        }, 500);
      } catch (e) {
        console.error('Redirect failed:', e);
        // Ultimate fallback
        window.location.href = cleanUrl;
      }
    }
  } else {
    device.value = 'Other Browser';
    console.log('Not Instagram browser, no redirect needed');
  }
};

// Auto-redirect on mount
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