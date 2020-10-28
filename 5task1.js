
/*

// Recoje valor de usuario y compara su edad y devueve repuesta

function person(Name, Age) {
    this.name = Name;
    this.age = Age;
        if(this.age > 18){
            console.log(`your age : ${this.age} , so you are Adult`);
        } else{
            console.log(`your age : ${this.age} , so you are young`);
        }    
     };

person("Gourab",17);



// crear un método que reciba como parámetro un array de objetos con las propiedades name y age, y me imprima cual es el de mayor edad de estos


--------------

function person(Name, Age) {
    this.name = Name;
    this.age = Age;
    const ageArray = [];
    ageArray.push = this.name;
    ageArray.push = this.age;
    ageArray.forEach(person);
};

        if(person.this.age> person.this.age){
            console.log(`Person 1 age : ${this.age} , so you are Older`);
        } else{
            console.log(`Person 2 age : ${this.age} , so you are younger`);
        }    
     

     let person1 = new person("Gourab",17);
     let person2 = new person("Emarson",19);

     person1.person();
     person2.person();



----------------------


function person(Name, Age) {
    // this.name = Name;
    // this.age = Age;
     const ageArray = [];
     ageArray.push = Name;
     ageArray.push = Age;
     ageArray.forEach(person);
 };
 
         if(person1.person.Age >person2.person.Age ){
             console.log(`Person 1 age : ${Age} , so you are Older`);
         } else{
             console.log(`Person 2 age : ${Age} , so you are younger`);
         }    
      
 
      let person1 = new person("Gourab",17);
      let person2 = new person("Emarson",19);
 
      person1.person();
      person2.person();

      */

     function mayorEdad(personas) {
        let mayor = personas[0];
        personas.forEach((persona) => {
          if (persona.age > mayor.age) {
            mayor = persona;
          }
        });
        console.log(mayor);
      }
      
      
      mayorEdad([ {
          name: 'Emerson',
          age: 32,
        }, {
          name: 'Gourab',
          age: 28,
        }, {
          name: 'Giancarlo',
          age: 39,
        }, {
          name: 'Gerardo',
          age: 33,
        }
      ]);