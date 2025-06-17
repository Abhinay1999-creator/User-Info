import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUser } from '../features/userDetailSlice';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { deleteUser } from '../features/userDetailSlice';

export const Read = () => {

    const dispatch = useDispatch();
    const { users, loading,searchData } = useSelector((state) => state.app)

    const [id, setId] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(showUser());
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (

        <>
            <div>
                {show && <Modal id={id} show={show} setShow={setShow} />}
                {
                    users &&
                    users
                        .filter((ele) => {
                            if (searchData.length === 0) {
                                return ele;
                            } else {
                                return ele.name
                                    .toLowerCase()
                                    .includes(searchData.toLowerCase());
                            }
                        }).map((element) => (
                            <div key={element.id} className="card w-50 mx-auto my-5">
                                <div className="card-body mx-auto">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">{element.email}</p>
                                    {/* <p className="card-text">{element.age}</p> */}
                                    <p className="card-text">{element.gender}</p>
                                    <button className="btn btn-primary mx-2" data-toggle="modal" onClick={() => [setId(element.id), setShow(true)]}>View</button>
                                    <Link to={`/edit/${element.id}`} className="btn btn-primary mx-2">Update</Link>
                                    <Link className="btn btn-primary mx-2" onClick={() => dispatch(deleteUser(element.id))}>Delete</Link>
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
    )
}
