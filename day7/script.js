console.log("Welcome");
const firstElement = document.querySelector(".first");
const classElement = document.querySelector(".content");
classElement.innerHTML = "Hello World";
firstElement.innerHTML = "Hello World";
firstElement.textContent = "Hello World2";
// both are similar
firstElement.style.color = "red";

const newElement = document.createElement("h1");
newElement.textContent = "This is a new tag from js";
firstElement.appendChild(newElement);

const statusContent = document.getElementById("status");
// event listener -> click
const myButton = document.getElementById("myButton");
myButton.addEventListener('click', ()=>{
    myButton.textContent = " Button Clicked";
    // alert('Button Clicked');
    statusContent.textContent = "Button Clicked";
})



// event listener -> focus
const input = document.getElementById("myInput");
input.addEventListener('focus', function() {
    console.log('Input focused');
// input.style.border = "2px solid red";
statusContent.textContent = "Typing started";
})


// event listener -> blur
input.addEventListener('blur', function() {
    input.style.border = "1px solid green";
    statusContent.textContent = "Typing ended";
})

// event listener -> change

const select = document.getElementById("mySelect");
select.addEventListener('change', function() {
    document.getElementById("selectedValue").textContent = "I Selected " + select.value;
})

// event listener -> mouse hover
const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "Hover over me";
myDiv.addEventListener('mouseover', function() {
    myDiv.style.backgroundColor = "yellow";
    

})

// event listener -> mouse out
myDiv.addEventListener('mouseout', function() {
        myDiv.style.backgroundColor = "blue";
})


// array
const color = ["red", "green", "blue", "yellow"];
console.log(color);
    