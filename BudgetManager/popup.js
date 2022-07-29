let spendBtn = document.querySelector("#spendAmount");

chrome.storage.sync.get(["total","limit"], function (budget) {
    if(budget.total) {
        document.querySelector("#total").innerHTML = budget.total;
    }
    if(budget.limit) {
      document.querySelector("#limit").innerHTML = budget.limit
    }
});

spendBtn.addEventListener("click", () => {
  chrome.storage.sync.get(["total","limit"], function (budget) {
    let newTotal = 0;
    if (budget.total) {
      newTotal += parseInt(budget.total);
    }
    let amountValue = document.querySelector("#amount").value;
    if (amountValue) {
      newTotal += parseInt(amountValue);
    }
    chrome.storage.sync.set({
      "total": newTotal,
    },function(){
      if(amountValue && newTotal > budget.limit) {
        let notifOptions = {
          type : "basic" ,
          iconUrl : "icon48.png" ,
          title : "Limit reached !",
          message : "Uh oh ! Looks like you've reached your limit"
        }

        chrome.notifications.create("limitNotif",notifOptions)
      }
    });
    document.querySelector("#total").innerHTML = newTotal;
    document.querySelector("#amount").value = "";
  });
});
