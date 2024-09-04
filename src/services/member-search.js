import { apiConfig } from "./api-config.js";

export async function memberSearch(id) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    alert("O cartão informado não foi encontrado");
  }
}