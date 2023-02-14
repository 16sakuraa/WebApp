addEventListener("message", function(event) {
  if (event.data === "start") {
    setInterval(function() {
      var now = new Date();
      var timeString = now.toLocaleTimeString();
      var dateString = now.toLocaleDateString();
      var dateTimeString = timeString + " on " + dateString;
      postMessage(dateTimeString);
    }, 1000);
  }
});