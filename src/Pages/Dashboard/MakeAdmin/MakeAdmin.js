import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email}

        fetch('http://localhost:5000/users/admin',{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount) {
                console.log(data);;
                setSuccess(true);
            }
        })

        e.preventDefault();
    }

    return (
        <div>
            <h3 className='my-4'>Make Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} className='form-control' placeholder='Enter Email' style={{margin:'0 auto',maxWidth:'500px'}} type="email" />
                <button className="btn btn-primary my-4" type='submit'>Make Admin</button>
            </form>
            {
                success && <div className="alert alert-info" role="alert">
                Made Admin Successfully!
            </div>
            }
        </div>
    );
};

export default MakeAdmin;