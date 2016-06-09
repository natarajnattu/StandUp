document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Nattu - App - Please stand once', {
      icon: 'images/love-128.png',
      body: "continuously sitting in chair is not healthy way to work. now Its time to stand for atleast half minute!",
    });

    notification.onclick = function () {
            
    };

  }
}

chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name == 'name-of-alarm') {
        // Do something...
        notifyMe();
    }
});

// Create the alarm:
chrome.alarms.create('name-of-alarm', {
    periodInMinutes: 60
});
