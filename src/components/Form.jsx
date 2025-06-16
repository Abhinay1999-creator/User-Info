import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { createUser } from '../features/userDetailSlice';
import { Modal } from './Modal';

export const Form = () => {

    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        dispatch(createUser(user))
        navigate("/read")
    }


    return (
        <>
   
            <form className="w-50 mx-auto my-5" on onSubmit={handleSubmit}>
            <h2>Enter The Details</h2>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name='name' className="form-control" onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" onChange={getUserData} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="text" name='age' className="form-control" onChange={getUserData} />
                </div>
                <div class="form-check">
                    <input class="form-check-input" name='gender' type="radio" value="Male" onChange={getUserData} checked/>
                    <label class="form-check-label" >
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" name='gender' type="radio" value="Female" onChange={getUserData} />
                    <label class="form-check-label" >
                        Female
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
