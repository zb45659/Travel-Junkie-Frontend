import './App.css';
import React, {Component} from 'react'
import axios from 'axios'
import {Route,Link,Switch} from 'react-router-dom'
import AllGuides from "./AllGuides.js";
import GuideDetail from "./GuideDetail.js";

const backendUrl = "https://travel-junkie-backend.herokuapp.com/api"

class App extends Component {
  constructor() {
    super()

    this.state = {
      guide: []
    }
  }

  componentDidMount = () => {
    this.getGuides()
  }

  getGuides = async () => {
    const response = await axios(`${backendUrl}/guides`)

    this.setState({
      guide: response.data.allGuides
    })
  }

  addGuide = async (event) => {
    event.preventDefault()

    await axios.post(`${backendUrl}/guides`,{
      name: event.target.name.value
    })

    this.getGuides()
  }

  addReview = async (event) => {
    event.preventDefault()

    let guideId = event.target.guideId.value

    await axios.post(`${backendUrl}/guides/${guideId}/newreview`,{
      title: event.target.title.value,
      guideId: guideId
    })

    this.getGuides()
  }

  updateGuide = async(event) => {
    event.preventDefault()

    let guideId = event.target.guideId.value
    
    await axios.put(`${backendUrl}/guides/${guideId}`, {
      name:event.target.name.value,
      guideId: guideId
    })

    this.getGuides()
  }

  deleteGuide = async(event) => {
    event.preventDefault()

    let guideId = event.target.id

    await axios.delete(`${backendUrl}/guides/${guideId}`)

    this.getGuides()
  }
  render() {
  return (
    <div className="App">
      <nav>
        <Link to="/">All Guides</Link>
      </nav>

      <main>
        <Switch>
        <Route
          exact path="/"
          component={() => <AllGuides 
            guides={this.state.guide}
            addGuide={this.addGuide}
            deleteGuide={this.deleteGuide}
            
            />}
        />
        <Route
          path="/guides/:id"
          component={(routerProps)=> <GuideDetail 
            {...routerProps}
            guides={this.state.guide}
            addReview={this.addReview}
            updateGuide={this.updateGuide}
            />}
        />
        </Switch>
      </main>
    </div>
  );
}
}

export default App;