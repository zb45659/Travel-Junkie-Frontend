import React, {Component} from "react";
import { Link } from "react-router-dom";

class AllGuides extends Component {
 
  render() {

      const allGuides = this.props.guides.map(guide => {
          return (
              <li key={guide.id}>
                  <Link to={`/guides/${guide.id}`}>{guide.name}</Link>
                  <button 
                  key={guide.id} 
                  id={guide.id}
                  onClick={this.props.deleteGuide}
                  >Delete</button>
              </li>
          )
      })

      return (
          <div>
              <h1> All Guides</h1>
              <form onSubmit={this.props.addGuide}>
                  <input type="text" name="name"/>
                  <input type="submit" value="Add Guide"/>
              </form>
              {allGuides}
          </div>
      )
  }
}

export default AllGuides