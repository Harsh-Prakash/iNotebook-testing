import React, {  useState, } from 'react'
import {  useNavigate, } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"",password:""})
    let navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:80/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password}),
        });
        const json =await response.json();
        console.log(json)
        if(json.success)
        {
            localStorage.setItem('token',json.authToken)
            setCredentials({email:"",password:""})
            navigate("/")
            props.showAlert("Login Successful","success")
        }
        else
        {
            props.showAlert("Invalid Details","danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input value={credentials.email} type="email" class="form-control" id="email" name='email' aria-describedby="emailHelp"  onChange={onChange}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input value={credentials.password} type="password" class="form-control" id="password" name='password' onChange={onChange} />
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
