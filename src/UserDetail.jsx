import { useParams } from "react-router"
import { NavLink } from "react-router"
function UserDetail() {
  const paramsData=useParams();

    return (
      <div className="college" style={{textAlign:'center'}}>
        <h1>Userdetail page</h1>
        <h2>User id is : {paramsData.id} </h2>
        <h2><NavLink to="/users">Back</NavLink></h2>
      </div>
    )
  }
  
  export default UserDetail