chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener(function (request) {
  if (request.todo == "changeColor") {
    let scaffold = document.querySelector(".scaffold");
    scaffold.style.color = request.clickedColor;
  }
});
