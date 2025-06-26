// array
const color = ["red", "green", "blue", "yellow"];

// 1. array methods -> join()
document.getElementById("array").textContent = 'Color: ' + color.join(', ');


// 2. array methods -> push()(adds an element to the end of the array) pop()(removes the last element of the array)
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[2])


numbers.push(6); // adds 6 to the end of the array
console.log(numbers);

numbers.pop(); // removes the last element of the array
console.log(numbers);



// call back function-> function le function lai call garne

// 3. array methods -> filter() 
const eventNum = numbers.filter(num => num % 2 !== 0); // filter the even numbers
console.log(eventNum);


// 4. array methods -> map()
const doubled = numbers.map(num => num * 2); // double the numbers
console.log(doubled);
document.getElementById("doubled").textContent = 'Doubled: ' + doubled.join(', ');

// 5. array methods -> reduce()
const reducedMethodNum = numbers.reduce((a, b) => {
    // return b%2 === 0 ? a + b : a; //ternary operator
    return b>a?b:a; // return the maximum number
})
console.log('Using reduced method: ${reducedMethodNum}');

// javaScript Objects (imp)


// Most of the API response are in object formate
const person = {
    name: "Rajan",
    age: 19,
    city: "Kathmandu",
    status: "true",
    extra: null,
};
console.log(person);
console.log(Object.keys(person).join(', ')); // get the keys of the object
console.log(Object.values(person).join(', ')); // get the values of the object

console.log(person.name); 