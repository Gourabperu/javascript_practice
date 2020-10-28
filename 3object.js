 const row = {
    name: 'Emerson',
    age: 19,
    birthday: '1987-09-19',
    address: {
      region: 'Lima',
      province: 'Lima',
      district: 'La Molina'
    }
  };
  
  console.log(row.address.district);
   const row = {
    name: 'Emerson',
    age: 19,
    birthday: '1987-09-19',
    address: {
      region: 'Lima',
      province: 'Lima',
      district: 'La Molina'
    },
    toString: function() {
      return `${this.name} - ${this.age} - ${this.address.district}`;
    }
  };
  
  console.log(row.toString());
   const row = {
    name: 'Emerson',
    age: 19,
    birthday: '1987-09-19',
    address: {
      region: 'Lima',
      province: 'Lima',
      district: 'La Molina'
    },
    toString: function () {
      return `${this.name} - ${this.age} - ${this.address.district}`;
    },
  };
  
  row.chapa = 'hermano';
  
  delete row.name;
  
  /*
  console.log(row.hasOwnProperty('age'));
  console.log(Object.keys(row));
  console.log(row.toString());
  console.log(row)
  */
  console.log(row.toString());
   const row = {
    name: 'Emerson',
    age: 19,
    birthday: '1987-09-19',
    address: {
      region: 'Lima',
      province: 'Lima',
      district: 'La Molina'
    },
    toString: function () {
      return `${this.name} - ${this.age} - ${this.address.district}`;
    },
  };
  
  row.chapa = 'hermano';
  
  delete row.name;
  
  /*
  console.log(row.hasOwnProperty('age'));
  console.log(Object.keys(row));
  console.log(row.toString());
  console.log(row)
  */
  console.log(row.toString());