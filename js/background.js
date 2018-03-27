function executeScripts(tabId, injectDetailsArray) {
  function createCallback(tabId, injectDetails, innerCallback) {
    return function () {
      chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
    };
  }

  var callback = null;

  for (var i = injectDetailsArray.length - 1; i >= 0; --i)
    callback = createCallback(tabId, injectDetailsArray[i], callback);

  if (callback !== null)
    callback(); // execute outermost function
}

function getGmailUrl() {
  return "https://mail.google.com/mail/";
}

function isGmailUrl(url) {
  // Return whether the URL starts with the Gmail prefix.
  return url.startsWith(getGmailUrl());
}

function goToInbox() {
  console.log('Going to inbox...');
  chrome.tabs.getAllInWindow(undefined, function(tabs) {
    for (var i = 0, tab; tab = tabs[i]; i++) {
      if (tab.url && isGmailUrl(tab.url)) {
        console.log('Found Gmail tab: ' + tab.url + '. ' +
                    'Focusing and refreshing count...');
        chrome.tabs.update(tab.id, {selected: true});
        // startRequest({scheduleRequest:false, showLoadingAnimation:false});
        return;
      }
    }
    console.log('Could not find Gmail tab. Creating one...');
    chrome.tabs.create({url: getGmailUrl()});
  });
}

chrome.browserAction.onClicked.addListener(function (tab) {

  //goToInbox();

  executeScripts(null, [ 
      { file: "js/jquery-3.3.1.min.js" }, 
      { file: "js/moment-with-locales.min.js" },
      { file: "js/jquery.ba-replacetext.min.js" },
      { file: "js/custom.js" }
  ])
});