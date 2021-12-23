'use strict';

/* global feeds */

const iframe = document.createElement('iframe');
const resource = window.location.toString();
let loaded = false;

iframe.setAttribute('style', 'display:block; position:fixed; top:0px; left:0px; width:100%; height:100%; border:0px; background: transparent; z-index: 2147483647');
iframe.setAttribute('src', 'https://www.subtome.com/?subs/#/subscribe?resource=' + encodeURIComponent(resource) + '&feeds=' + encodeURIComponent(feeds.join(',')));

iframe.onload = function () {
  if (loaded) {
    document.getElementsByTagName('body')[0].removeChild(iframe);
  }

  loaded = true;
};

document.getElementsByTagName('body')[0].appendChild(iframe);
