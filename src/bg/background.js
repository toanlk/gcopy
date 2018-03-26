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

chrome.browserAction.onClicked.addListener(function (tab) {
  executeScripts(null, [ 
      { file: "js/jquery-3.3.1.min.js" }, 
      { file: "js/moment-with-locales.min.js" },
      { file: "/src/bg/custom.js" }
  ])
});

// onClick handle
// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.executeScript(tab.ib, {
//     file: '/src/bg/custom.js'
//   });
// });