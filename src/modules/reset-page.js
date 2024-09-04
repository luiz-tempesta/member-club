const clientImage = document.getElementById("clientImage");
const clientName = document.getElementById("clientName");
const clientSince = document.getElementById("clientSince");
const tagNumber = document.getElementById("tagNumber");
const cutsRemaining = document.getElementById("cutsRemaining");
const progressBar = document.querySelector("progress");
const cutsTotal = document.getElementById("cutsTotal");
const cutsHistory = document.getElementById("cutsHistory");
const cutsChecked = document.querySelectorAll('.slots > div');
const list = document.querySelector("ul");

export function resetPage(data) {
  clientImage.setAttribute("src", "src/assets/Picture2.png");
  clientName.textContent = "";
  clientSince.textContent = "";
  tagNumber.textContent = "";
  cutsRemaining.textContent = "";
  progressBar.setAttribute("value", 0);
  progressBar.setAttribute("max", 10);
  cutsTotal.textContent = "0 de 10";
  cutsHistory.textContent = "0 cortes";

  for (let I = 0; I < 9; I++) {
    cutsChecked[I].innerHTML = "";
  }

  list.innerHTML = "";
  
}