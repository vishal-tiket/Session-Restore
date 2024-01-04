const urlList = ["/index.html", "/index1.html", "/index2.html", "/index3.html"];

function iterateUrlList(urlList) {
  for (var i = 0; i < urlList.length; i++) {
    history.pushState({}, "", urlList[i]);
  }

  history.go(urlList[urlList.length - 1]);
}

iterateUrlList(urlList);
