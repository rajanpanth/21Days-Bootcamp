// local storage in browser
// ->browser personal batabase
// ->local storage is used for storing and retriving data in the browser
// 3 methods:
// 1. setItem(key, value) - to store data
// 2. getItem(key) - to retrieve value of certain key
// 3. removeItem(key) - to remove data of certain key
// 4. clear() - to remove all keys and values


function saveUsername(){
    const username = document.getElementById("username").value
    if(username){
        localStorage.setItem("username", username)
        document.getElementById("output").innerText = "Username saved in local storage.";
    }
    else{
        document.getElementById("output").innerText = "Please enter a username.";
    }
}

function getUsername(){
    const username = localStorage.getItem("username")
    document.getElementById("output").innerText = username
}

function removeUsername(){
// localStorage.removeItem("username") // this will remove only the key "username" and its value from local storage
localStorage.clear() // this will remove all keys and values from local storage
document.getElementById("output").innerText = "Username removed from local storage.";

}


// API Methods: GET, POST, PUT, PATCH, DELETE
// www.example.com ->on 'GET' we receive JSON response
// GET -> fetch data
// POST -> Create new data
// PUT -> Update existing data
// PATCH -> Update existing data
// DELETE -> Remove existing data

// On Put, we send the entire object to update
// 1. user 'rajan' -> 'rajan pantha'
// 2. email
// 3. phone number
// 4. address

// On Patch, we send only the fields that we want to update
// 1. user 'rajan' -> 'rajan pantha'
// 2. email
// 3. phone number
// 4. address


// in get -> if successful status will be 2
function fetchPhotos(){
    // by default, fetch method uses GET request
    fetch("https://jsonplaceholder.typicode.com/photos")
    // this calls first
    .then((response) => {
        if(!response.ok) throw Error("Failed to fetch photos")
        // console.log(response)
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        // this calls second only after the first then is resolved
        const photoList = document.getElementById("photoList");
        photoList.innerHTML = ""; // Clear previous photos
        data.forEach(photo => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>ID:</strong> ${photo.id}
            <br>
            <strong>Title:</strong> ${photo.albumId}
            <br>
            <strong>URL:</strong> ${photo.title}
            <br>
            <strong>ID:</strong> ${photo.url}
            <br>
            <img src = "${photo.thumbnailUrl}" alt="No Image Found" />
            `
            photoList.appendChild(li);
        })
    })

    .catch(error => {
        console.error("Error fetching photos:", error);
    });
}