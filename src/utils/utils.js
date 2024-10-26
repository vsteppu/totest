export const isInstagramBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return userAgent.indexOf('Instagram') > -1;
};