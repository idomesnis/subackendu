import React from 'react'
import {useEffect, useState} from 'react'

function App () {

  const [backendData, setBackendData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  },[])

  console.log(backendData)
  return (
    <div>
      {(typeof backendData.users === 'undefined') ? ( 
      <p>Loading..</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
      ))
      )}
      
      </div>
  )
}

export default App

