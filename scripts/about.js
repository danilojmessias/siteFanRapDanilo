document
  .getElementById("rappersSelect")
  .addEventListener("change", function () {
    const selectedValue = this.value;
    const image = document.getElementById("rappersImage");
    const description = document.getElementById("rappersDescription");

    switch (selectedValue) {
      case "1":
        image.src = "../images/rappers/brown.jpg";
        description.innerHTML =
        "Mano Brown e seus albuns:<br><b> Raio X Brasil</b> (1993)<br><b>Sobrevivendo no Inferno</b> (1997)<br><b>Nada como um Dia após o Outro Dia</b> (2002)<br><b>Cores & Valores </b> (2014)";
        break;
      case "2":
        image.src = "../images/rappers/emicida.jpg";
        description.innerHTML =
          "Emicida e seus albuns:<br><b>Pra Quem Já Mordeu um Cachorro por Comida, até que Eu Cheguei Longe… </b> (2009)<br><b>Emicídio</b> (2010)<br><b>O Glorioso Retorno de Quem Nunca Esteve Aqui</b> (2013)<br><b>Sobre Crianças, Quadris, Pesadelos e Lições de Casa...</b> (2015)<br><b>AmarElo </b> (2019)";
        break;
      case "3":
        image.src = "../images/rappers/kdot.jpg";
        description.innerHTML =
          "Kendrick Lamar e seus albuns:<br><b>Section.80</b> (2011)<br><b>good kid, m.A.A.d city</b> (2012)<br><b>To Pimp a Butterfly</b>(2015)<br><b>DAMN.</b> (2017)<br><b>Mr. Morale & the Big Steppers</b> (2022)";
        break;
      default:
        image.src = "../images/rappers/rap.jpg";
        description.textContent = "";
    }
  });
