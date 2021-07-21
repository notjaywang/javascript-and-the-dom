const name = "Andrew";

/* As function declaration

function sayName() {
    const message = "My name is " + name;
    console.log(message);
} */ 

/* as function expression

const sayName = function() {
  const message = "My name is " + name;
  console.log(message);
} */

//as arrow function

const sayName = () => {
  const message = "My name is " + name;
  console.log(message);
}

const sayBye = () => {
  console.log("Bye " + name);  
}