document.querySelector("button").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#tel").value;
  const vehicle = document.querySelector("#vehicle").value;
  const password = document.querySelector("#password").value;
  const PasswordConfirm = document.querySelector("#password_confirm").value;

  if (name === "") {
    alert("Favor informe o nome");
    return;
  }

  if (email === "") {
    alert("Favor informe o email");
    return;
  }

  if (phone === "") {
    alert("Favor informe o numero de telefone");
    return;
  }

  if (vehicle === "") {
    alert("Favor informe o modelo do veículo");
    return;
  }

  if (password === "") {
    alert("Favor informe a senha");
    return;
  }

  if (PasswordConfirm === "") {
    alert("Favor informe a confirmação de senha");
    return;
  }

  if (password != PasswordConfirm) {
    alert("as senhas não coincidem");
    return;
  }

  const formData = {
    name: name,
    email: email,
    phone: phone,
    vehicle: vehicle,
    pass: password,
  };

  axios
    .post("http://localhost:3333/users", formData)
    .then(function (response) {
      // Lida com a resposta do servidor
      console.log(response.data);

      navigate("login");
      alert("Cadastro Realizado com Sucesso!");
    })
    .catch(function (error) {
      // Lida com erros de requisição
      console.error(error);
      alert("Houve um erro no cadastro!");
    });
});
