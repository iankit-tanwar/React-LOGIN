import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function Login() {

    const [email, setEmail] = useState('admin1@gmail.com');
    const [password, setPassword] = useState('fddfgd');
    let submit = () => {
        console.log('submitted');
    }
    let data ={
        'email': email,
        "password": password

    }

    fetch('http://65.109.113.62:3000/api/auth/login',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    }
    
    )
    .then((res)=>{
        if(res.status===404){
            alert('invalid credentials')

        }else{
            return res.json();
        }
       
    })
    .then((data)=>{


        try {
            console.log('data',data);

            if(data.code===200){
                console.log('token',data.data.token);

                window.localStorage.setItem('userData',JSON.stringify(data.data));
                window.localStorage.setItem('role',data.data.role);
                if(data.data.data === 'admin'){
                    window.location.href='/admindashboard';
                }
                if(data.data.data === 'enduser'){
                    window.location.href='/enduserdashboard';
                }
                if(data.data.data === 'reseller'){
                    window.location.href='/resellerdashboard';
                }
                if(data.data.data === 'accountmanager'){
                    window.location.href='/accountmanagerdashboard';
                }
            }else{
                alert("invalid credantials")
            }
        } catch (error) {
           // alert("invalid credantials")
        }
       
    })
    .catch((err)=>{
        console.log('err',err)
    });



    return (
        <main className=''>
            <Form className='col-6 offset-3 mt-5 ' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' value={email} placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' value={password} placeholder="Password" />
                </Form.Group>

                <Button variant="primary" onClick={submit} type="button">
                    Submit
                </Button>
            </Form>


        </main>
    )
}
