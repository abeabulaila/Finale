import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
function Review({ currentUser, band, reviews, setCurrentUser }) {
    const [newReview, setNewReview] = useState({ reviews: [] })
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })

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

    return (
        <div>
            <div>

                {reviews.map(rev => {
                    return (
                        <ReviewCard
                            key={rev.id}
                            title={rev.title}
                            description={rev.description}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            band={band}
                        />
                    )
                })
                }

            </div> {currentUser ? <form className="show-review" onSubmit={handleSubmit}>

                <h1>Leave a Review!</h1>

                <label className="rev">
                    Title:
                    <input
                        name="title"
                        type="title"
                        value={formData.title}
                        onChange={manageFormData}
                        required />
                </label>
                <br></br>
                <label className="rev">
                    Body:
                    <input
                        name="description"
                        type="description"
                        value={formData.description}
                        onChange={manageFormData}
                        required />
                </label>
                <button className="sub">Submit</button>
            </form> : <div> </div>}
        </div>
    );
}


export default Review