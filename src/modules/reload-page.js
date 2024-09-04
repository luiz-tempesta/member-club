import {resetPage} from "../modules/reset-page.js";

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

export function reloadPage(data) {
  resetPage();
  
  clientImage.setAttribute("src", "src/assets/Picture.png");
  clientName.textContent = data.name;
  clientSince.textContent = "Cliente desde " + data.clientSince;
  tagNumber.textContent = "ID:" + data.id;
  cutsRemaining.textContent = data?.loyaltyCard?.cutsRemaining;
  progressBar.setAttribute("value", data?.loyaltyCard?.totalCuts);
  progressBar.setAttribute("max", data?.loyaltyCard?.cutsNeeded);
  cutsTotal.textContent = `${data?.loyaltyCard?.totalCuts} de ${data?.loyaltyCard?.cutsNeeded}`;
  cutsHistory.textContent = `${data?.loyaltyCard?.totalCuts} cortes`;

  for (let I = 0; I < data?.loyaltyCard?.totalCuts; I++) {
    const imagem = document.createElement("img");
    imagem.setAttribute("src", "src/assets/PinCheck.png");
    cutsChecked[I].append(imagem);

    if (data.appointmentHistory[I]?.date) {
      const itemList = document.createElement("li");
      itemList.classList.add("row");
      const group = document.createElement("div");
      const cutDate = document.createElement("span");
      cutDate.classList.add("titulo");
      cutDate.textContent = data.appointmentHistory[I].date;
      const cutHour = document.createElement("span");
      cutHour.classList.add("descricao");
      cutHour.textContent = data.appointmentHistory[I].time;
      group.append(cutDate);
      group.append(cutHour);
      const checked = document.createElement("img");
      checked.setAttribute("src", "src/assets/icons/check.svg");
      itemList.append(group, checked);
      list.append(itemList);
    }
  }

  if (data?.loyaltyCard?.totalCuts >= 10) {
    document.getElementById('modal').style.display = 'block';
  }
  
}