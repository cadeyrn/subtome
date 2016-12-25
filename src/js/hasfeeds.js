'use strict';

var feeds = [];
var links = document.getElementsByTagName('link');
var length = links.length;

for (let i = 0; i < length; i++) {
  var link = links[i];
  if (link.type && link.rel && link.rel.split(' ').indexOf('alternate') >= 0) {
    if (link.type.indexOf('rss') >= 0 || link.type.indexOf('atom') >= 0) {
      if (link.href && link.href.length > 0) {
        feeds.push(encodeURIComponent(link.href));
      }
    }
  }
}

if (feeds.length > 0) {
  browser.runtime.sendMessage({ message : 'has_feed' });
} else {
  browser.runtime.sendMessage({ message : 'has_no_feed' });
}
