
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


  const handleAddForm=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;

    const user={
      name,email
    }

    console.log(user)

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=> {
      console.log(data)
      const newUsers =[...users,data];
      setUser(newUsers);
      form.reset();
    })

  }



  return (
    <>
      
      <h1>Users Managment</h1>

      <div>
        <form onSubmit={handleAddForm}>
          <input type="text" name='name' />
          <br />
          <input type="email" name='email' />
          <br />
          <input type="submit" value="add user" />
        </form>
      </div>

      <h2>Total Users- {users.length}</h2>
      <div>
        {
          users.map(user=> <p key={user.id}>{user.id}:{user.name}:{user.email}</p>)
        }
      </div>
      
    </>
  )
}

export default App
