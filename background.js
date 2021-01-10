chrome.browserAction.onClicked.addListener(function (activeTab) {
  const currentUrl = activeTab.url;

  const baseUrl = "https://listas.io";

  chrome.tabs.create({
    url: `${baseUrl}/resources/create?url=${encodeURIComponent(currentUrl)}`,
  });
});
