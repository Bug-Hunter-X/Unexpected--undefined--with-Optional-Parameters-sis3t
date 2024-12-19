function printName(name: string = 'Anonymous'): void {
  console.log(name);
}

printName(); // Prints 'Anonymous'
printName(undefined); // Prints 'Anonymous'
printName('John Doe'); // Prints 'John Doe' 