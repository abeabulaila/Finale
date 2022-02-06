import React from "react";
import { useState } from "react";
function Review() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`
        Title: ${title}
        Description: ${description}
      `);

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Leave a Review!</h1>

            <label>
                Title:
                <input
                    name="title"
                    type="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required />
            </label>
<br></br>
            <label>
                Description:
                <input
                    name="description"
                    type="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required />
            </label>
            <button>Submit</button>
        </form>
    );
}


export default Review