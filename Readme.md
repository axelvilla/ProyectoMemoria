# Juego de Memoria

##
Este proyecto es un juego en el cual las personas deben de buscar un par de cartas iguales para ganar.

![alt text](image-2.png)

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
![alt text](image-2.png)

# Contador e intentos
![alt text](image-3.png)
##
El juego también muestra un contador de cuantos pares encontrados llevas y en cuantos intentos logras terminar el juego

# Encontrados 👌
![alt text](image-4.png)

# Intentos 🥹
![alt text](image-5.png)

## Como se gana 🤔
Al conseguir las 14 parejas el juego se da por finalizado


# Otros cambios esteticos 😎

 Decidimos cambiar el color de fondo por algo mas tranquilo para la vista utilizando un tono gris.

![alt text](ColorFondo.png)

 Añadimos nuevos emojis

"🙈", "🙉", "🐷", "🦍","😍","🍟"

Se agrego un boton para inicar el videojuego


![alt text](boton.png)


Al inicar el tiempo empieza a transcurrir hasta que logres la victoria

![alt text](tiempo.png)

Luego de encontrar las 14 parejas posibles y ganar el juego, aparece aviso sobre la finalizacion del mismo y cuanto tiempo tardaste en lograrlo.

![alt text](final.png)

Por ultimo agregamos un boton de reinicio para que puedas volver a competir contra tus amigos

![alt text](reiniciar.png)

# Fin