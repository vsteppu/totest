/* export const isInstagramBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return userAgent.indexOf('Instagram') > -1;
}; */

export const isSocialMediaAppBrowser = () => {
  const ua = navigator.userAgent.toLowerCase().trim();

  // Social Media Apps Detection
  const REDIRECT_FROM_SN = [ 
    'instagram',
    'barcelona',
    'linkedin',
    'li app',
    'facebook',
    'fbav',
    'fban',
    'fbios',
    'fbop',
    'fbdv',
    'fbmd',
    'youtube',
    'YouTube',
    'crios',
    'com.google.android.youtube',
    'youtubeapp',
    'tiktok',
    'musically',
    'bytedancewebview',
    'musical_ly',
    'falcontag'
  ]

  return REDIRECT_FROM_SN.filter(sn => ua.includes(sn)).length > 0;
  //return 'Unknown Browser'; // Default if no match is found 
/* 
if (isInstagram || isLinkedIn || isTikTok || isFacebook || isThreads || isYouTube  ) return true
return false
*/
};
