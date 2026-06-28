import React, { useState } from "react";
import axios from "axios";

function EditProfile({ user, userId, onClose, refreshUser }) {

const [name,setName] = useState(user.name || "");
const [email,setEmail] = useState(user.email || "");
const [password,setPassword] = useState("");


const updateProfile = async () => {

try{

const res = await axios.put(
`http://localhost:8080/api/v1/user/update-profile/${userId}`,
{
name,
email,
password
}
);

if(res.data.success){

alert("Profile updated successfully");

refreshUser();
onClose();

}

}catch(error){
console.log(error);
}

};


return(

<div className="edit-profile-card">

<h3>Edit Profile</h3>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Name"
/>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="Email"
/>

<input
type="password"
placeholder="New Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<div className="edit-buttons">

<button onClick={updateProfile}>
Save Changes
</button>

<button onClick={onClose}>
Cancel
</button>

</div>

</div>

);

}

export default EditProfile;