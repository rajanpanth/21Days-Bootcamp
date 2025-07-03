// // function App(){

// //   return <h1 style={{display: 'flex', justifyContent: 'center' }}>Welcome</h1>
// // }

// // export default App


// // const App = () => {

// //   return <h1 style={{display: 'flex', justifyContent: 'center' }}>Welcome</h1>
// // }

// // export default App



// //  type rafce snippet to create a functional component with an export statement




// // components => states

// // import React from 'react'


// // // const ShowMyName = (props) => {
// // //   return (<h1>My name is: {props.obj.name} and my address is: {props.obj.address} </h1>)
// // // }
// // const ShowMyName = ( name, address) => {
// //   return (<h1>My name is: {name} and my address is: {address} </h1>)
// // }
// // const App = () => {
// // const myName = 'Rajan Pantha'
// // const myAddress = 'Kathmandu, Nepal'

// // const obj = {
// //  id: 1,
// //   name: 'Rajan',
// //   address: 'Kathmandu, Nepal'
// // }
// //   return(
// //   <>
// //   <h1 style={{ display: 'flex', justifyContent: 'center' }}>Welcome</h1>
// //   <ShowMyName 
  
// //   // name = {myName} address = {myAddress}
// //   // obj = {obj}
// //   name = {myName}
// //   address = {myAddress}
// //   />
// //   </>

// //   )
// // }


// // export default App


// import React, {useState} from 'react'


// const Welcome = () => {
//   <h1 style={{ display: 'flex', justifyContent: 'center' }}>Welcome</h1>
// }

// const NotWelcome = () => {
//  return (<h1 style={{ display: 'flex', justifyContent: 'center' }}>Not Welcome
//  </h1>
//  )
// }

// const App = () => {


//   // suppose this is comming from backend
// // here status is variable, setsStatus is a function to set value in variable
//   const [status, setStatus] = useState(false) //useState is hook



//   return (
//   <>
//   <h1 style={{ display: 'flex', justifyContent: 'center' }}>

//     App component
//   </h1>
//   {status ? <Welcome/> : <NotWelcome/>}
//   <button onClick={() => setStatus(!status)}  style={{ display: 'flex', justifyContent: 'center' }}> Change Status</button>
  
//   </>
//   )
// }


import React, { useState } from 'react'

const Welcome = () => {
  return <h1 style={{ display: 'flex', justifyContent: 'center' }}>Welcome</h1>
}

const NotWelcome = () => {
  return <h1 style={{ display: 'flex', justifyContent: 'center' }}>Not Welcome</h1>
}

const App = () => {
  const [status, setStatus] = useState(false)

  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        App component
      </h1>
      {status ? <Welcome /> : <NotWelcome />}
      <button onClick={() => setStatus(!status)} style={{ display: 'flex', justifyContent: 'center' }}>
        Change Status
      </button>
    </>
  )
}

export default App