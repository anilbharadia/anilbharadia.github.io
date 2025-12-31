// Background service worker to handle extension icon clicks
chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage();
});
