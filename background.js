chrome.browserAction.onClicked.addListener(function (activeTab) {
  const currentUrl = activeTab.url;

  chrome.tabs.create({ url: `https://listas.io/resources/create?url=${currentUrl}` });
});
