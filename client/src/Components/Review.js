import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function Review({ currentUser, band, reviews }) {
    // let navigate = useNavigate();

    const [errors, setErrors] = useState([]);
    const [newReview, setNewReview] = useState({reviews: []})
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })
    // const [allReviews, setAllReviews] = useState({reviews: []})

    // const thisBand=band.id

    // useEffect(() => {
    //     fetch(`/bands/${thisBand}`)
    //         .then(r => r.json())
    //         .then(data => setAllReviews(data.reviews))
    //     }, [])



    function manageFormData(event) {
        const key = event.target.name;
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }


    function handleSubmit() {

        const user_id = currentUser.id
        const band_id = band.id
        const title = formData.title
        const description = formData.description
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, user_id, band_id }),
            
        }).then((r) => {
            r.json().then((rev) => setNewReview(rev));

        })
    }
    //         if (r.ok) {
    //         } else {
    //             r.json().then((err) => setErrors(err.errors));
    //             alert("Must be logged in for this feature")
    //         }
    //     });
    // }

    return (
        <div>
            <div>

            {reviews.map(rev => {
                return (
                    <ReviewCard
                        key={rev.id}
                        title={rev.title}
                        description={rev.description}
                    />
                )
            })
            } 
    
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