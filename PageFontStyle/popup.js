let inputElem = document.querySelector("#fontColor");
let btnChange = document.querySelector("#btnChange");

let color = inputElem.value;

inputElem.addEventListener("change", (e) => {
  color = e.target.value;
});

inputElem.addEventListener("paste", (e) => {
  color = e.target.value;
});

inputElem.addEventListener("keyup", (e) => {
  color = e.target.value;
});

btnChange.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      todo: "changeColor",
      clickedColor: color,
    });
  });
});
