export const isInstagramBrowser = () =>{
    const ua = navigator.userAgent 
    const isInstagram = ua.indexOf('Instagram') > -1;
    return isInstagram
  }