/* export const isInstagramBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return userAgent.indexOf('Instagram') > -1;
}; */
import {REDIRECT_FROM_SN} from '../utils/storage'

export const isSocialMediaAppBrowser = () => {
  const ua = navigator.userAgent.toLowerCase().trim();
  return REDIRECT_FROM_SN.filter(sn => ua.includes(sn)).length > 0;
};
