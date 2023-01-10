import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () =>{
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let navigate = useNavigate()

    let login = (e) =>{
        e.preventDefault();
        let data = {email,password} //data from input

        //admin validation
        if ( email == "admin@gmail.com" && password == 1234 ) {
            navigate('/admin/') 
        } else {
            alert('Invalid credentials')
        }
    }
    return (
        <div className="adminLogin">
            <div className="form container card mt-5 pt-3">
                <h1>Login as Admin</h1>
                <div className="form_input p-5">
                    <form onSubmit={login}>
                       <div className="email">
                            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address" className="form-control my-4" />  
                       </div>
                       <div className="password">
                            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password" className="form-control my-4" />
                       </div>
                       <button className="btn btn-lg px-5 btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;