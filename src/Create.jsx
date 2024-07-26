import React, { useState } from 'react'
import { addUser } from './userReducer'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const users=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handelSubmit=(event)=>{
        event.preventDefault();
      dispatch(addUser({id:users?users[users.length -1 ].id + 1:0,email,name}))
     navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
    <h2> Add new user</h2>
<form onSubmit={handelSubmit}>
<div className=''>
  <label htmlFor='name'>Name: </label>
<input  type='text' name='name' className='form-control' placeholder='Enter name' 
onChange={e=>setName(e.target.value)}/>
</div>
<div className=''>
  <label htmlFor='email'>Email: </label>
<input  type='text' name='email' className='form-control' placeholder='Enter email'
onChange={e=>setEmail(e.target.value)} />
</div><br/>
<button className='btn btn-info text-white'>submit</button>
</form>
    
    </div>
  
    </div>
  )
}

export default Create
