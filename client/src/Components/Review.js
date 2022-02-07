import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Review({ currentUser, band }) {
    // let navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    // const [review, setReview] = useState([])
     const [formData, setFormData] = useState({
        title: "",
        description: ""
    })


    const thisUser = currentUser.id

    function manageFormData(event) {
        const key = event.target.name;
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }


    function handleSubmit(e) {
        e.preventDefault();

        const user_id = currentUser.id
        const band_id = band
        const title = formData.title
        const description = formData.description
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, description, user_id, band_id}),

         

        }).then((r) => {
            // if (r.ok) {
                r.json().then((rev) => console.log(rev));
            // } else {
            //     r.json().then((err) => setErrors(err.errors));
            //     alert("Must be logged in for this feature")
            // }
        });
    }


    // function showReview() {
    //     fetch('/reviews')
    //         .then(r => r.json())
    //         .then(data => setAllReviews(data))
    // }


    return (
        <div> 
                <form onSubmit={handleSubmit}>
                    <h1>Leave a Review!</h1>

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
                </form>

        </div>
    );
}


export default Review