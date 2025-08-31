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

function showToast(message, type = "success") {
  let bgColor;

  switch (type) {
    case "success":
      bgColor = "linear-gradient(to right, #95ee34)";
      break;
    case "error":
      bgColor = "#e74c3c";
      break;
    case "warning":
      bgColor = "#f39c12";
      break;
    default:
      bgColor = "#333";
  }
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: bgColor,
    stopOnFocus: true,
  }).showToast();
}

function validarLogin(form) {
  const username = form.querySelector("#username").value.trim();
  const password = form.querySelector("#password").value.trim();

  if (username === "" || password === "") {
    showToast("Preencha usuário e senha!", "error");
    return;
  }

   showToast("Login realizado com sucesso!", "success");
}

function validarRegistro(form) {
  const username = form.querySelector("#username").value.trim();
  const email = form.querySelector("#email").value.trim();
  const password = form.querySelector("#password").value.trim();
  const confirmPassword = form.querySelector("#confirm-password").value.trim();
  const termos = form.querySelector("#termos").checked;

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    showToast("Preencha todos os campos!", "error");
    return;
  }

  if (!email.includes("@")) {
    showToast("Digite um e-mail válido!", "warning");
    return;
  }

  if (password.length < 6) {
    showToast("A senha deve ter pelo menos 6 caracteres!", "warning");
    return;
  }

  if (password !== confirmPassword) {
    showToast("As senhas não conferem!", "error");
    return;
  }

  if (!termos) {
    showToast("Você precisa aceitar os Termos e Condições!", "error");
    return;
  }

  showToast("Registro realizado com sucesso!", "success");
}
