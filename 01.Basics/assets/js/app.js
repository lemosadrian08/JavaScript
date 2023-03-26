console.log("Hello world");

/* 
Variable
Es un contenedor de informacion que apunta a un lugar en memoria.
Dicha informacion puede cambiar en el futuro. 

El objeto windows es del navegador (dentro de este objeto esta promp, alert, comfirm)
node utiliza el objeto global, y el navegador no lo lee

Primitivos 
es informacion que no es un objeto y que son inmutables 

En JS esxisten 6:
Boolean: true / false
Null: Sin valor en lo absoluto (si le asigno un a una variable ....dara un objeto)
Undefined: una variable declarada que aun n se le asigna valor
Number: integer, floats, etc
String: cadena de caracteres
Symbol: Es un valor univ¿co que bo es igual a ningun otro valor

Arreglo son un objeto parecido a una lista de informacion, que contiene un grupo de elementoss
*/

let a = 10;
let b = 20;
const c = 30;
const adri = "adrian"
const x=a+b+c;


console.log( { adri } );
console.log( { c } );
console.log( { x } );

console.table( { a, b, c } );


let d = 'Hot ';
let e = 'dog';

const hotDog = d + e ;


