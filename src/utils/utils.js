/* export const isInstagramBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return userAgent.indexOf('Instagram') > -1;
}; */

export const isSocialMediaAppBrowser = () => {
  const ua = navigator.userAgent.toLowerCase().trim();
  const url = window.location.href;

  // Social Media Apps Detection
  const isInstagram = ua.includes('instagram');
  const isThreads = ua.includes('barcelona');
  const isLinkedIn = ua.includes('linkedin') || ua.includes('li app');
  const isFacebook = ua.includes('facebook') || ua.includes('fbav') || ua.includes('fban')|| ua.includes('fbios')|| ua.includes('fbop')|| ua.includes('fbdv')|| ua.includes('fbmd') || ua.includes('fbmd');
  const isYouTube = ua.includes('youtube') ||ua.includes('YouTube')|| ua.includes('crios') || ua.includes('com.google.android.youtube') || ua.includes('youtubeapp') ;
  const isTikTok = ua.includes('tiktok') || ua.includes('musically') || ua.includes('bytedancewebview') || ua.includes('musical_ly') || ua.includes('falcontag');


/*   if (ua.includes('safari') && !ua.includes('crios') && !ua.includes('chrome')) {
    if (window.location.href.includes('threads.net')) return 'Threads (iOS)';
    return 'Safari';
  } */
  // Return the appropriate name
  if (isInstagram) return 'Instagram';
  if (isLinkedIn) return 'LinkedIn';
  if (isTikTok) return 'TikTok';
  if (isFacebook) return 'Facebook';
  if (isThreads) return 'Threads';
  if (isYouTube) return 'YouTube';


  return 'Unknown Browser'; // Default if no match is found 
/* 
if (isInstagram || isLinkedIn || isTikTok || isFacebook || isThreads || isYouTube  ) return true
return false
*/

};
