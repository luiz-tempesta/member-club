"use strict"

// Configuração do dayjs
import "./libs/dayjs.js";
import "./styles/index.css";
import "./modules/card-input.js"

document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
  }
});