
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users,setUser]=useState([]);

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
      <h2>Total Users- {users.length}</h2>
      <div>
        {
          users.map(user=> <p>{user.id}:{user.name}:{user.email}</p>)
        }
      </div>
      
    </>
  )
}

export default App
