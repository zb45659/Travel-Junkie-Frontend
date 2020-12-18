import React from "react";
import "../../src/assets/css/paper-kit.css"

// reactstrap components
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
import ExamplesNavbar from "./Navbars/ExamplesNavbar.js";

import DemoFooter from "./Footers/DemoFooter";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <br />
      <br />
      <br />
      <div className="main">
        <div className="section text-center">
          <Container>
            <br />
            <br />
            <Row className="first-row">
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <br />
        <br />
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <br />
      <br />
      <DemoFooter />
    </>
  );
}

export default LandingPage;

// import './App.css';
// import React, {Component} from 'react'
// import axios from 'axios'
// import {Route,Link,Switch} from 'react-router-dom'
// import { 
//   UncontrolledCollapse,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col} from 'reactstrap';

// import AllGuides from "./AllGuides.js";
// import GuideDetail from "./GuideDetail.js";
// import Profile from "./users/Profile"
// import Signup from "./users/Signup"
// import Login from "./users/Login"
// import MapContainer from "./map/Map"
// import SearchLocationInput from "./map/SearchLocationInput"

// const backendUrl = "http://localhost:3000/api"

// class App extends Component {
//   constructor() {
//     super()
//     this.toggleOpenState = this.toggleOpenState.bind(this)
//     this.state = {
//       guide: [],
//       users: [],
//       places: [],
//       isOpen: false
//     }
//   }
//   toggleOpenState() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     })
//   }

//   componentDidMount = () => {
//     this.getGuides()
//     this.getUsers()
//   }

//   getGuides = async () => {
//     const response = await axios(`${backendUrl}/guides`)

//     this.setState({
//       guide: response.data.allGuides
//     })
//   }

//   addGuide = async (event) => {
//     event.preventDefault()

//     await axios.post(`${backendUrl}/guides`,{
//       name: event.target.name.value
//     })

//     this.getGuides()
//   }

//   addReview = async (event) => {
//     event.preventDefault()

//     let guideId = event.target.guideId.value

//     await axios.post(`${backendUrl}/guides/${guideId}/newreview`,{
//       title: event.target.title.value,
//       lat: 0,
//       lng: 0,
//       guideId: guideId
//     })

//     this.getGuides()
//   }

//   updateGuide = async(event) => {
//     event.preventDefault()

//     let guideId = event.target.guideId.value
    
//     await axios.put(`${backendUrl}/guides/${guideId}`, {
//       name:event.target.name.value,
//       guideId: guideId
//     })

//     this.getGuides()
//   }

//   deleteGuide = async(event) => {
//     event.preventDefault()

//     let guideId = event.target.id

//     await axios.delete(`${backendUrl}/guides/${guideId}`)

//     this.getGuides()
//   }

//   getUsers = async (event) => {
    

//     // let userId = event.target.id

//     // let userId = allUsers.find(user => {
//     //   user.id == res.match.params.id
//     const response = await axios(`${backendUrl}/users`)

//     this.setState({
//       users: response.data.users
//     })
//   }

//   addUser = async (event) => {
//     event.preventDefault()

//     await axios.post(`${backendUrl}/auth/signup`,{
//       name: event.target.name.value,
//       username: event.target.username.value,
//       password: event.target.password.value
//     })

//     this.getUsers()
//   }

//   updateUsers = async(event) => {
//     event.preventDefault()

//     let userId = event.target.userId.value
    
//     await axios.put(`${backendUrl}/users/${userId}`, {
//       name:event.target.name.value,
//       username: event.target.username.value,
//       password: event.target.password.value
//     })

//     this.getUsers()
//   }

//   deleteUsers = async(event) => {
//     event.preventDefault()

//     let userId = event.target.id

//     await axios.delete(`${backendUrl}/users/${userId}`)

//     this.getUsers()
//   }
//   render() {
//   return (
//     <div className="App">
//       {/* <nav>
//         <Link to="/">All Guides</Link>
//         <Link to="/signup">Sign Up</Link>
//         <Link to="/login">Log In</Link>
//         <ul key={this.userId}>
//           <Link to={`/users/profile/${this.userId}`}>Profile</Link>
//         </ul>
//       </nav> */}
//       <main>
//         <Switch>
//         <Route
//           exact path="/"
//           component={() => <AllGuides 
//             guides={this.state.guide}
//             addGuide={this.addGuide}
//             deleteGuide={this.deleteGuide}
            
//             />}
//             />
//         <Route
//           path="/guides/:id"
//           component={(routerProps)=> <GuideDetail 
//             {...routerProps}
//             guides={this.state.guide}
//             addReview={this.addReview}
//             updateGuide={this.updateGuide}
//             />}
//             />
//         <Route
//           path="/users/profile/:id"
//           component={(routerProps) => <Profile 
//             {...routerProps}
//             users={this.state.users}
//             deleteUser={this.deleteUsers}
//             />}
//             />
//         <Route
//           path="/signup"
//           component={() => <Signup 
//             addUser ={this.addUser}
            
//             />}
//         />
//         <Route
//           path="/login"
//           component={() => <Login 
//             getUsers = {this.getUsers}
//             history = {this.history}
//             />}
//         />
//         {/* <Route exact path='/map' render={(props) =>
//         <MapContainer {...props} {...this.state}/>}/> */}
//         <Route exact path='/search' render={(props) =>
//         <SearchLocationInput {...props} {...this.state}/>}/>
//         </Switch>
//       </main>
//     </div>
//   );
// }
// }


// export default App;