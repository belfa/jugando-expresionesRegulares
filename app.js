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
