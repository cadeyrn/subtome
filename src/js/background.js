'use strict';

const subtome = {
  hasFeeds : function () {
    browser.tabs.executeScript(null, { file : 'js/hasfeeds.js' });
  },

  handleResponse : function (response) {
    let gettingActiveTab = browser.tabs.query({ active : true, currentWindow : true });

    if (response.message === 'has_no_feed') {
      gettingActiveTab.then(function (tabs) {
        let tabId = tabs[0].id;
        browser.browserAction.disable(tabId);
        browser.browserAction.setTitle({ tabId : tabId, title : browser.i18n.getMessage('page_has_no_feed') });
      });
    } else {
      gettingActiveTab.then(function (tabs) {
        let tabId = tabs[0].id;
        browser.browserAction.enable(tabId);
        browser.browserAction.setTitle({ tabId : tabId, title : browser.i18n.getMessage('actionbutton_title') });
      });
    }
  },

  browserAction : function () {
    browser.tabs.executeScript(null, { file : 'js/subtome.js' });
  }
};

browser.tabs.onUpdated.addListener(subtome.hasFeeds);
browser.runtime.onMessage.addListener(subtome.handleResponse);
browser.browserAction.onClicked.addListener(subtome.browserAction);
