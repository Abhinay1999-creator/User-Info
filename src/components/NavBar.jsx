import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { searchUser } from "../features/userDetailSlice";
import { Link } from 'react-router-dom'

export const NavBar = () => {

    const dispatch = useDispatch();

    const allUsers = useSelector((state) => state.app.users);

    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        dispatch(searchUser(searchData));
    }, [searchData]);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">RTK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="">Create Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/read" className="nav-link" href="">All Posts ({allUsers.length})</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchData}
                                onChange={(e) => setSearchData(e.target.value)} />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
