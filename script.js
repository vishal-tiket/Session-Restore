document.getElementById("history").innerHTML = JSON.stringify({
  historyLength: window.history.length,
});

function handlePopState() {
  if (window.location.href.includes("sessionRestore")) {
    window.location.href = "/exitWebview.html";
    return;
  } else {
    window.location.reload();
  }
}

// Add the event listener
window.addEventListener("popstate", handlePopState);

// Remove the event listener when navigating away
window.addEventListener("beforeunload", function () {
  window.removeEventListener("popstate", handlePopState);
});
