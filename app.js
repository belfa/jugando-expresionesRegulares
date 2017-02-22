console.log('Evaluaciones comunes');

$(function () {
    /**
     * URL/Dirección web válida
     */
    var isValidUrl = function () {
        var url = document.getElementById('url');
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/.test(url.value)
    }

    /**
     * Contraseña segura
     * Contraseñas con al menos una letra mayúscula.
     * Contraseñas con al menos una letra minúscula.
     * Contraseñas con al menos un número o caracter especial.
     * Contraseñas con mínimo 8 caracteres.
     **/
    var isValidPass = function () {
        var pass = document.getElementById('pass');
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(pass.value)
    }

    /**
     * Teléfonos en el mundo
     * https://en.wikipedia.org/wiki/List_of_country_calling_codes
     */
    var isValidPhone = function () {
        var phone = document.getElementById('phone');
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(phone.value)
    }

    /**
     * Tarjetas de credito
     */
    var isValidCreditCard = function () {
        var phone = document.getElementById('phone');
        return /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\ d{2}-?\s?\d{6}-?\s?\d{5}$/.test(phone.value)
    }

    /**
     * Código postal
     */
    var isValidPostalCode = function () {
        var phone = document.getElementById('phone');
        return /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(phone.value)
    }

    /**
     * Nombres de usuario
     * Mínimo 6 caracteres
     * Máximo 30 caracteres
     */
    var isValidUserName = function () {
        var phone = document.getElementById('phone');
        return /^[a-z\d_]{6,30}$/i.test(phone.value)
    }

});

console.log('Ciclos y evaluaciones');

var mensaje = "Llegaban por montones, primero 10, después 20, después 35 y se iban duplicando hasta llegara a 1000";

var patron  = /\b(\d+)\b/g;

var match;

while(match=patron.exec(mensaje)){
    console.log(match);
    console.log("Se encontró ",match[1], " en la posición ", match.index);
}

console.log('Propiedad LastIndex');

var expresion = /y/g;//La propiedad lastIndex es global sobre una busqueda en una cadena,
// necesita el modificador /g para tener sentido

console.log(expresion.lastIndex);//vale 0 porque aun no hemos buscado la expresion en ningún sitio

expresion.lastIndex = 6; //modificador

var coincidencia = expresion.exec('sibr yfx sibr yfx');
console.log(coincidencia);
console.log(expresion.lastIndex);

otraExpresion = /\d/g;

console.log(otraExpresion.exec('Pedí 4 hamburguesas y 1 agua'));//lastIndex = 6
console.log(otraExpresion.exec('Pedí 4 hamburguesas y 1 agua'));//lastIndex = 16
console.log(otraExpresion.exec('Pedí 4 hamburguesas y 1 agua'));//lastIndex = 0
console.log('O...'+otraExpresion.lastIndex);

console.log('Search');

var mensaje = 'Esta historia continuará ....'

console.log(mensaje.search(/\S/));

console.log('Replace');

var mensaje = 'El cliente pidió sushi y comio su sushi';

//La 'g' hace que el remplazo sea global dentro del string, sino lo haría sólo con el primero
console.log(mensaje.replace(/sushi/g, 'tacos'));

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
