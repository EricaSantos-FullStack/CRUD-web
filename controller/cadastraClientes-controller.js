import { clienteService } from "../service/cliente-service.js";

// percorrer o DOM
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = evento.target.querySelector("[data-nome]").value;
  const email = evento.target.querySelector("[data-email]").value;

  clienteService.criaCliente(nome, email).then(() => {
    // redirecionar tela inteira - para qual lugar? href com o link
    window.location.href = "../telas/cadastro_concluido.html";
  });
});
