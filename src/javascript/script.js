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
