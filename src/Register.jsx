import { NavLink,Outlet } from 'react-router';
import './register.css'
function Register() {
  return <>
  <div className="wrapper">
    <h2>Register Here</h2>
    <form className="form" action="#">
      <div className="input-box">
        <input type="text" placeholder="Enter your name" required />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" required />
      </div>
      <div className="input-box">
        <input type="password" autoComplete="true" placeholder="Create password" required />
      </div>
      <div className="input-box">
        <input type="password" autoComplete="true" placeholder="Confirm password" required />
      </div>
      <div className="policy">
        <input type="checkbox" id="t&c"/>
        <label htmlFor="t&c">I accept all terms & condition</label>
      </div>
      <div className="input-box button">
        <input type="Submit"  />
      </div>
      <div className="text">
        <h3>Already have an account?<NavLink to='/user/login'>Login</NavLink></h3>
      </div>
    </form>
        <Outlet />
  </div>  
  <h4><NavLink to="/" >Go to homepage</NavLink></h4>

  </>;
}

export default Register;
