// import React, {Component} from 'react'
// import { withRouter } from "react-router";

// const backendUrl = "https://travel-junkie-backend.herokuapp.com/api"


// class Login extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username : '',
//             password: ''
//         };
//     }

//     handleInputChange = (event) => {
//         const { value, name } = event.target;
//         this.setState({
//             [name]: value
//         });
//     }
//     onSubmit = (event) => {
//         event.preventDefault();
//         fetch(`${backendUrl}/auth/login`, {
//           method: 'POST',
//           body: JSON.stringify(this.state),
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         })
//         .then(res => {
//           if (res.status === 200) {
//             this.props.history.push("/")
//           } else {
//             const error = new Error(res.error);
//             throw error;
//           }
//         })
//         .catch(err => {
//           console.error(err);
//           alert('Error logging in please try again');
//         });
//       }
      
//     render() {

//         return (
//         <div>
//         <form onSubmit={this.onSubmit}>
//         <h1>Login Below!</h1>
//         <input
//           type="username"
//           name="username"
//           placeholder="Enter username"
//           value={this.state.username}
//           onChange={this.handleInputChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//           required
//         />
//        <input type="submit" value="Submit"/>
//       </form>
//         </div>
//         )
//     }
// }

// export default withRouter(Login)

import React from "react";

// reactstrap components
import {
  Button,
  Card,
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

function SectionLogin() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Username</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Username" type="username" />
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Log in
                  </Button>
                </Form>
                
              </Card>
              <div className="col text-center">
                <Button
                  className="btn-round"
                  outline
                  color="neutral"
                  href="/signup"
                  size="lg"
                  target="_blank"
                >
                  Already a Travel Junkie
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;