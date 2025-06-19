import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "../CustomModal.css";

const Modal = ({ id, setShow, show }) => {

    const allusers = useSelector((state) => state.app.users)

    const singleUser = allusers.filter((element) => element.id === id)

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => setShow(false)}>Close</button>
                <h2>{singleUser[0].name}</h2>
                <h3>{singleUser[0].email}</h3>
                <h4>{singleUser[0].age}</h4>
                <p>{singleUser[0].gender}</p>
            </div>
        </div>
    );
};

export default Modal;