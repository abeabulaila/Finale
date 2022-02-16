function ReviewCard({ title, description }) {


    return (
        <div>
            <div className="review-div">
                <div>
                    <h2 className="review-title"> {title} </h2>
                    <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 50, marginLeft: 30, marginBottom: "10px", marginTop: -10 }}>
                    </div>
                </div>
                <div>
                    <p className="review-text"> "{description}"</p>
                </div>
            </div>
        </div>
    )
}
export default ReviewCard