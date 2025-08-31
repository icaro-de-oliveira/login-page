document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (document.querySelector("#confirm-password")) {
      validarRegistro(form);
    } else {
      validarLogin(form);
    }
  });
});

function validarLogin(form) {
  const username = form.querySelector("#username").value.trim();
  const password = form.querySelector("#password").value.trim();

  if (username === "" || password === "") {
    alert("Preencha usuário e senha!");
    return;
  }

  alert("Login realizado com sucesso!");
}

function validarRegistro(form) {
  const username = form.querySelector("#username").value.trim();
  const email = form.querySelector("#email").value.trim();
  const password = form.querySelector("#password").value.trim();
  const confirmPassword = form.querySelector("#confirm-password").value.trim();
  const termos = form.querySelector("#termos").checked;

  if(username === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if(!email.includes("@")) {
    alert("Digite um e-mail válido!");
    return;
  }

  if(password.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    return;
  }

  if (password !== confirmPassword) {
    alert("As senhas não conferem!");
    return;
  }

  if (!termos) {
    alert("Você precisa aceitar os Termos e Condições!");
    return;
  }

  alert("Registro realizado com sucesso!");
}
