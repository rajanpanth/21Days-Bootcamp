// localstorage in browser
// browser's personal database
// localstorage -> used for storting and retriving data in the browser

// 3 methods:
// 1. setItem(key, value) -> to store
// 2. getItem(key) -> to retrive value of certain key
// 3. removeItem(key) -> to remove key-value from localstorage
// 4. clear() -> deletes all keys and values from localstorage

// function saveUsername() {
//   const username = document.getElementById('username').value

//   if (username) {
//     localStorage.setItem('username', username)
//     document.getElementById('output').innerText =
//       'Username saved in localstorage'
//   } else {
//     document.getElementById('output').innerText = 'Please enter username'
//   }
// }

// function getUsername() {
//   const username = localStorage.getItem('username')
//   document.getElementById('output').innerText = username
// }

// function removeUsername() {
//   //   localStorage.removeItem('username')
//   localStorage.clear()
//   document.getElementById('output').innerText =
//     'Username removed from localstorage'
// }

// API methods: GET, POST, PUT, PATCH, DELETE
// www.example.com -> on 'GET' we receive JSON response
// GET -> fetch data
// POST -> create new
// PUT -> update existing data
// PATCH -> update existing data
// DELETE -> delets existing data

// on PUT
// 1. username 'sajin' -> 'sajin shrestha'
// 2. email
// 3. address
// 4. random data

// on PATCH
// 1. username 'sajin' -> 'sajin shrestha'

// sample:
//   {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },

// in get -> if successful status will be 2
function fetchPhotos() {
  // by default -> fetch uses 'GET' method
  fetch('https://jsonplaceholder.typicode.com/photos')
    // this calls first
    .then((response) => {
      if (!response.ok) throw Error('Failed to fetch photos')
      //   console.log(response)
      return response.json()
    })
    // this calls second only after first one is successful
    .then((data) => {
      //   console.log(data)
      const photoList = document.getElementById('photoList')
      photoList.innerHTML = ''
      data.forEach((photo) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <strong>ID:</strong> ${photo.id}
        <br />
        <strong>Album ID:</strong> ${photo.albumId}
        <br />
        <strong>Title:</strong> ${photo.title}
        <br />
        <strong>Url:</strong> ${photo.url}
        <br />
        <img src="${photo.thumbnailUrl}" alt="No image found" />
        `
        photoList.appendChild(li)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
