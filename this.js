let x = 1;
const y = 2;function xxx() {
 let z = 3;
 console.log(z);
}function yyy() {
 w = 5;
 console.log(w);
}xxx(); // 3
yyy(); // 5


function yyy(currentValue, index) {
 console.log(currentValue, index);
}function xxx() {
 const arr = ['A', 'B', 'C'];
 arr.forEach(yyy);
}xxx();



function Persona(nombre, edad) {
 this.name = nombre;
 this.age = edad;
 this.sayHello = function () {
 console.log('Hola soy ' + this.name);
 };
 const comer = () => {
 console.log('comiendo ' + this.name);
 }
 this.xxx = function () {
 comer();
 };
}let persona1 = new Persona('emerson', 32);
let persona2 = new Persona('gourab', 28);persona1.xxx();


