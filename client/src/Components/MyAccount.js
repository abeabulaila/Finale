import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

function MyAccount({setCurrentUser})  {
    let navigate = useNavigate();
const [userData, setUserData] = useState({});
const [formData, setFormData] = useState({
  bio: "",
});


useEffect(() => {
    fetch('/me')
        .then(r => r.json())
        .then(data => setUserData(data))
      }, [])


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit() {
        const userCreds = { ...formData };
        fetch("/patch", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user)
                    setFormData({
                        bio: "",
                    });
                });
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }

        });
    }

    function handleLogout() {
        fetch("/delete", { 
            method: 'DELETE'
        })
        navigate('/')
    }


    return (
        <div>
            <div className="logform">
                <h1 className="logform">My Account </h1>
            </div>
            <div>
                <h3 className="logform"> Hello {userData.username}! </h3>
                <h3 className="logform"> Bio: "{userData.bio}" </h3>
            </div>
            <div>
                {/* {display()} */}
            </div>
            <div className="logform">

            <form onSubmit={handleSubmit} className="input-form">
                    <label><strong>Change Biography: </strong>
                        <input
                            id="bio-input"
                            type='text'
                            name='bio'
                            value={formData.username}
                            onChange={handleChange}
                            />
                    </label>
                    </form>
                            </div>
            <div className="choice-button">
            <button onClick={handleSubmit} className="acc-button" > Change Bio </button>
                <button onClick={handleLogout}  className="acc-button" > Delete Account</button>
            </div>
        </div>
    )
}

export default MyAccount