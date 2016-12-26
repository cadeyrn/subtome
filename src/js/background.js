'use strict';

const subtome = {
  getActiveTab : function () {
    return browser.tabs.query({ active : true, currentWindow : true });
  },

  enableButton : function () {
    subtome.getActiveTab().then((tabs) => {
      let tabId = tabs[0].id;
      browser.browserAction.enable(tabId);
      browser.browserAction.setTitle({ tabId : tabId, title : browser.i18n.getMessage('actionbutton_title') });
    });
  },

  disableButton : function () {
    subtome.getActiveTab().then((tabs) => {
      let tabId = tabs[0].id;
      browser.browserAction.disable(tabId);
      browser.browserAction.setTitle({ tabId : tabId, title : browser.i18n.getMessage('page_has_no_feed') });
    });
  },

  hasFeeds : function () {
    browser.tabs.executeScript(null, { file : 'js/hasfeeds.js', runAt : 'document_end' });
  },

  handleResponse : function (response) {
    if (response.message === 'has_no_feed') {
      subtome.disableButton();
    } else {
      subtome.enableButton();
    }
  },

  browserAction : function () {
    browser.tabs.executeScript(null, { file : 'js/subtome.js', runAt : 'document_end' });
  }
};

browser.tabs.onCreated.addListener(subtome.disableButton)
browser.tabs.onUpdated.addListener(subtome.hasFeeds);
browser.runtime.onMessage.addListener(subtome.handleResponse);
browser.browserAction.onClicked.addListener(subtome.browserAction);
