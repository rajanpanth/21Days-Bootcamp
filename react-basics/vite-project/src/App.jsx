// // This is a simple React component that displays a welcome message.
// import React from 'react'
// function App(){
//   return <h1 style={{display: 'flex', justifyContent: 'center' }}>Welcome</h1>
// }
// export default App



// // use of props to pass data to componentn from variables
// import React from 'react'
// const ShowMyName = (props) => {
//   return (<h1>My name is: {props.name} and my address is: {props.address} </h1>)
// }

// const App = () => {
// const myName = 'Rajan Pantha'
// const myAddress = 'Kathmandu, Nepal'
//    return(
//   <>
//   <h1 style={{ display: 'flex', justifyContent: 'center' }}>Welcome</h1>
//   <ShowMyName 

//   name = {myName} address = {myAddress}
//   />
//   </>
//   )
// }
// export default App



// //  type rafce snippet to create a functional component with an export statement
// // components => states



// // use of props to pass data to component from object(suppose like this is coming from backend)
// import React from 'react'
// const ShowMyName = (props) => {
//   return (<h1>ID:{props.obj.id}----- My name is: {props.obj.name} and my address is: {props.obj.address} </h1>)
// }

// const App = () => {
// // // suppose this is comming from backend
// const obj = {
//  id: 1,
//   name: 'Rajan',
//   address: 'Kathmandu, Nepal'
// }
//   return(
//   <>
//   <h1 style={{ display: 'flex', justifyContent: 'center' }}>Welcome</h1>
//   <ShowMyName 
//   obj = {obj}
//   />
//   </>
//   )
// }
// export default App



// // use destructuring to pass data to component
// const ShowMyName = ({ name, address }) => {
//   return (<h1>My name is: {name} and my address is: {address} </h1>)
// }

// const App = () => {
//   const myName = 'Rajan Pantha'
//   const myAddress = 'Kathmandu, Nepal'
//   return (
//     <>
//       <h1 style={{ display: 'flex', justifyContent: 'center' }}>
//         Welcome
//       </h1>
//       <ShowMyName
//         // destructuring
//         name={myName}
//         address={myAddress}
//       />
//     </>
//   )
// }
// export default App



// use of state to change the component
import React, { useState } from 'react'
const Welcome = () => {
  return (
    <h1 style={{ display: 'flex', justifyContent: 'center' }}>
      Welcome
    </h1>
  )
}
const NotWelcome = () => {
  return (
    <h1 style={{ display: 'flex', justifyContent: 'center' }}>
      Not Welcome
    </h1>
  )
}
const App = () => {
  // suppose this is comming from backend
  // here status is variable, setsStatus is a function to set value in variable
  const [status, setStatus] = useState(true) //useState is hook

  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        App component
      </h1>
      {status ? <Welcome /> : <NotWelcome />}
      <button onClick={() => setStatus(!status)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px auto', padding: '10px 20px', fontSize: '16px' }}>
        Change Status
      </button>
    </>
  )
}
export default App
