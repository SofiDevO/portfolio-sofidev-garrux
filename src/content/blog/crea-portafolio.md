---
title: "JavaScript:Crea tu portafolio con astro"
description: "Funciones y Comprendiendo Variables, soy el post más nuevo"
pubDate: 'Apr 26 2024'
heroImage: "../img/paisaje.jpg"
---




![javascript image](/img/monachina.jpg)

En esta segunda entrega de nuestra guía práctica de JavaScript, nos sumergiremos en el fascinante mundo de las funciones y exploraremos las sutilezas entre `var`, `let` y `const`. Prepárate para desentrañar estos conceptos cruciales en tu viaje por el desarrollo web.

## Funciones en JavaScript

Las funciones son bloques de código reutilizables que realizan una tarea específica. Crear una función implica dos pasos fundamentales: la declaración y la ejecución.

### Declaración de Funciones

```javascript
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
```

Aquí, `saludar` es el nombre de la función, y `(nombre)` son los parámetros que puede aceptar.

### Ejecución de Funciones

```javascript
saludar("Juan");
// Salida: ¡Hola, Juan!
```

Al llamar a la función `saludar` con el argumento `"Juan"`, ejecutamos el código dentro de la función y obtenemos la salida esperada.

### Tipos de Funciones

#### Funciones con Valor de Retorno

```javascript
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(3, 5);
// resultado: 8
```

#### Funciones Anónimas

```javascript
let saludar = function(nombre) {
  console.log(`¡Hola, ${nombre}!`);
};

saludar("Ana");
// Salida: ¡Hola, Ana!
```


#### Arrow Functions

```javascript
let multiplicar = (a, b) => a * b;

let producto = multiplicar(4, 6);
// producto: 24
```

Las funciones de flecha (`arrow functions`) son una forma más concisa de escribir funciones.

### Variables: var, let y const

![javascript image](/img/monachina.jpg)

### `var`

```javascript
function ejemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}

ejemploVar();
// Salida: 10
```

`var` tiene un ámbito de función, lo que significa que su declaración se eleva al nivel superior de su contexto de ejecución.

### `let`

```javascript
function ejemploLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ¡Error!
}

ejemploLet();
```

`let` tiene un ámbito de bloque, lo que significa que está limitado al bloque de código más cercano.

### `const`

```javascript
function ejemploConst() {
  const PI = 3.14;
  console.log(PI);
}

ejemploConst();
// Salida: 3.14
```

En este ejemplo, `const` se utiliza para declarar una constante `PI` y se le asigna el valor de `3.14`. Aunque es posible asignar un valor a `const` solo una vez, ten en cuenta que esto no impide que el contenido del objeto al que se refiere cambie si es un objeto mutable.

## Scope en JavaScript

El scope se refiere a la accesibilidad y visibilidad de las variables en diferentes partes del código.

### Scope Global

```javascript
let globalVar = "Soy global";

function ejemploScopeGlobal() {
  console.log(globalVar);
}

ejemploScopeGlobal();
// Salida: Soy global
```

### Scope Local

```javascript
function ejemploScopeLocal() {
  let localVar = "Soy local";
  console.log(localVar);
}

ejemploScopeLocal();
// Salida: Soy local

console.log(localVar); // ¡Error!
```

Las variables declaradas con `let` y `const` tienen un ámbito de bloque, limitando su accesibilidad al bloque en el que se declaran.

## Conclusión

En esta parte de nuestra guía de JavaScript, hemos explorado cómo crear y ejecutar funciones, así como las diferencias entre `var`, `let` y `const`. Entender estos conceptos es esencial para construir aplicaciones sólidas y comprender cómo las variables afectan el flujo y la estructura de tu código. En la próxima entrega, nos sumergiremos en conceptos más avanzados y te llevaremos a través de ejercicios prácticos para consolidar tus conocimientos. ¡Sigue explorando y desbloquea el potencial de JavaScript en tus proyectos web! 🚀✨