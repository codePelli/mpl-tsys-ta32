var valores = [true, 5, false, "hola", "adios", 2];

//////////////////////////////////////////////////
var hola = valores[3];
var adios = valores[4];

var esMayor = hola.length > adios.length;
console.log("hola mayor que adios " + esMayor);

//////////////////////////////////////////////////
var boolTrue = valores[0];
var boolFalse = valores[2];

var resultadoBoolTrue = boolTrue && boolFalse;
var resultadoBoolFalse = boolTrue || boolFalse;
console.log("resultado true: " + resultadoBoolTrue);
console.log("resultado false: " + resultadoBoolFalse);

//////////////////////////////////////////////////
var numero = valores[1];
var numero2 = valores[5];

var suma = numero + numero2;
var resta = numero - numero2;
var multiplicacion = numero * numero2;
var division = numero / numero2;
var modulo = numero % numero2;
console.log("suma:" + suma);
console.log("resta:" + resta);
console.log("multiplicacion:" + multiplicacion);
console.log("division:" + division);
console.log("modulo:" + modulo);