import { memberSearch } from "../services/member-search.js";
import { reloadPage } from "../modules/reload-page.js";
import { resetPage } from "./reset-page.js";

const buttonCardSearch = document.getElementById("buttonCardSearch");
const cardInput = document.querySelector("input");

buttonCardSearch.onclick = async() => {
  try {
    console.log("Cartao: ", cardInput.value.trim());

    if (!cardInput.value.trim()) 
      throw new Error("Informe um número de cartão");

    if (!validate(cardInput.value.trim()))
      throw new Error("Informe um número de cartão válido");

    const member = await memberSearch(cardInput.value.trim());

    if(member)
      reloadPage(member);

  } catch (e) {
    resetPage();
    alert(e.message);
  }
}

function validate(valor) {
  const regex = /^\d{3}-\d{3}-\d{3}-\d{3}$/;
  return regex.test(valor);
}

