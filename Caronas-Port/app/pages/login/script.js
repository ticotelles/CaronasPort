document.querySelector("button").addEventListener("click", function () {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (!email) {
    alert("Favor informar o email");
    return;
  }
  if (!password) {
    alert("favor informar a senha");
    return;
  }

  const formData = {
    email,
    pass: password,
  };

  // alert("Login com sucesso!");
  axios
    .post("http://localhost:3333/login", formData)

    .then(function (response) {
      // Lida com a resposta do servidor
      window.localStorage.setItem("userLoggedIn", response.data.userId);
      navigate("ride_list");
    })
    .catch(function (error) {
      // Lida com erros de requisição
      console.log(error);
      alert(error.response.data.msg);
    });
});

document
  .querySelector("#forgot-password")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#overlay").style.display = "block";
    document.querySelector("#alert-text").innerHTML =
      "<h5>Informação</h5><p>Entre em contato via Whatsapp no número: 11942981822</p>";

    setTimeout(() => {
      document.querySelector("#overlay").style.display = "none";
    }, 4000);
  });

document.querySelector(".button-close").addEventListener("click", function () {
  document.querySelector("#overlay").style.display = "none";
});
