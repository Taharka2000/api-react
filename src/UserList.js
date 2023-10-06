import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

export default function UserList() {
    const [user,setUser]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{setUser(res.data)})
        .catch(err=>console.log(err))
    },[])
  return (
    <>
    {
        user.map((r,i)=>(
            <div  >
                <div className="card flex flex-col content-start relative flex w-full max-w-[20rem] m-3 rounded-xl bg-gradient-to-tr bg-stone-400  p-5 text-white shadow-md " key={i}>
                <h1 className='text-black'> <span className='text-black text-xl '>Name:</span>{r.name}</h1>
                <h2><span className='text-black text-xl'>Username:</span> {r.username}</h2>
                <h2><span className='text-black text-xl'>Suite:</span> {r.address.suite}</h2>
                <h3><span className='text-black text-xl'>Adress:</span> {r.address.city}</h3>
                <h3><span className='text-black text-xl'>ZipCode:</span> {r.address.zipcode}</h3>
                <h2><span className='text-black text-xl'>Street:</span> {r.address.street}</h2>
                <h5><span className='text-black text-xl'>Lng:</span> {r.address.geo.lng}</h5>
                <h5><span className='text-black text-xl'>Number:</span> {r.phone}</h5>
                <h5><span className='text-black text-xl'>Website:</span> {r.website}</h5>
                <h5><span className='text-black text-xl'>Company: </span>{r.company.name}</h5>
                <p><strong className='text-black text-xl'>Email: </strong>&nbsp;{r.email} </p> 
                </div>
            </div>
        ))
    }
    </>
  )
}
