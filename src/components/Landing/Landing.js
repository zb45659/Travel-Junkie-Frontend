import React from "react";
import "../../assets/css/paper-kit.css"
import {Route,Link,Switch} from 'react-router-dom'
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


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

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
        <ExamplesNavbar/>
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
                    <h4 className="info-title">Browse Travel Guides</h4>
                    <p className="description">
                      Take some time to experience the guides guides already created!
                    </p>
                    <Link to="/guides">
                    <Button className="btn-link" color="info" href="/guides">
                      Start Exploring
                    </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Guide</h4>
                    <p>
                      Ready to plan your next vacation or weekend get-away? Use Travel Junkie to store all your must see spots in one palce!
                    </p>
                    <Link to="/guides">
                    <Button className="btn-link" color="info" href="/guides">
                      Create Guide
                    </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Google Maps</h4>
                    <p>
                      Need some help finding the location of your next big trip? Take some time exploring Google Maps!
                    </p>
                    <Link to="/map">
                    <Button className="btn-link" color="info" href="/map">
                      Get Mapping
                    </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New User</h4>
                    <p>
                      Create a Profile so you can store all your Travel Junkie Guides and any others that interest you!
                    </p>
                    <Link to="/signup">
                    <Button className="btn-link" color="info" href="/signup">
                      Sign Up
                    </Button>
                    </Link>
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
                <h2 className="text-center">Issues or Comments?</h2>
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
                    placeholder="Tell us your issues or about how much you enjoy the site :)"
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
        <DemoFooter />
    </>
  );
}

export default LandingPage;