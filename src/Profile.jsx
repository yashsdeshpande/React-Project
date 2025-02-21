import axios from "axios";
import { useState } from "react";
import { useNavigate} from "react-router";

function Profile () {
    const [userData, setUserData] = useState()
    const getProfileData = () => {
        const token = JSON.parse(localStorage.getItem('token'))

        const header = {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
        axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
        .then((res)=>{
            setUserData(res.data)
            console.log("profile data", res)
        })
        .catch((err)=>{
            console.log("error occured", err)
        })
    }
    const navigate = useNavigate();
    const handleLogout = () => {
        setUserData()
        localStorage.removeItem("token");
        console.log("Logout successful");
        navigate("/user/login");
    }

    return (
        <div>
            <h4>This is profile page</h4>
            <button onClick={getProfileData}>get profile data</button>
            <button onClick={handleLogout}>Log out</button>
{userData &&
            <div>
                <p>Name: {userData?.name || "N/A"} </p>
                <p>Email: {userData?.email || "N/A"} </p>
                <p>Role: {userData?.role || "N/A"} </p>
                <img src={userData?.avatar} alt="img" />
            </div>
}
        </div>
    )
}

export default Profile