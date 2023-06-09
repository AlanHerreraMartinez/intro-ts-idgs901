 // La funcion con el void no devuelve nada
 function sumar(a:number,b:number):void{
    console.log(a+b)
 }
 let num=sumar(3,5)

 console.log(num)

 //Al final se coloca number para delvolver un valor, es por ello la importancia de la declaración de TypeData.
 function sumar2(a:number,b:number):number{
    let tem=a+b
    return tem
 }

 //Podemos declarar funciones opcionales
 function operasBas(n1:number,n2:number,n3:number=2):number{
    let tem=n1*n3+n2
    return tem
 }
 console.log(operasBas(3,0,5))


 //Podemos pasarle objetos a las funciones, atravez de una interface.
 interface Mascota{
    nombre:String;
    edad:number;
    mostrarEdad:()=>void; //Funcion flecha
 }
                    //Nombre y función
 function calcularEdad(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota)
 }

//primero hay que crear el objeto
const nuevaMascota:Mascota={
    nombre:'Michu',
    edad:3,
    mostrarEdad(){
        console.log('La edad es: '+this.edad)
    }

}
calcularEdad(nuevaMascota,2)

//Vamos a construrir un funcion anonima, es aquella que no tiene nombre
const funcSumar=function(n1:number,n2:number):number{
    return n1+n2
}
console.log(funcSumar(4,9))