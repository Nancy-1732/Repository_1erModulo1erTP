// DESARROLLO DE SOFTWARE - DATA SCIENCE - AHK SISTEMA DUAL
// DOCENTES: EZEQUIEL ESCOBAR Y MATIAS SICHER
// ESTUDIANTE: NANCY FIGUEREDO



/*EJERCICIO 1
Convertir una cadena de texto a formato de título:
Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de
título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula.
● Ejemplo: Si la entrada es “mi amigo me invitó a comer”, la salida debería ser “Mi
Amigo Me Invitó A Comer”.
● Ayuda: Los strings entienden una función “toLowerCase()” que convierte la primera
letra del texto en mayúscula. Además, se espera que se resuelva con algún ciclo (exacto
o inexacto) y utilizando la función anteriormente mencionada.*/

function convertirATitulo(frase) {
    frase = frase.toLowerCase();
    let palabras = frase.split (" ");
    let formatoTitulo = "";
    let palabra 
    let primeraLetra 
    let restoDeLaPalabra 
    let palabraCambiada 

    for (let i = 0; i < palabras.length; i++) {
        palabra = palabras[i];
        primeraLetra = palabra.charAt(0).toUpperCase();
        restoDeLaPalabra = palabra.slice(1);
        palabraCambiada = primeraLetra + restoDeLaPalabra;

    if (i > 0) {
        formatoTitulo = formatoTitulo + " ";
      }
      formatoTitulo = formatoTitulo + palabraCambiada;
    }
    return formatoTitulo; 
}
//let frase = "mi amigo me invitó a comer";
//console.log(convertirATitulo(frase)); 

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/* EJERCICIO 2
Concatenar elementos de un array con un separador personalizado:
Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de
texto que contenga todos los elementos del array concatenados con el separador especificado.
● Ejemplo: Si la entrada es ["Hola", "Mundo", "JavaScript"] y el separador “-”, la
salida debería ser "Hola-Mundo-JavaScript"*/

function unirConSeparacion (palabras, separador) {
let resultado = "";

for (let i = 0; i < palabras.length; i++) {
    resultado = resultado + palabras[i];

    if (i < palabras.length - 1) {
      resultado = resultado + separador;
    }
  }
  return resultado;
}

//let array = ["Hola", "Mundo", "JavaScript"]
//console.log(unirConSeparacion(array, "-"))

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/*EJERCICIO 3
3. Revertir las palabras de una frase:
Crear una función que reciba una cadena de texto y devuelva la misma cadena con las palabras
en orden inverso.
● Ejemplo: Si la entrada es "JavaScript es divertido", la salida debería ser “divertido es
JavaScript”
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cada palabra podría
ser insertada en un array (¿para qué?)*/

function fraseALaInversa (frase) {
let palabra = "";
let palabras = [];

for (let i = 0; i < frase.length; i++) {
  let letra = frase[i];
  if (letra !== " ") {
    palabra = palabra + letra;
  } else {
    palabras.push(palabra);
    palabra = "";
  }
}
palabras.push(palabra); 
  let resultado = "";
  for (let i = palabras.length - 1; i >= 0; i--) {
    resultado += palabras[i];
    if (i > 0) {
      resultado += " ";
    }
  }
  return resultado;
}

//let frase = "JavaScript es divertido";
//console.log(fraseALaInversa(frase));

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/* EJERCICIO 4
4. Contar la cantidad de veces que aparece una palabra en una cadena:
Crear una función que reciba una cadena de texto y una palabra, y devuelva la cantidad de
veces que aparece esa palabra en la cadena.
● Ejemplo: Si la entrada es "El sol brilla y el cielo está despejado.", y la palabra que se
quiere buscar es “el”, la salida debería ser el número 2.
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cuando se tenga una
palabra, se la podrá comparar con la palabra buscada y si coincide … (siga usted!)*/

function contarPalabras(frase, palabraBuscada) {
  let palabra = "";
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    let letra = frase[i];

    if (letra !== " ") {
      palabra = palabra + letra;
    } else {
      if (palabra.toLowerCase() === palabraBuscada.toLowerCase()) {
        contador = contador + 1;
      }
      palabra = "";
    }
  }

  if (palabra.toLowerCase() === palabraBuscada.toLowerCase()) {
    contador = contador + 1;
  }

  return contador;
}
//let texto = "El sol brilla, la ave vuela, el arbol sonrie y el cielo está despejado - Expresaba la ave habladora"
//console.log(contarPalabras(texto, "ave"))

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/* EJERCICIO 5
Comprobar si una cadena de texto termina con un determinado sufijo:
Crear una función que reciba una cadena de texto y un sufijo, y devuelva true si la cadena
termina con ese sufijo, false en caso contrario.
● Ejemplo: Si la entrada es "JavaScript es un lenguaje de programación" y se pretende
saber si termina con “ción”, debería devolver true.
● Ayuda: Se espera que el ejercicio se resuelva con ciclos inexactos.*/

