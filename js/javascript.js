
//Variables del proyecto
let grupoTarjetas = ["😎", "🍦", "🐸", "👽", "👾", "🤖", "👹", "🐌", "🙈", "🙉", "🐷", "🦍","😍","🍟"];
let totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

//Bandera para activar o desactivar la seleccion de tarjetas si se inicia el juego
let juegoActivo = false;

// Logica de reloj
let time = 0;
let timerInterval = null;

// Funcion para iniciar el juego
function startGame() {

  juegoActivo = true;

  document.getElementById("resetBtn").style.display = "none";

  time = 0;
  document.getElementById("timeDisplay").textContent = `0s`;

  intentos = 0;
  contador = 0;
  spanIntentos.textContent = intentos;
  spanContador.textContent = contador;

  primera = null;
  segunda = null;
  bloqueo = false;

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    time++;
    document.getElementById("timeDisplay").textContent = `${time}s`;
  }, 1000);

  reparteTarjetas();
}


//Funcion para detener el juego
function stopGame() {

  juegoActivo = false;

  clearInterval(timerInterval);
  alert(`¡Juego terminado! Tiempo total: ${time} segundos`);
  document.getElementById("resetBtn").style.display = "inline-block"; // 👉 muestra el botón
}

let primera = null;
let segunda = null;
let bloqueo = false;
let contador = 0;
let spanContador = document.getElementById("count");
let intentos = 0;
let spanIntentos = document.getElementById("intentos");

// Funcion para barajar las tarjetas
function barajaTarjetas() {
  return totalTarjetas.sort(() => 0.5 - Math.random());
}

//Funcion para repartir las tarjetas
function reparteTarjetas() {
  let mesa = document.querySelector("#mesa");
  let tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";

  //Por cada tarjeta barajada se le da un emoji dentro de un elemento div, donde se le da una clase tarjeta.
  tarjetasBarajadas.forEach(function (emoji) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");


    //Por cada tarjeta descubierta se le da una clase tarjeta contenido.
    let contenido = document.createElement("div");
    contenido.classList.add("tarjeta__contenido");
    contenido.textContent = emoji;

    tarjeta.appendChild(contenido);
    tarjeta.addEventListener("click", descubrir);
    mesa.appendChild(tarjeta);
  });
}

//La funcion descubrir le da una clase "descubierta" a cada carta que se da vuelta.
function descubrir() {
  if (!juegoActivo || bloqueo || this.classList.contains("descubierta")) return;

  this.classList.add("descubierta");

  if (!primera) {
    primera = this;
  } else {
    segunda = this;
    bloqueo = true;

    let emoji1 = primera.querySelector(".tarjeta__contenido").textContent;
    let emoji2 = segunda.querySelector(".tarjeta__contenido").textContent;

    //Si el emoji 1 es igual al emoji 2 se agrega 1 numero mas al contador y a los intentos. Además se bloquea la acción de dar vuelta la tarjeta.
    if (emoji1 === emoji2) {
      primera = null;
      segunda = null;
      bloqueo = false;
      contador++;
      spanContador.textContent = contador;
      intentos++;
      spanIntentos.textContent = intentos;

      if (contador === grupoTarjetas.length) {
        stopGame();
      }
    } else {
      //Si el emoji 1 no es igual al emoji 2 no se agrega 1 numero mas al contador pero si a los intentos. Se quita la funcion de bloqueo en la tarjeta y se vuelven a dar vuelta luego de 1 segundo.
      setTimeout(() => {
        primera.classList.remove("descubierta");
        segunda.classList.remove("descubierta");
        primera = null;
        segunda = null;
        bloqueo = false;
        intentos++;
        spanIntentos.textContent = intentos;
      }, 1000);
    }
  }
}

reparteTarjetas();
