chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "takeScreenshot") {
        chrome.tabs.captureVisibleTab(null, {format: 'png'}, function(dataUrl) {
          if (!dataUrl) {
            console.error('Failed to capture tab:', chrome.runtime.lastError?.message);
            sendResponse({error: chrome.runtime.lastError?.message});
            return;
          }
  
          const data = dataUrl.split(',')[1];
          const bytes = atob(data);
          const arr = new Uint8Array(bytes.length);
          for (let i = 0; i < bytes.length; i++) {
            arr[i] = bytes.charCodeAt(i);
          }
  
          const blob = new Blob([arr], {type: 'image/png'});
          const reader = new FileReader();
  
          reader.onloadend = function() {
            chrome.downloads.download({
              url: reader.result,
              filename: 'screenshot.png'
            }, function(downloadId) {
              if (chrome.runtime.lastError) {
                console.error('Error downloading the screenshot:', chrome.runtime.lastError.message);
                sendResponse({error: chrome.runtime.lastError.message});
              } else {
                console.log('Screenshot downloaded successfully with ID:', downloadId);
                sendResponse({status: 'Screenshot downloaded', id: downloadId});
              }
            });
          };
  
          reader.onerror = function() {
            console.error('Error converting blob to URL:', reader.error);
            sendResponse({error: reader.error.toString()});
          };
  
          reader.readAsDataURL(blob);
          return true;  // Indicate that response will be sent asynchronously
        });
      }
      return true;
  });
  