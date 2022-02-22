import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import useAuthContext from "../../hooks/useAuthContext";
import "./Signup.css";

const Signup = () => {
  const navig = useNavigate();
  const { loading, error, signup } = useSignup();
  const { user, setUser } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    let uname = e.target.uname.value.toLowerCase();
    let email = e.target.email.value;
    let pass = e.target.pass.value;
    // console.log(uname)
    const res = await signup(email, pass, uname);
    setUser(res);
  };

  useEffect(() => {
    // console.log("context set to");
    // console.log(user);
    user && navig("/home");
  }, [user]);

  return (
    <div className="Signup">
      <div className="signup_contain">
        <form onSubmit={handleSubmit}>
          <div className="page_title">
            <h1>Sign up</h1>
          </div>
          <label htmlFor="uname">Your Full Name:</label>
          <input type="text" name="uname" id="uname" />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="pass">Password</label>
          <input type="password" name="pass" id="pass" />

          {!loading && (
            <input type="submit" value="Sign up" className="signup_btn" />
          )}
          {loading && (
            <input
              type="submit"
              value="Loading..."
              className="signup_btn"
              disabled
            />
          )}

          {error && <p className="error">{error.message}</p>}

          <Link to="/" className="signin_link">
            Have an Account? Login.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
