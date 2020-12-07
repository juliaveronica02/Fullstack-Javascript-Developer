const person = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  // spread is mean copying array and add some argumen without change the existing array.
  const copiedPerson = { ...person };
  console.log(copiedPerson);
  
  const hobbies = ['Sports', 'Cooking'];
  const copiedArray = [...hobbies];
  console.log(copiedArray);
  
   // Rest.
   // to merge or pull item.
  const toArray = (...args) => {
    return args;
  };
  
  console.log(toArray(1, 2, 3, 4));

  // run: node index.js.