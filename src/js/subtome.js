'use strict';

// use IIFE to avoid redeclaration of const/let
(() => {
  const feeds = [];
  const links = document.getElementsByTagName('link');
  const linksLength = links.length;
  const iframe = document.createElement('iframe');
  const resource = window.location.toString();
  let loaded = false;

  for (let i = 0; i < linksLength; i++) {
    const link = links[i];
    if (link.type && link.rel && link.rel.split(' ').indexOf('alternate') >= 0) {
      if (link.type.indexOf('rss') >= 0 || link.type.indexOf('atom') >= 0) {
        if (link.href && link.href.length > 0) {
          feeds.push(encodeURIComponent(link.href));
        }
      }
    }
  }

  iframe.setAttribute('style', 'display:block; position:fixed; top:0px; left:0px; width:100%; height:100%; border:0px; background: transparent; z-index: 2147483647');
  iframe.setAttribute('src', 'https://www.subtome.com/?subs/#/subscribe?resource=' + encodeURIComponent(resource) + '&feeds=' + encodeURIComponent(feeds.join(',')));

  iframe.onload = function () {
    if (loaded) {
      document.getElementsByTagName('body')[0].removeChild(iframe);
    }

    loaded = true;
  };

  document.getElementsByTagName('body')[0].appendChild(iframe);
})();
