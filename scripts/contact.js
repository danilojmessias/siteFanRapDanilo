function displayData() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const favoriteRapper = document.getElementById("favoriteRapper").value;

  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = `
        <h3>Dados Enviados:</h3>
        <p><strong>Nome:</strong> ${firstName} <strong>Sobrenome:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email} <strong>Idade:</strong> ${age}</p>
        <p><strong>Rapper Favorito:</strong> ${favoriteRapper}</p>
    `;
}

function clearForm() {
  document.getElementById("myForm").reset();
  document.getElementById("resultContainer").innerHTML = "";
}
