// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'



// const Update = () => {
//     const {id}= useParams()
//     const users=useSelector((state)=>state.users)
//     const existingUser=users.filter(f=>f.id==id)
//     const {name,email}=existingUser[0]

//     const [uname,setName]=useState(name)
//     const [uemail,setEmail]=useState(Update)
//   return (
//     <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
//     <div className='w-50 border bg-secondary text-white p-5'>
//     <h2>Update user</h2>
// <form>
// <div>
//   <label htmlFor='name'>Name: </label>
// <input  type='text' name='name' className='form-control' placeholder='Enter name' 
// value={uname}  />
// </div>
// <div className=''>
//   <label htmlFor='email'>Email: </label>
// <input  type='text' name='email' className='form-control' placeholder='Enter email'
// value={uemail}   />
// </div><br/>
// <button className='btn btn-info text-white'>Update</button>
// </form>
    
//     </div>
  
//     </div>
//   )
// }

// export default Update
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './userReducer';


const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.find(user => user.id == id);
    const { name, email } = existingUser;
    const navigate=useNavigate()

    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
 const dispatch=useDispatch()
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
const handleUpdate= (e)=>{
    e.preventDefault()
dispatch(updateUser({
    id:id,name:uname,email:uemail 
}))
navigate('/')
}
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h2>Update user</h2>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            placeholder='Enter name'
                            value={uname} onChange={handleNameChange}
                         
                        />
                    </div>
                    <div className=''>
                        <label htmlFor='email'>Email: </label>
                        <input
                            type='text'
                            name='email'
                            className='form-control'
                            placeholder='Enter email'
                            value={uemail}
                           onChange={handleEmailChange}
                        />
                    </div>
                    <br />
                    <button  className='btn btn-info text-white'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;
