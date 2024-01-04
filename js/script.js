/**
 * script.js will handle the custom back navigation, history.go(-1) does not reload the page it only changes the url.
 */

document.getElementById("history").innerHTML = JSON.stringify({
  historyLength: window.history.length,
});

function handlePopState() {
  window.location.reload();
}

// Add the event listener
window.addEventListener("popstate", handlePopState);

// Remove the event listener when navigating away
window.addEventListener("beforeunload", function () {
  window.removeEventListener("popstate", handlePopState);
});
