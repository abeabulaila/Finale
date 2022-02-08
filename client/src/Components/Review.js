import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function Review({ currentUser, band }) {
    // let navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [review, setReview] = useState({})
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })

    const [allReviews, setAllReviews] = useState([{}])


    useEffect(() => {
        fetch(`/bands/${band}`)
            .then(r => r.json())
            .then(data => setAllReviews(data.reviews))


    }, [])




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
            body: JSON.stringify({ title, description, user_id, band_id }),

        }).then((r) => {
            if (r.ok) {
                r.json().then((rev) => setReview(rev));
            } else {
                r.json().then((err) => setErrors(err.errors));
                alert("Must be logged in for this feature")
            }
        });
    }
    console.log(allReviews)



    //render review card for each review so that it populates accordingly


    return (
        <div>
            <div>
                {/* {allReviews.map(rev => {
                    return (
                        <ReviewCard
                            title={rev.title}
                            description={rev.description}
                        />
                    )
                })
                } */}

            </div>
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