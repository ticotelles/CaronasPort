let type = undefined;

const selectType = (path) => {
  if (path === "div#requestOption") {
    document
      .querySelector("div#requestOption input")
      .setAttribute("checked", true);

    document.querySelector("div#offerOption input").removeAttribute("checked");
    type = "request";
    return;
  }

  if (path === "div#offerOption") {
    document
      .querySelector("div#offerOption input")
      .setAttribute("checked", true);

    document
      .querySelector("div#requestOption input")
      .removeAttribute("checked");

    type = "offer";
    return;
  }
};

document
  .querySelector("div#requestOption")
  .addEventListener("click", () => selectType("div#requestOption"));
document
  .querySelector("div#offerOption")
  .addEventListener("click", () => selectType("div#offerOption"));

document.querySelector("button").addEventListener("click", function () {
  const origin = document.querySelector("#origin").value;
  const destiny = document.querySelector("#destiny").value;
  const time = document.querySelector("#hour").value;
  const date = document.querySelector("#date").value;
  const observation = document.querySelector("#textFieldDescribe").value;

  if (!origin) {
    alert("Informe sua origem");
    return;
  }
  if (!destiny) {
    alert("Informe o destino desejado");
    return;
  }
  if (!date) {
    alert("Informe a Data");
    return;
  }
  if (!time) {
    alert("Informe o horario");
    return;
  }

  const formData = {
    origin,
    destiny,
    date,
    time,
    observation,
    type,
    user_id: Number(window.localStorage.getItem("userLoggedIn")),
  };

  axios
    .post("http://localhost:3333/ride", formData)

    .then(function (response) {
      //Lida com a resposta do servidor
      navigate("ride_list");

      if (type === "request") {
        alert("Pedido de Carona criado com sucesso!");
      } else {
        alert("Carona Criado com sucesso!");
      }
    })
    .catch(function (error) {
      //Lida com erros da requisição
      console.error(error);
      alert(error.response.data.msg);
    });
});