function terminaCon(frase, sufijo) {
  let indiceFrase = frase.length - 1;
  let indiceSufijo = sufijo.length - 1;

  while (indiceSufijo >= 0) {
    if (frase[indiceFrase] !== sufijo[indiceSufijo]) {
      return false;
    }
    indiceFrase--
    indiceSufijo--
  }

  return true;
}

// let frase = "JavaScript es un lenguaje de programación"
// console.log(terminaCon(frase, "ción"))

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/*EJERCICIO 6
Eliminar los espacios en blanco al inicio y final de una cadena:
Crear una función que reciba una cadena de texto y elimine los espacios en blanco al inicio y final de la misma.
● Ejemplo: Si la entrada es " JavaScript es divertido ", la salida debería ser "JavaScript es divertido".
● Ayuda: Se sugiere utilizar un ciclo exacto para recorrer toda la frase y que cada vez que se encuentre un 
caracter no “vacío” (espacio) se lo considere para la nueva palabra “sin espacios”. 
Si se le busca la vuelta, se puede reutilizar la función del punto 2.*/

function eliminarEspaciosExtremos(frase) {
  let inicio = 0;
  let fin = frase.length - 1;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== " ") {
      inicio = i;
      break;
    }
  }
  for (let j = frase.length - 1; j >= 0; j--) {
    if (frase[j] !== " ") {
      fin = j;
      break; 
    }
  }
  let nuevaFrase = "";
  for (let k = inicio; k <= fin; k++) {
    nuevaFrase += frase[k];
  }
  return nuevaFrase;
}
let frase = " JavaScript no es divertido "
console.log(eliminarEspaciosExtremos(frase))

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/*EJERCICIO 7
Extraer el dominio de una dirección de correo electrónico:
Crear una función que reciba una dirección de correo electrónico y devuelva únicamente el dominio de la misma.
● Ejemplo: Si la entrada es “jhondoe@ahk.com.ar”, la salida debería ser “ahk.com.ar”*/

function extraerDominio(correo) {
  let dominio = "";
  let guardar = false;

  for (let i = 0; i < correo.length; i++) {
    if (correo[i] === "@") {
      guardar = true; 
    } 
    else (guardar) 
      dominio = dominio + correo[i]; 
    }
    return dominio
  }

//let email = "jhondoe@ahk.com.ar";
//console.log(extraerDominio(email));

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/*EJERCICIO 8
Combinar dos arrays alternando sus elementos:
Crear una función que reciba dos arrays y devuelva un nuevo array con los elementos de ambos
arrays combinados alternativamente.
● Ejemplo: Si la entrada fueran los arrays [1, 2, 3] y ['a', 'b', 'c', ‘d’], la salida debería ser [1,
‘a’, 2, ‘b’, 3, ‘c’, ‘d’]*/

function combinarListas(listaUno, listaDos) {
  let combinacion = [];
  let indice = 0;
  while (indice < listaUno.length || indice < listaDos.length) {
    if (indice < listaUno.length) combinacion.push(listaUno[indice]);
    if (indice < listaDos.length) combinacion.push(listaDos[indice]);
    indice++;
  }
  return combinacion;
}
//let lista1 = [1, 2, 3];
//let lista2 = ['a', 'b', 'c', 'd'];
//console.log(combinarListas(lista1, lista2));

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/*EJERCICIO 9
Calcular impuestos:
Desarrollar una función que permita conocer los impuestos que debe abonar una persona dada
su edad y sus ingresos mensuales. Los impuestos a abonar por una persona entre 18 y 20 años
es un 10% de los ingresos; las personas entre 21 y 30 deben abonar 15% de los ingresos; y
todo el resto un 40%. Los menores de edad no abonan impuestos.
● Ejemplo: Si la entrada fuera la edad 18 e ingreso 1000, la salida esperada debería ser
100.*/

function calcularImpuesto(edad, ingresosMensuales) {
  if (edad < 18){
    return 0
}
  if (edad >= 18 && edad <= 20){
    return ingresosMensuales * 0.1
}
  if (edad >= 21 && edad <= 30){
    return ingresosMensuales * 0.15
}
  else {
    return ingresosMensuales * 0.40
}
}

//console.log(calcularImpuesto(18, 1000));

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/*EJERCICIO 10
10. Resumen de cantidad de likes:
Desarrollar una función que, dada una cantidad numérica de likes, devuelva un texto informativo
de la cantidad de likes en formato de “K” para miles y “M” para millones.
● Ejemplo: Si la entrada fuera 1400, la salida debería ser “1.4K”; o si la entrada fuera “34
567” la salida debería ser “34.5K”.*/

function resumenLikes(cantidad) {
  if (cantidad >= 1_000_000) {
    return (cantidad / 1_000_000).toFixed(1) + "M";
  }
  if (cantidad >= 1_000) {
    return (cantidad / 1_000).toFixed(1) + "K";
  }
  else return cantidad.toString();
}

//console.log(resumenLikes(777));    
//console.log(resumenLikes(34566667));    
//console.log(resumenLikes(9999)); 