import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useLogin from "../../hooks/useLogin";
import "./Login.css";


const Login = () => {

  let [uname,setUname] = useState("");
  const navig = useNavigate();
  let [pass,setPass] = useState("");

  const  { login, error, loading } = useLogin();
  const {user, setUser} = useAuthContext();

  

  useEffect(()=>{
    // console.log(user);
    user && navig("/home");
  },[user])

  const handlePass = (e)=>{
    setPass(e.target.value.trim());
    // console.log(e.target.value);
  }
  const handleUname = (e)=>{
    setUname(e.target.value.trim());
  }

  const handleLogin = async (e)=>{
    e.preventDefault();
    // console.log("uname: ",uname);
    // console.log("pass: ",pass);
    await login(uname,pass);
  }
  return (
    <div className="Login">
      <div className="login_contain">
        <form onSubmit={handleLogin}>
          <div className="page_title">
            <h1>Login</h1>
          </div>
          <label htmlFor="uname">Email Address:</label>
          <input type="text" name="email" id="email" onChange={handleUname}/>
          <label htmlFor="pass">Password</label>
          <input type="password" name="pass" id="pass" onChange={handlePass}/>

          {!loading && <input type="submit" value="Login" className="login_btn" />}
          {loading && <input type="submit" value="Loading..." className="login_btn" disabled/>}

          {error && <p className="error">{error.message}</p>}

          <Link to="/signup" className="signin_link">New here? Sign up.</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
