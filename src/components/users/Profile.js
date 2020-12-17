import React, {Component} from 'react'

class Profile extends Component {

    render() {
        const userDetail = this.props.users.find(user => {
            return user.id == this.props.match.params.id
        })
        // console.log(userDetail)

        return(
            <div>
                <h1> Welcome to profile</h1>
                {/* <h2>{userDetail.name}</h2> */}
                {/* <h5>Edit User</h5>
                <form onSubmit={this.props.updateUser}>
                    <input type="hidden" name="userId"
                    value={userDetail.id} ></input>
                    <input type="text" name="name">
                    </input>
                    <input type="submit" value="Edit User"></input>
                </form> */}
            </div>
        )
    }
}

export default Profile