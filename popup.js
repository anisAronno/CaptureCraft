
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('clickBtn').addEventListener('click', function() {
        chrome.runtime.sendMessage({action: "takeScreenshot"}, function(response) {
            console.log('Response:', response);
        });
    });    
});
