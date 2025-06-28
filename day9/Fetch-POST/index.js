localStorage.setItem('username', 'Rajan Pantha')
// localStorage.clear()

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   }

const username = localStorage.getItem('username')
document.getElementById('userName').textContent = username || 'Guest'

function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((response) => {
      if (!response.ok) throw Error('Failed to fetch posts')
      return response.json()
    })
    .then((posts) => {
      const postList = document.getElementById('postList')
      postList.innerHTML = ''

      posts.forEach((post) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <strong>ID:</strong> ${post.id}
        <br />
        <strong>User ID:</strong> ${post.userId}
        <br />
        <strong>Title:</strong> ${post.title}
        <br />
        <strong>Body:</strong> ${post.body}
        `

        postList.appendChild(li)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

// fetchPosts()

function addPost() {
  document.getElementById('postForm').addEventListener('submit', (e) => {
    e.preventDefault()
    const ptitle = document.getElementById('postTitle').value
    const pbody = document.getElementById('postBody').value
    // console.log(title)
    // console.log(body)

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: ptitle,
        body: pbody,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Post Data: ${data}`)
      })
  })
}


function patchPutPost(id) {
  // console.log(id)
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // method: 'PATCH', // or 'PUT' for full update
    method : 'PUT',
    body: JSON.stringify({
      title: 'Test Title',
      body: 'Test Body',

}),
  })
.then(()=> console.log(`PATCH successfull of ID: ${id}`))
.catch((error) => console.error('Error:', error))
}

function deletePost(id) {
  // console.log(`POST Delete ID: ${id}`)
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })
  
    .then(() => 
      console.log(`DELETE successfull of ID: ${id} `))
      .catch((err) => console.error(err))
}


fetchPosts()
addPost()
