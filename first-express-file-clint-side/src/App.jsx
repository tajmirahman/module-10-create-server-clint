
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [user,setUser]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
    .catch(error => {
      console.error("Fetch error:", error);
    });
  },[])

  return (
    <>
      
      <h1>Users Managment</h1>
      <h2>Total Users- {user.length}</h2>
      
    </>
  )
}

export default App
