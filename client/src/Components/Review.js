import React from "react";
import { useState } from "react";
function Review() {
     const [formData, setFormData] = useState({
        title: "",
        content: ""
    })

    function manageFormData(event) {
        const key = event.target.name;
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }


    function handleSubmit(e) {
        e.preventDefault();

        

    }



    return (
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
                    name="content"
                    type="content"
                    value={formData.content}
                    onChange={manageFormData}
                    required />
            </label>
            <button>Submit</button>
        </form>
    );
}


export default Review