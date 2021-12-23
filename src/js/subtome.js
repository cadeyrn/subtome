'use strict';

var s = document.createElement('iframe');
var resource = window.location.toString();
var src = 'https://www.subtome.com';
src += '/?subs';
src += '/#/subscribe?resource=' + encodeURIComponent(resource) + '&feeds=' + encodeURIComponent(feeds.join(','));
s.setAttribute('style', 'display:block; position:fixed; top:0px; left:0px; width:100%; height:100%; border:0px; background: transparent; z-index: 2147483647');
s.setAttribute('src', src);
var loaded = false;
s.onload = function () {
  if (loaded) {
    document.getElementsByTagName('body')[0].removeChild(s);
  }
  loaded = true;
};
document.getElementsByTagName('body')[0].appendChild(s);
