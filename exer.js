let average = 0,  summe = 0;

let a = parseInt(prompt("Bitte geben Sie erste Zahl ein:"));
let b = parseInt(prompt("Bitte geben Sie zweite Zahl ein:"));

// Function declaration
function calc(a, b) {
  summe = a + b;
  average = (a + b) / 2;

  // document.write is visible on HTML; console.log is not
  document.write(
    "(calc) Die Summe ist " +
      summe +
      " und der Duchschnitt ist " +
      average +
      "<br>"
  );
}
// Call of function
calc(a, b);

// Function expression
const calc2 =function(a,b)
{
    summe = a + b;
    average = (a + b) / 2;
  
    // document.write is visible on HTML; console.log is not
    document.write(
      "(calc) Die Summe ist " +
        summe +
        " und der Duchschnitt ist " +
        average +
        "<br>"
    );
}
// your code goes here
calc2(a, b);

// Function expression as arrow function
const calc3 =(a,b)=>
    {
        summe = a + b;
  average = (a + b) / 2;

  // document.write is visible on HTML; console.log is not
  document.write(
    "(calc) Die Summe ist " +
      summe +
      " und der Duchschnitt ist " +
      average +
      "<br>"
  );
    }
// your code goes here
calc3(a, b);