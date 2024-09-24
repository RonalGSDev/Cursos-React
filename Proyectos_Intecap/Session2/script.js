let nombreA = "Ronal;"
let numeroA = 123;
let bandera = false;
let gravedad = 9.8;

//creacion de objetos
const persona = {
    nombre : "Maria",
    edad : 23,
    pais : "Guatemala"
};
console.log(persona)

const libro = {
    nombre: "Si no eres el primero",
    autor: "Grant Cardone",
    paginas: 239
};
console.log(libro.autorLibro);
console.log(libro.nombre);


//destructing objetos
const {nombre, autor, paginas} = libro;
console.log(autor);
console.log(nombre)

//destructing multiple
let personas1={
    nombreCompleto:"Maria Alejandra",
    edad:24,
    esEtudiante:true
};

let personas2={
    nombreCompleto:"Cesar Perez",
    edad:50,
    esEtudiante:false
};


const{nombreCompleto: nombre1, edad: edad1, esEtudiante: esEstudiante1} = personas1;

const{nombreCompleto: nombre2, edad: edad2, esEtudiante: esEstudiante2} = personas2;

console.log(edad2);

//destructing anidado
let personas3={
    nombre:"Carlos Fuentes",
    direccion:{calle:"calle A", casa:"4-78"},
}

const {nombre:nombrePersona, direccion:{calle,numero}} = personas3;

console.log(calle);


//unir objetos

const obj1 = {a:1, b:2};
const obj2 = {a:3, b:4};

const objUnido = {...obj1, ...obj2};
console.log(objUnido)



//mapear arreglo

let frutas = ["Manza","Pera","Sandia"];

console.log("----Map----");
frutas.map(fruta => {
    console.log(fruta);
});


//con for
console.log("----for----");
for(let i=0; i<frutas.length;i++){
    console.log(frutas[i])
}

//funciones

//funcion basica
function Saludar(){
    console.log("Hola Mundo!");
}

//funcion por parametro
function mostrarMensaje(_mensaje){
    let num = 5 + _mensaje;
    console.log("Mensaje recibido: "+_mensaje);
}

//funcion para sumar 2 numero
function SumaNumero(num1, num2){
    let suma = num1 + num2;
    mostrarMensaje(suma);
}

//funcion flecha
const multi = (a, b) =>{
    return a*b;
}

//funcion flecha
const res = (a, b) =>{
    return a-b;
}



//llamar a las funciones
Saludar();
mostrarMensaje(" Consideraciones");
mostrarMensaje(2);
SumaNumero(2,4);

//mostrar funcion flecha
console.log(multi(5,5));
console.log(res(5,20));