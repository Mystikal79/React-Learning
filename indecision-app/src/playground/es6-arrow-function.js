const square = function (x) {
    return x * x;
};
console.log(square(10));


// Using arrow function
const squareArrow = (x) => {
    return x * x;
};
console.log(squareArrow(10));

const squareArrow1 = (x) => x * x;
console.log(squareArrow1(9));


// Get firstname
const fullName = "Ken Thepvongsa";
console.log(fullName.split(' ')[0]);

const getFirstName = (fName) => fName.split(' ')[0];
console.log(getFirstName('Mystikal Seven'));