import { NavLink, Outlet } from "react-router";
import './header.css'
function Navbar() {
  return (
    <>
    <div>
    <div className="header">
        <div>
          <NavLink to="/" className="link"><img src="/home.png" style={{width:40}}/></NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink className="link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/college">College</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/users/list">List</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user/about">About</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user/login">Login</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user/register">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
    </>
  );
}

export default Navbar;
