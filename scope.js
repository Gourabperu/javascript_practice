function saludar() {
  let x = 1;
  console.log(x);  // primer valor imprimir
  x = 2;
  console.log(x);  // segundo valor imprimir
  function despedirme() {
    let x = 3;
    console.log(x);
  }
  despedirme();     // tercer valor imprimir
  console.log(x);   // Cuarto valor imprimir
}

 saludar();

var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and not ' + (2 * a + b) + '.'); // antes
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`); // ahora