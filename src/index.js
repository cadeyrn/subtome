const _ = require('sdk/l10n').get;
const actionbutton = require('sdk/ui/button/action');
const data = require('sdk/self').data;
const panels = require('sdk/panel');
const tabs = require('sdk/tabs');

const subtome = {
  init : function () {
    const message = panels.Panel({
      height : 38,
      contentURL : data.url('no-feed.html')
    });

    actionbutton.ActionButton({
      id : 'subtome',
      label : _('SUBSCRIBE_TO_PAGE'),
      icon : {
        '18' : data.url('icon-18.png'),
        '32' : data.url('icon-32.png'),
        '36' : data.url('icon-36.png'),
        '64' : data.url('icon-64.png')
      },
      onClick : () => {
        this.execute(message);
      }
    });
  },

  execute : function (message) {
    const worker = tabs.activeTab.attach({
      contentScriptFile : data.url('subtome.js')
    });

    worker.port.on('pageHasNoFeed', () => {
      message.show();
    });
  }
};

const main = () => {
  subtome.init();
};

exports.main = main;
