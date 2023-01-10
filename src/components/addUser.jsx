import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [phoneNumber,setNumber] = useState("")
    let [email,setEmail] = useState("")
    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault();
        //data to be posted
        let userData = {name,email,age,phoneNumber}
        //posting to server
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('user added successfully')
        navigate('/admin/user-list')
    }

    return (
        <div className="addUser">
            <h1 className="text-center">Add a New User</h1>
            <div className="form form-group container mx-auto text-center">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control my-3" placeholder="enter name of the user" />
                    </div>
                    <div className="age">
                        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} min='1' className="form-control my-3" placeholder="enter age of the user" />
                    </div>
                    <div className="email">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control my-3" placeholder="email address" />
                    </div>
                    <div className="phoneNumber">
                        <input type="tel" value={phoneNumber} onChange={(e)=>setNumber(e.target.value)} minLength='10' maxLength='10' className="form-control my-3" placeholder="enter phone number" />
                    </div>
                    <button className="btn btn-success">Add User</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;