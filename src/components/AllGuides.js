import React, {Component} from "react";
import { Link } from "react-router-dom";


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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

import DemoFooter from "components/Footers/DemoFooter.js";

class AllGuides extends Component {
 
  render() {

    const allGuides = this.props.guides.map(guide => {
        return (
            <Col md="3">
                    <div className="info" key={guide.id}>
                      <div className="icon icon-info">
                        <i className="nc-icon nc-album-2" />
                      </div>
                      <div className="description">
                        <h4 className="info-title">{guide.name}</h4>
                        
                        <Link to={`/guides/${guide.id}`}>
                        <Button className="btn-link" color="info" href={`/guides/${guide.id}`}>
                          Go to guide
                        </Button>
                        </Link>
                        <Button 
                        key={guide.id} 
                        id={guide.id}
                        onClick={this.props.deleteGuide}
                        >Delete
                        </Button>
                      </div>
                    </div>
                  </Col>
                )
            })
      return (
        // <ExamplesNavbar />
        <div className="main">
          <div className="section text-center">
            <Container>
            <Row>
            <Col md="3">
                <Link to="/">Go back to Home</Link>
                </Col> 
            <Col md="3">
            <h1> Add Guide</h1>
            <form onSubmit={this.props.addGuide}>
                   <input type="text" name="name"/>
                   <input type="submit" value="Add Guide"/>
            </form>
           </Col>
           <Col md="3">
            <h1> All Guides</h1>
                {allGuides} 
            </Col>
              </Row>
            </Container>
          </div>
          </div>
        // <DemoFooter />
      )
  }
}

export default AllGuides