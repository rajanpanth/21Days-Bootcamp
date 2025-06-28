// 1. Objects
const users = {
    name: "Rajan",
    age: 20,
    status: "true",
    extraData: null,
    hobbies: ["reading", "coding", "gaming"],
    say: function () {
        return `Hello, my name is ${this.name}`;
    },
}
document.getElementById("profile").innerHTML = `
    Name: ${users.name} <br> and Hobbies: ${users.hobbies.join(", ")}`;

function showGreeting() {
    alert(users.say());
}
console.log(users);



// 2. JSON
const jsonString = `{"username": " Rajan", "age": 20, "status": true}`;

console.log(JSON.stringify(users)); // Convert object to JSON string

console.log(JSON.parse(jsonString)); // Convert JSON string to object



// callback function
function showMessage() {
    const response = "this is a response";
    const callbackRes = document.getElementById("callback");
    callbackRes.innerHTML = "Waiting..";
    setTimeout(() => {
        callbackRes.innerHTML= 'This is a Response after 2sec callback' 
    }, 2000); // Simulate a delay

}


// New
//  1. promise (very important): used in api calling
// function -> acyoncronous
// promise has 3 state : pending, resolved, rejected
function delayMessage(ms) {
    return new Promise((resolve) => 
        setTimeout(resolve, ms))
    }

function showText(){
    const output = document.getElementById("output");
    output.innerHTML = "Waiting.....";

delayMessage(2000).then(() => {
    output.innerHTML = "Promise resolved";
});
}


// 2. async await
// -> works with promise







// 3. error handling: try catch
// async function validate(){
//     const input = document.getElementById("input")
//     const output = document.getElementById("output")

//     try{
// output.innerHTML = "Validating...";
// await new Promise((resolve) => setTimeout(resolve, 2000));
// if(isNaN(input) || input === "") throw new Error("Invalid input"){
// output.innerHTML = `Valid input: ${input}`
// }
// catch (error){
//     console.log(error);
//     output.innerHTML = error.message;

   
//     }

// 4. Error handling: then catch finally (imp)
function call() {
  const output = document.getElementById('output')
  output.innerText = 'calling....'

  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Calling success...'), 2000)
    // setTimeout(() => reject('Calling failed...'), 2000)
  })
    .then((result) => {
      output.innerText = result

      // perform validation check as in try catch
    })
    .catch((error) => {
      output.innerText = error
    })
    .finally(() => {
      output.innerHTML = 'Calling Done....'
    })
}
