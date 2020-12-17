import React, {Component} from 'react'

class Signup extends Component {

    render() {
        return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={this.props.addUser}>
                Name: <input type="text" name="name" placeholder="Indiana Jones"/>
                Username: <input type="text" name="username" placeholder="tomb-raider"/>
                Password: <input type="text" name="password" placeholder="********"/>
                <input type="submit" value="Create User"></input>
            </form>
        </div>
        )
    }
}

export default Signup