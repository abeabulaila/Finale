import React from "react";
import { useState, useEffect } from "react";
function ReviewCard({ title, description, currentUser, setCurrentUser}) {

    const [userData, setUserData] = useState({});
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    
    function manageFormData(event) {
        const key = event.target.name;
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    function handleSubmit() {
        const userCreds = { ...formData };
        fetch("/reviews", {
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
                        title: "",
                        description: ""
                    });
                });
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }

        });
    }

    //if currentUser.id ==== review.id 
    //then render the edit/delete buttons.
    //can only edit or delete YOUR post1


    return (
        <div>
            <div className="review-div">
                <div >
                    <h2 className="review-title"> {title} </h2>
                    <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 50, marginLeft: 30, marginBottom: "10px", marginTop: -10 }}>
                    </div>
                </div >
                <div >
                    <p className="review-text"> {description}</p>
                    {/* <div>
                        <button>Edit</button> <button>Delete</button>
                    </div>
                    <div className="edit-hide">
                    <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        name="title"
                        type="title"
                        value={formData.title}
                        onChange={manageFormData}
                        required />
                </label>
                <br></br>
                <label>
                    Description:
                    <input
                        name="description"
                        type="description"
                        value={formData.description}
                        onChange={manageFormData}
                        required />
                </label>
                <button>Submit</button>
            </form> */}

                    </div>
                </div>
            </div>
        // </div>
    )
}
export default ReviewCard