'use strict';

var feeds = [];
var links = document.getElementsByTagName('link');
for (let i = 0; i < links.length; i++) {
  if (links[i].rel) {
    if (links[i].rel.split(' ').indexOf('alternate') >= 0) {
      if (links[i].href && links[i].href.length > 0) {
        feeds.push(encodeURIComponent(links[i].href));
      }
    }
  }
}

if (feeds.length > 0) {
  browser.runtime.sendMessage({ message : 'has_feed' })
} else {
  browser.runtime.sendMessage({ message : 'has_no_feed' });
}
