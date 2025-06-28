// Yesterday
// 1. Javascript Object
// 2. JSON
// 3. Callback functions

// 1. Objects
// const users = {
//   name: 'Sajin Shrestha',
//   age: 21,
//   status: true,
//   extraData: null,
//   hobies: ['reading', 'writing'],
//   say: function () {
//     return `Hello, I am ${this.name}`
//   },
// }

// document.getElementById('profile').innerText = `Name: ${
//   users.name
// } and Hobies: ${users.hobies.join(',')}`

// function showGreetings() {
//   alert(users.say())
// }

// 2. JSON
// const users = {
//   name: 'Sajin Shrestha',
//   age: 21,
//   status: true,
//   extraData: null,
// }
// const jsonString = `{ "username": "Sajin Shrestha", "age": "21" }`

// console.log(JSON.stringify(users)) // convers js object to json string

// console.log(JSON.parse(jsonString))

// 3. callback function
// function showMessage() {
//   const callbackRes = document.getElementById('callback')
//   callbackRes.innerText = 'Waiting....'

//   setTimeout(() => {
//     callbackRes.innerText = 'This is a response after 2 sec callback'
//   }, 5000) // 5000ms -> 5sec
// }

// New
// 1. Promise (very imp): used in api calling
// function -> acnyc
// promise has 3 state: pending, resolve, error/reject

// function delayMessage(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }

// function showText() {
//   const output = document.getElementById('output')
//   output.innerText = 'Waiting....'

//   delayMessage(3000).then(() => {
//     output.innerText = 'Promise resolved'
//   })
// }

// 2. Async await (very imp)
// -> works with Promise
// 1. some functions call
// 2.  async promise call
// 3.  await directly message is shown
// function delayMessage(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }

// async function showText() {
//   const output = document.getElementById('output')
//   output.innerText = 'Waiting....'

//   await delayMessage(3000)
//   output.innerText = 'Message shown after 3 seconds'
//   console.log('promise')
// }

// ==  -> checks value
// === -> checks type (also prefer this more)

// 3. Error handling: try..catch
// async function validate() {
//   const input = document.getElementById('input')
//   const output = document.getElementById('output')

//   try {
//     output.innerText = 'Checking....'
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     if (!isNaN(input) || input == '') throw new Error('Not a valid number')

//     output.innerText = `Valid number: ${input.value}`
//   } catch (error) {
//     // console.log(error)
//     output.innerText = error.message
//   } finally {
//     console.log('finally')
//   }
// }

// 4. Error handling: then catch finally (imp)
// function call() {
//   const output = document.getElementById('output')
//   output.innerText = 'calling....'

//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Calling success...'), 2000)
//     // setTimeout(() => reject('Calling failed...'), 2000)
//   })
//     .then((result) => {
//       output.innerText = result

//       // perform validation check as in try catch
//     })
//     .catch((error) => {
//       output.innerText = error
//     })
//     .finally(() => {
//       output.innerHTML = 'Calling Done....'
//     })
// }

// actual api call
