export const isInstagramBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return userAgent.indexOf('Instagram') > -1;
};

export const isSocialMediaAppBrowser = () => {
    const ua = navigator.userAgent.toLowerCase();
    // Social Media Apps Detection
    const isInstagram = ua.includes('instagram');
    const isThreads = ua.includes('threads');
    const isYouTube = ua.includes('youtube');
    const isLinkedIn = ua.includes('linkedin') || ua.includes('li app');
    const isTikTok = ua.includes('tiktok') || ua.includes('musically');
    const isFacebook = ua.includes('facebook') || ua.includes('fbav');
    const isChrome = ua.includes('chrome') && !ua.includes('edge') && !ua.includes('opr');
    
    // Return the appropriate name
    if (isInstagram) return 'Instagram';
    if (isLinkedIn) return 'LinkedIn';
    if (isTikTok) return 'TikTok';
    if (isFacebook) return 'Facebook';
    if (isThreads) return 'Threads';
    if (isYouTube) return 'YouTube';
    if (isChrome) return 'Chrome';
      
    return 'Unknown Browser'; // Default if no match is found
  };
  
/* export const isSocialMediaAppBrowser = () => {
  const ua = navigator.userAgent.toLowerCase(); 
  const isInstagram = ua.includes('instagram');
  const isLinkedIn = ua.includes('linkedin') || ua.includes('li app');
  const isTikTok = ua.includes('tiktok') || ua.includes('musically');
  const isFacebook = ua.includes('facebook') || ua.includes('fbav');
  const isThreads = ua.includes('threads');
  const isYouTube = ua.includes('youtube');
  
  return ua || isInstagram || isLinkedIn || isTikTok || isThreads || isYouTube || isFacebook;
}; */