import React, {Component} from "react";


class AllUsers extends Component {
 
  render() {

      const allUsers = this.props.users.map(user => {
          return (
              <li key={user.id}></li>
          )
      })

      return (
          <div>
              <h1> All Users</h1>
              {allUsers}
          </div>
      )
  }
}

export default AllUsers