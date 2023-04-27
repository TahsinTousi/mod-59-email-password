import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {
    // const [email, setEmail] = useState('')
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        // setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
    }

    const handleSubmit = (event) => {
        // 1. prevent page refresh 
        event.preventDefault();
        setSuccess('');

        // 2.collect from data
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        // console.log(event.target.password.value);

        // VALIDATE:
        if(!/(?=.*[A-Z])/.test(password)){
            setError('please add at lst one uppercase');
            return;
        }
        else if(password.length){
            setError('please add at lst 6 chracters');
            return;
        }

        // CREATE USE IN FIREBASE
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('user has created successfully')
               
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message)
            })
    }

    return (
        <div className='w-50 mx-auto '>
            <h4>Register</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded ps-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Enter Your Email' required />
                <br />
                <input className='w-50 mb-4 rounded ps-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Pass' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'> {success}</p>
        </div>
    );
};

export default Register;