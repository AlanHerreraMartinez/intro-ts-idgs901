// Este es un archivo de Type Script.
// La javascript la variable no se estable, puede ser asignacion con cualquier tipo de valor.
// Microsoft se dio a la tarea de dperfecionar, con valores especificos y bien establecidos.
// TypeScript dispone de una escritura estática, mientras que JavaScript es un lenguaje dinámico. 


// En pocas palabras, la diferencia principal entre TypeScript y JavaScript es que TypeScript es un
// lenguaje de programación de tipado estático que extiende JavaScript. TypeScript ofrece ventajas 
// como detección de errores en tiempo de compilación, programación orientada a objetos más estructurada
// y un ecosistema de herramientas más avanzado. JavaScript, por su parte, es un lenguaje de tipado dinámico
// y ampliamente utilizado en el desarrollo web.

// Además, en TypeScript, puede definirse varios valores 

/*
    TypeScript: Lenguaje con tipos estaticos que permite detectar
    errores de asignacion en tiempo de desarrollo.
*/


// Declaro un variable
var num1=23
// otra forma para declarar
let num2='rcr'
// otra de las formas es, la constante no puede en la ejecución
const num3=34

let version:number=2.2
version=23

let nombre:string='Alan'

let activo:boolean=true

let matricula:number|string|boolean=1234
matricula='123abc'

let vector:number[]=[1,2,3,4]

console.log(vector)
