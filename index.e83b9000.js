const t={investInput:document.getElementById("invest"),profitInput:document.getElementById("profit")};t.investInput.addEventListener("input",(e=>{const n=e.target.value;e.target.parentElement.querySelector(".income-sum-box p").textContent=n.toString(),t.profitInput.value=7.5*n;t.profitInput.parentElement.querySelector(".income-sum-box p").textContent=t.profitInput.value})),t.profitInput.addEventListener("input",(e=>{const n=e.target.value;e.target.parentElement.querySelector(".income-sum-box p").textContent=n.toString(),t.investInput.value=n/7.5;t.investInput.parentElement.querySelector(".income-sum-box p").textContent=t.investInput.value}));
//# sourceMappingURL=index.e83b9000.js.map
