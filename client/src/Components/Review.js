import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function Review({ currentUser, band, reviews }) {
    // let navigate = useNavigate();
    // const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState([]);
    const [newReview, setNewReview] = useState({})
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })
    const [allReviews, setAllReviews] = useState([])

    const thisBand=band.id

    useEffect(() => {
        fetch(`/api/bands/${band.id}`)
        // setIsLoading(true)
            .then(r => r.json())
            .then(data => setAllReviews(data.reviews))
            // .then(renderBand)
            // setIsLoading(false)
        }, [])



        
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
    
    
        
        // setAllReviews(band.reviews)
    
    // console.log(allReviews)

    // setAllReviews(band.reviews)

    console.log(allReviews)


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
        fetch("/api/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, user_id, band_id }),

        }).then((r) => {
            if (r.ok) {
                r.json().then((rev) => setNewReview(rev));
            } else {
                r.json().then((err) => setErrors(err.errors));
                alert("Must be logged in for this feature")
            }
        });
    }



    //render review card for each review so that it populates accordingly


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