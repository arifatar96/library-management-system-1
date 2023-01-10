import { useNavigate } from "react-router-dom";
const UserLogin = () => {
    let navigate = useNavigate()
    let login = () =>{
        navigate('/user/')
    }
    return ( 
        <div className="userLogin">
            <div className="form container card mt-5 pt-3">
                <h1>Login as User</h1>
                <div className="form_input p-5">
                    <form onSubmit={login}>
                       <div className="email">
                            <input type="email" required  placeholder="email address" className="form-control my-4" />  
                       </div>
                       <div className="password">
                            <input type="password" required placeholder="enter password" className="form-control my-4" />
                       </div>
                       <button className="btn btn-lg px-5 btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UserLogin;