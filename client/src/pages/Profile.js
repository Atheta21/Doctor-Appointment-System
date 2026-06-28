import React, { useEffect, useState } from "react";
import axios from "axios";
import EditProfile from "../components/EditProfile";
import "../styles/profile.css";

function Profile() {

const [appointments, setAppointments] = useState([]);
const [user, setUser] = useState({});
const [editMode,setEditMode] = useState(false);

const userId = localStorage.getItem("userId") || "123456";


// GET USER APPOINTMENTS
const getAppointments = async () => {

  try {

    const res = await axios.get(
      `http://localhost:8080/api/v1/appointment/get-user-appointments/${userId}`
    );

    if(res.data.success){
      setAppointments(res.data.data);
    }

  } catch (error) {
    console.log(error);
  }

};


// GET USER INFO
const getUser = async () => {

  try {

    const res = await axios.get(
      `http://localhost:8080/api/v1/user/get-user-info/${userId}`
    );

    if(res.data.success){
      setUser(res.data.data);
    }

  } catch (error) {
    console.log(error);
  }

};


// LOGOUT
const logout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("userId");

  window.location.href="/login";

};


// LOAD DATA
useEffect(()=>{
  getUser();
  getAppointments();
},[]);


return (

<div className="profile-container">

<h2 className="profile-title">My Account</h2>


{/* USER INFO */}

<div className="profile-info">

<h3>{user.name}</h3>
<p>{user.email}</p>

</div>


{/* EDIT PROFILE FORM */}

{editMode && (

<EditProfile
user={user}
userId={userId}
onClose={()=>setEditMode(false)}
refreshUser={getUser}
/>

)}


{/* PROFILE MENU */}

<div className="profile-menu">

<button onClick={()=>setEditMode(true)}>
Edit Profile
</button>

<button onClick={getAppointments}>
My Appointments
</button>

<button onClick={logout}>
Logout
</button>

</div>


<h3 className="appointment-title">My Appointments</h3>


{/* APPOINTMENTS */}

{appointments.map((a)=>(

<div className="appointment-card" key={a._id}>

<p><b>Doctor:</b> {a.doctorId?.name}</p>

<p>{a.doctorId?.specialization}</p>

<p><b>Date:</b> {a.date}</p>

<p><b>Time:</b> {a.time}</p>

<p>
<b>Status:</b>

<span className={`status ${a.status}`}>
{a.status}
</span>

</p>

</div>

))}


</div>

);

}

export default Profile;