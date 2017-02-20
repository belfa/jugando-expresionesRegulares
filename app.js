console.log('Patrones al inicio y al final de una expresion');

var expresionInicio = /^Any/;

console.log(expresionInicio.test('Any app that can be imagined can be made in Javascript'));

var expresionFinal = /Javascript$/;

console.log(expresionFinal.test('Any app that can be imagined can be made in Javascript'));

var expresionInicioFinal = /^Any|Javascript$/;
console.log(expresionInicioFinal.test('Any app that can be imagined can be made in Javascript'));

console.log('Uso de patrones opcionales');

var patronesOpcionales = /pollo|res/;

console.log(patronesOpcionales.test('El cliente pidio pollo')); //true
console.log(patronesOpcionales.test('El cliente pidio res')); //true
console.log(patronesOpcionales.test('El cliente pidio pescado')); //false

console.log('Limitar palabras y cadenas de texto en una expresion regular');

var limitarPalabra = /\bcat\b/;

console.log(limitarPalabra.test("cat")); //true
console.log(limitarPalabra.test("categoria"));//false

console.log('Coincidencia y grupos mediante exec y match');

console.log("Hasta 1994".match(/\d+/));

var expresionExec = /\d+/.exec('Del año 1984');

console.log(expresionExec);

console.log('Agrupar patrones en subexpresiones');

var expresionAgrupar = /Wooo+(hoo+)+/i;
//Woohooooooooooo!
console.log(expresionAgrupar.test('Wooooooohoohoooohooohooooo'));

//Sin case sensitive
var expresionSinCaseSensitive = /Hola Mundo/i;
console.log('Sin case sensitive');
console.log(expresionSinCaseSensitive.test('HOLA Mundo'));

//Contador de Patrones
var expresionContadora = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2,}/;

console.log(expresionContadora.test('27-06-2007 11:09'));

//Patrones opcionales
var expresionPatronesOpcionales = /Hola Mun?do/;

console.log(expresionPatronesOpcionales.test('Hola Mundo'));
console.log(expresionPatronesOpcionales.test('Hola Mudo'));

//Patrones con repetición
var expresionRepeticion1 = /\d*/;
var expresionRepeticion2 = /\d+/;

console.log(expresionRepeticion1.test('1'));
console.log(expresionRepeticion2.test('1'));

//Negaciones

 var expresionesNegadas = /[^01]/;
 console.log(expresionesNegadas.test('000101010010101001'));

//Trabajando con Grupos de Caracteres.
var expresionGrupoCaracteres = /\d\d-\d\d-\d\d\d\d/;

console.log(expresionGrupoCaracteres.test('08-02-1984'))

//Nuestra expresión regular
var expresion1 = new RegExp('abc');
console.log(expresion1.test('abcdef'));

//Otra forma
var expresion2 = /Hola Mundo/;
console.log(expresion2.test('El primer programa es Hola Mundo'));

//Existe al menos uno de estos números
var expresion3 = /[0123456789]/;
console.log(expresion3.test('Sucedió en 1996'));

var expresionRango = /[0-9a-zA-Z]/;
console.log(expresionRango.test('Sucedió en 2004'));
console.log(expresionRango.test(':::::'));
