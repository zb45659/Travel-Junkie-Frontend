
import "../../src/assets/css/paper-kit.css"
import React, {Component} from 'react'
import axios from 'axios'
import {Route,Link,Switch} from 'react-router-dom'

import AllGuides from "./AllGuides.js";
import GuideDetail from "./GuideDetail.js";
import Profile from "./users/Profile"
import Signup from "./users/Signup"
import Login from "./users/Login"
import MapContainer from "./map/Map"
import SearchLocationInput from "./map/SearchLocationInput"
import Landing from "../components/Landing/Landing"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
const backendUrl = "http://localhost:3000/api"


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      guide: [],
      users: [],
      places: [],
    }
  }
  componentDidMount = () => {
    this.getGuides()
    this.getUsers()
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
      lat: 0,
      lng: 0,
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

  getUsers = async (event) => {
    const response = await axios(`${backendUrl}/users`)

    this.setState({
      users: response.data.users
    })
  }

  addUser = async (event) => {
    event.preventDefault()

    await axios.post(`${backendUrl}/auth/signup`,{
      name: event.target.name.value,
      username: event.target.username.value,
      password: event.target.password.value
    })

    this.getUsers()
  }

  updateUsers = async(event) => {
    event.preventDefault()

    let userId = event.target.userId.value
    
    await axios.put(`${backendUrl}/users/${userId}`, {
      name:event.target.name.value,
      username: event.target.username.value,
      password: event.target.password.value
    })

    this.getUsers()
  }

  deleteUsers = async(event) => {
    event.preventDefault()

    let userId = event.target.id

    await axios.delete(`${backendUrl}/users/${userId}`)

    this.getUsers()
  }

  render() {
  return (
    <div>
      <main>
        <Switch>
        <Route
          exact path="/"><Landing/>
          </Route>
          <Route
          exact path="/guides"
          component={() => <AllGuides 
            guides={this.state.guide}
            addGuide={this.addGuide}
            deleteGuide={this.deleteGuide}
            
            />}
            />
        <Route
          exact path="/guides/:id"
          component={(routerProps)=> <GuideDetail 
            {...routerProps}
            guides={this.state.guide}
            addReview={this.addReview}
            updateGuide={this.updateGuide}
            />}
            />
        <Route
          exact path="/users/profile/:id"
          component={(routerProps) => <Profile 
            {...routerProps}
            users={this.state.users}
            deleteUser={this.deleteUsers}
            />}
            />
        <Route
          exact path="/signup"
          component={() => <Signup 
            addUser ={this.addUser}
            
            />}
        />
        <Route
          exact path="/login"
          component={() => <Login 
            getUsers = {this.getUsers}
            history = {this.history}
            />}
        />
        <Route exact path='/map' render={(props) =>
        <MapContainer {...props} {...this.state}/>}/>
        <Route exact path='/search' render={(props) =>
        <SearchLocationInput {...props} {...this.state}/>}/>
        </Switch>
      </main>
    </div>
  )}
}

export default App;