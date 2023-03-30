// Given the data array, call saveToDatabase for each student using the forEach array method.

const data = [
    {
      name: 'Billy',
      age: 20,
    },
    {
      name: 'Susie',
      age: 25,
    },
    {
      name: 'Bobby',
      age: 30,
    },
  ];
  
  const saveToDatabase = (person) => {
    console.log(`You added ${person.name} to the database.`);
  };
  
  const saveStudents = (arr) => {
    data.forEach(person => {
        
    });
  };
  
  saveStudents(data);