import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/admin.css";

function AdminLogin() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async(e)=>{
e.preventDefault();

try{

const res = await axios.post("/api/admin/login",{
email,
password
});

if(res.data.success){

// store token
localStorage.setItem("token",res.data.token);

// redirect to dashboard
navigate("/admin/dashboard");

}else{
alert(res.data.message);
}

}catch(error){
console.log(error);
alert("Login failed");
}

};

return(

<div className="admin-login">

<form onSubmit={handleLogin} className="admin-login-form">

<h2>Admin Login</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">
Login
</button>

</form>

</div>

);

}

export default AdminLogin;