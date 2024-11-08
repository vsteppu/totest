/* export const isInstagramBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return userAgent.indexOf('Instagram') > -1;
}; */

export const isSocialMediaAppBrowser = () => {
  const ua = navigator.userAgent.toLowerCase().trim();
  const url = window.location.href;

  // Social Media Apps Detection
  const isInstagram = ua.includes('instagram'); //saw on android / saw on IPhone
  const isLinkedIn = ua.includes('linkedin') || ua.includes('li app'); //redirect on android / saw on iphone
  const isFacebook = ua.includes('facebook') || ua.includes('fbav'); //saw on android / saw on IPhone
  const isThreads = ua.includes('threads')  //redirect on android
  const isYouTube = ua.includes('youtube') || ua.includes('crios'); //redirect on android /
  const isTikTok = ua.includes('tiktok') || ua.includes('musically'); // ??? / ???
  const isSafari = ua.includes('safari') && !ua.includes('chrome') && !ua.includes('crios');
  const isChrome = ua.includes('chrome') || ua.includes('crios');


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
  if (isChrome) return 'Chrome';
  if (isSafari) return 'Safari';

  return 'Unknown Browser'; // Default if no match is found 
/* 
if (isInstagram || isLinkedIn || isTikTok || isFacebook || isThreads || isYouTube  ) return true
return false
*/

};

