'use strict';

// use IIFE to avoid redeclaration of const/let
(() => {
  const links = document.getElementsByTagName('link');
  const linksLength = links.length;
  let hasFeeds = false;

  for (let i = 0; i < linksLength; i++) {
    const link = links[i];
    if (link.type && link.rel && link.rel.split(' ').indexOf('alternate') >= 0) {
      if (link.type.indexOf('rss') >= 0 || link.type.indexOf('atom') >= 0) {
        if (link.href && link.href.length > 0) {
          hasFeeds = true;
          break;
        }
      }
    }
  }

  if (hasFeeds) {
    browser.runtime.sendMessage({ message : 'has_feed' });
  }
  else {
    browser.runtime.sendMessage({ message : 'has_no_feed' });
  }
})();
