

let vector1:Array<number>=[9,8,7,6]

// En TypeScript, la palabra clave "push" se utiliza para agregar nuevos elementos a un arreglo (array). 
vector1.push(10)
vector1[1]=22
for(let tem of vector1)
    console.log(tem)

let tem:(number|string)[]=[]
tem.push('mario')
tem.push(123)

// El manejo de interfaces, añadiendo que el sibolo ? hace referencia a que puede omitir la declaración de la variable.
interface Alumno{
    matricula?:number;
    nombre:String;
    edad:number;
    email:String;
}

const alumno:Alumno={
    nombre:'mario bros',
    edad:23,
    email:'mariobros@gmail.com'
}

//El console.table, lo muestra en manera de tabla.
console.table(alumno)