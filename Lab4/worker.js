addEventListener("message", function(event) {
  if (event.data === "start") {
    setInterval(function() {
      var now = new Date();
      postMessage(now);
    }, 1000);
  }
});