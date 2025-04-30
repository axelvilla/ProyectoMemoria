# Juego de Memoria

##
Este proyecto es un juego en el cual las personas deben de buscar un par de cartas iguales para ganar.

![Captura de pantalla] ![alt text](![alt text](image-2.png))

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
![Captura de pantalla ] ![alt text](image-1.png)

# Contador e intentos
![Captura de pantalla] ![alt text](image-3.png)
##
El juego también muestra un contador de cuantos pares encontrados llevas y en cuantos intentos logras terminar el juego

## Encontrados
![Captura de pantalla] ![alt text](image-4.png)

## Intentos
![Captura de pantalla] ![alt text](image-5.png)
