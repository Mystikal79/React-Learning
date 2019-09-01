// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));


// "this" keyword - no longer bound with its values when using arrow function
const user = {
    name: 'Ken',
    cities: ['New York', 'Texas', 'Japan'],
    printPlacesLived() {
    // printPlacesLived: function() {    //elimating the word "function"
        // console.log(this.name);
        // console.log(this.cities);
        
        // Arrow function way
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);

        });
    }
};
user.printPlacesLived();

// Using "map" instead of arrays
const user1 = {
    name: 'Kenny',
    cities: ['Dallas', 'Houston', 'El Paso'],
    printLivedPlaces() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);        
    }
};
console.log(user1.printLivedPlaces());

const multiplier = {
    numbers: [3, 6, 9],
    multiplyBy: [5],
    multiply() {
        return this.numbers.map((number) => 'New multiplication numbers: ' + number * this.multiplyBy);

    }
}
console.log(multiplier.multiply());