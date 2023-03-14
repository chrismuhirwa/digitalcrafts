// Given the data array, return the following HTML string:
// <ul><li>Billy</li><li>Susie</li>li>Bobby</li></ul>

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
  
  const makeHtmlString = (arr) => {
    const result = arr.map((person) => {
      return `<li>${person.name}</li>`;
    }).join("");
     return `<ul>${result}</ul>`;
  };
  
  console.log(makeHtmlString(data));