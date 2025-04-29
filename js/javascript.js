let grupoTarjetas = ["😎", "🍦", "🐸", "👽", "👾", "🤖", "👹", "🐌", "🙈", "🙉", "🐷", "🦍","😍","🍟"];
let totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

let primera = null;
let segunda = null;
let bloqueo = false;

function barajaTarjetas() {
  return totalTarjetas.sort(() => 0.5 - Math.random());
}

function reparteTarjetas() {
  let mesa = document.querySelector("#mesa");
  let tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function (emoji) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    let contenido = document.createElement("div");
    contenido.classList.add("tarjeta__contenido");
    contenido.textContent = emoji;

    tarjeta.appendChild(contenido);
    tarjeta.addEventListener("click", descubrir);
    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  if (bloqueo || this.classList.contains("descubierta")) return;

  this.classList.add("descubierta");

  if (!primera) {
    primera = this;
  } else {
    segunda = this;
    bloqueo = true;

    let emoji1 = primera.querySelector(".tarjeta__contenido").textContent;
    let emoji2 = segunda.querySelector(".tarjeta__contenido").textContent;
    let contador = document.getElementById("count");

    if (emoji1 === emoji2) {
      primera = null;
      segunda = null;
      bloqueo = false;
    } else {
      setTimeout(() => {
        primera.classList.remove("descubierta");
        segunda.classList.remove("descubierta");
        primera = null;
        segunda = null;
        bloqueo = false;
        contador +=1;
        contador.innerHTML(contador);
      }, 1000);
    }
  }
}
reparteTarjetas();
