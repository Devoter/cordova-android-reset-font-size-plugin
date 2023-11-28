var exec = require('cordova/exec');

module.exports = {
  reset: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'ResetFontSize', 'reset', []);
  }
};