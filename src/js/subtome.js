'use strict';

var s = document.createElement('iframe');
var resource = window.location.toString();
s.setAttribute('style', 'position:fixed;top:0px; left:0px; width:100%; height:100%; border:0px; background: transparent; z-index: 2147483647');
s.setAttribute('src', '//www.subtome.com/subscribe.html?resource=' + encodeURIComponent(resource) + '&feeds=' + feeds.join(','));
var loaded = false;
s.onload = function () {
  if (loaded) {
    document.getElementsByTagName('body')[0].removeChild(s);
  }
  loaded = true;
};
document.getElementsByTagName('body')[0].appendChild(s);
