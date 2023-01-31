/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.sum = function() {
    return a + b;
  };
  this.subtraction = function() {
    return a - b;
  };
  this.multiplication = function () {
    return a * b;
};
this.division = function () {
     return a / b;
};
}

const count = new Calculator(50, 20);
console.log(count.sum());
console.log(count.subtraction());
console.log(count.multiplication());
console.log(count.division());
