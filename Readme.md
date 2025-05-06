# Juego de Memoria

##
Este proyecto es un juego en el cual las personas deben de buscar un par de cartas iguales para ganar.

![alt text](JuegoOriginal-2.png)

##
Esta función baraja las cartas para ponerlas en lugares aleatorios utilizando 
``` Javascript
Math.random()
```

``` Javascript
function barajaTarjetas() {
  return totalTarjetas.sort(() => 0.5 - Math.random());
}
```

## Comparado a la imagen anterior, se puede ver que las tarjetas no se encuentran en el mismo lugar.
![Captura de pantalla ] ![alt text](pareja.png)


## Decidimos realizar unas mejoras esteticas 
Nuevos emojis agregados al juego: "🙈", "🙉", "🐷", "🦍","😍","🍟".

Color de fondo: Se cambió a un tono gris oscuro (#454545) utilizando una variable CSS (--bg).
 



![Captura de pantalla ] ![alt text](ColorFondo.png)

## Se agrego un contador de aciertos

Se implemento un contador de aciertos para que los participantes puedan ir viendo su progreso dentro del juego.

![Captura de pantalla ] ![alt text](contador.png)
