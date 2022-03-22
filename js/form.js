const botao = document.getElementById("btn-enviar-mensagem");
const form = document.getElementById("form-contato");

const inputEmail = document.getElementById("input-email");
const labelEmail = document.getElementById("label-email");
const divEmail = document.getElementById("div-email");
const erroEmail = document.getElementById("erro-email");

const inputNome = document.getElementById("input-nome");
const labelNome = document.getElementById("label-nome");
const divNome = document.getElementById("div-nome");
const erroNome = document.getElementById("erro-nome");

const inputAssunto = document.getElementById("input-assunto");
const labelAssunto = document.getElementById("label-assunto");
const divAssunto = document.getElementById("div-assunto");
const erroAssunto = document.getElementById("erro-assunto");

inputNome.addEventListener("keyup", () => {
  if (
    !validarNome(inputNome.value) ||
    4 > inputNome.value.length ||
    inputNome.value.length > 25
  ) {
    erroNome.style.visibility = "visible";
    erroNome.innerHTML = "";
    erroNome.innerHTML =
      "* O nome deve conter de 4 a 25 caracteres. Números e caracteres especiais são inválidos";
    divNome.classList.add("errorInput");
  } else {
    erroNome.style.visibility = "hidden";
    divNome.classList.remove("errorInput");
  }
});

inputEmail.addEventListener("keyup", () => {
  if (!validarEmail(inputEmail.value)) {
    divEmail.classList.add("errorInput");
    erroEmail.style.visibility = "visible";
    erroEmail.innerHTML = "";
    erroEmail.innerHTML = "* Digite o e-mail no formato: user@email.com";
  } else {
    erroEmail.style.visibility = "hidden";
    divEmail.classList.remove("errorInput");
  }
});

inputAssunto.addEventListener("keyup", () => {
  if (!validarAssunto(inputAssunto.value)) {
    divAssunto.classList.add("errorInput");
    erroAssunto.style.visibility = "visible";
    erroAssunto.innerHTML = "";
    erroAssunto.innerHTML = "* O assunto deve conter de 4 a 25 caracteres";
  } else {
    erroAssunto.style.visibility = "hidden";
    divAssunto.classList.remove("errorInput");
  }
});

function validarEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return re.test(email);
}

function validarNome(nome) {
  const re = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
  return re.test(nome);
}

function validarAssunto(assunto) {
  if (assunto.length < 4 || assunto.length > 25) {
    return false;
  } else {
    return true;
  }
}

botao.addEventListener("click", (event) => {
  if (
    !validarAssunto(inputAssunto.value) ||
    !validarNome(inputNome.value) ||
    !validarEmail(inputEmail.value)
  ) {
    event.preventDefault();
    alert("Preencha os dados corretamnte");
  }
});
