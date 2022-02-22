import useAuthContext from "../../hooks/useAuthContext";
import useLogout from "../../hooks/useLogout";
import "./Header.css";

const Header = ()=>{

    const {logout, error} = useLogout();
    const {user, setUser} = useAuthContext();

    return(
        <div className="Header">
            <h2 className="app_title">Monetary</h2>
            {user && <button className="logout_btn" onClick={logout}>Logout</button>}
        </div>
    )
}

export default Header