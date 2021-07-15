/* as function declaration 

function square(x) {
    return x * x;
} */  


//as arrow function 

const square = (x) => {
  return x * x;
}


//as more concise arrow function

const square1 = x => x * x;


/* as function declaration 

function cube(x) {
    return square(x) * x;
} */ 

//as arrow function

const cube = (x) => {
  return square(x) * x;
}

//as more concise arrow function

const cube1 = x => square(x) * x;
