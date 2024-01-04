const urlList = ["/index.html", "/index1.html", "/index2.html", "/index3.html"];

function iterateUrlList(urlList) {
  history.replaceState({}, "", urlList[0]);
  for (var i = 0; i < urlList.length; i++) {
    history.pushState({}, "", urlList[i]);
  }

  history.go(urlList[urlList.length - 1]);
}

iterateUrlList(urlList);
