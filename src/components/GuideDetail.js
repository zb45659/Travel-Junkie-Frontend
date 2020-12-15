import React, {Component} from 'react'

class GuideDetail extends Component {

    render() {
        const guideDetail = this.props.guides.find(guide => {
            return guide.id == this.props.match.params.id
        })
        // console.log(guideDetail)
        const guideReviews = guideDetail.Reviews.map(review => {
            return <li key={review.id}>{review.title}</li>
        })

        return(
            <div>
                <h2>{guideDetail.name}</h2>
                <h5>Edit Guide</h5>
                <form onSubmit={this.props.updateGuide}>
                    <input type="hidden" name="guideId"
                    value={guideDetail.id} ></input>
                    <input type="text" name="name">
                    </input>
                    <input type="submit" value="Edit Guide"></input>
                </form>
                <h5> Add a new review</h5>
                <form onSubmit={this.props.addReview}>
                    <input type="hidden" name="guideId"
                    value={guideDetail.id} ></input>
                    <input type="text" name="title"></input>
                    <input type="submit" value="Add Review"></input>
                </form> 
                <ul>{guideReviews}</ul>
            </div>
        )
    }
}

export default GuideDetail