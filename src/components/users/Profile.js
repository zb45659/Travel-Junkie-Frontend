import React, {Component} from 'react'

class Profile extends Component {

    render() {
        const userDetail = this.props.guides.find(guide => {
            return guide.id == this.props.match.params.id
        })
        // console.log(guideDetail)

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

export default Profile