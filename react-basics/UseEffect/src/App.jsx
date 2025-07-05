import Practice from './practice.jsx'
import React, { useEffect, useState } from 'react'

// useEffect hook

const App = () => {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(0)
// console.log(users)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setUsers(data)
       })
  },[])   // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count]) // This effect runs whenever 'count' changes
  // if empty-> calls on initial render only | if added dependencies, it renders when dependency value changes
  return (
    <>
      <h1 className='mlLeft'>App Component</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
      <h1 className='miLeft'>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)  } className='mlLeft'>Increase Count</button>
      <Practice />
     
      </>
  )
}
export default App