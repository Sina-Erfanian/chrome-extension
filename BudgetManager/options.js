let saveLimit = document.querySelector("#saveLimit");
let resetTotal = document.querySelector("#resetTotal");

chrome.storage.sync.get(["limit"],function(budget){
    document.querySelector("#limit").value = budget.limit
})


saveLimit.addEventListener("click", () => {
  let limit = document.querySelector("#limit").value;
  if (limit) {
    chrome.storage.sync.set({ limit: limit }, function () {
      close();
    });
  }
});

resetTotal.addEventListener("click", () => {
  chrome.storage.sync.set({ total: 0 },function() {
    let notificationOptions = {
      type: "basic",
      iconUrl: "icon48.png",
      title: "Total reset!",
      message: "Total has been reset to 0",
    };

    chrome.notifications.create("reset", notificationOptions);
  });
});
