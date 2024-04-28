# Terminal

La terminal se adapta a el contenedor en el cual se encierre.
Si el contenedor tiene un width de 400px, entonces la terminal será de 400px

## Props

1. Nombre: Se muestra en el usuario de la terminal, ejemplo: `nombre@root:~$`

2. Body: un componente completo con los estilos que prefieras, este se mostrará en el cuerpo de la terminal

## CSS variables

1. `--terminal-icons-color`, el color en el que se mostrarán los iconos de cerrar, expandir y minimizar al pasarles el hover. si no se envia será #000a

2. `--terminal-minimize-btn`, color del botón de minimizar

3. `--terminal-maximize-btn`, color del botón maximizar de la terminal

4. `--terminal-close-btn`, color del botón de cerrar de la terminal

5. `--terminal-background`, color del fondo de la terminal

6. `--terminal-user-color`, color en el que se mostrará el usuario en la terminal

7. `--terminal-separator-color`, color del separador "~"

8. `--terminal-title-bar-background`, background del header de la terminal