
const myIntro = (first = "Rajan", last = "Pantha", like = "coding", ...args) => {
    console.log(`Hello, my name is ${first} ${last}. I like ${like}.`);
}
myIntro();