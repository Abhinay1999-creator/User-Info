import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import { updateUser } from '../features/userDetailSlice'

export const Update = () => {

    const { id } = useParams(); // used to select the Id which user need to update

    const [updateData, setUpdateData] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { users, loading } = useSelector((state) => state.app);

    useEffect(() => {
        if (id) {
            const singleUser = users.filter((ele) => ele.id === id);
            setUpdateData(singleUser[0]);
        }
    }, [])

    
  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("updated data", updateData);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

    return (
        <>
            <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
                <h2>Update The Details</h2>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name='name' value={updateData && updateData.name} onChange={newData} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' value={updateData && updateData.email}  onChange={newData} className="form-control" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="text" name='age' value={updateData && updateData.age} onChange={newData} className="form-control" />
                </div>
                <div class="form-check">
                    <input class="form-check-input" name='gender' type="radio" onChange={newData} checked={updateData && updateData.gender === "Male"}
                        value="Male" />
                    <label class="form-check-label" >
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" name='gender' type="radio" onChange={newData} checked={updateData && updateData.gender === "Female"} value="Female" />
                    <label class="form-check-label" >
                        Female
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
