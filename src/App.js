// Package Dependencies
import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap'

// Custom dependencies
import './App.css';
import img from './assets/img/about_img.png'
import underline from './assets/img/underline.png'
import underline2 from './assets/img/7.png'


class App extends Component {

  constructor(props){
     super(props);
  }
  render() {
    return (
       <Container className="App">
          <Row style={{marginTop: "20px"}}>
             <Col lg="3"></Col>
             <Col lg="auto">
                <Nav>
                   <NavItem>
                      <NavLink href="#">
                         About
                      </NavLink>
                   </NavItem>
                   <NavItem>
                      <NavLink href="#">
                         Programs
                      </NavLink>
                   </NavItem>
                   <NavItem>
                      <NavLink href="#">
                         Initiatives
                      </NavLink>
                   </NavItem>
                   <NavItem>
                      <NavLink href="#">
                         Events
                      </NavLink>
                   </NavItem>
                   <NavItem>
                      <NavLink href="#">
                         News
                      </NavLink>
                   </NavItem>
                   <NavItem>
                      <NavLink href="#" className="highlighted">
                         Contact
                      </NavLink>
                   </NavItem>
                </Nav>
             </Col>
             <Col lg="3"></Col>
          </Row>
          <Row style={{marginTop: "4em"}}>
            <Col lg={{ size: 6, offset: 1 }} xs="12" sm="12" md={{ size: 5, offset: 1 }}>
                <Row>
                  <Col className="top_heading">
                    <img src={underline} className="stick-1"/>
                    <h1>LET'S EDUCATE</h1>
                    <img src={underline} className="stick-2" />
                    <h1> CHILDREN IN NEED</h1>
                  </Col>
                  <Col xs={{size: 10}} className="top_subheading">
                    <h2>
                      Learning today.
                    </h2>
                    <h2>
                      Leading tomorrow.
                    </h2>
                  </Col>
                  <Col xs={{ size: 6}} style={{marginTop: "2em"}}>
                    <Button color="success" className="donate-btn">
                      Donate Now
                    </Button>
                  </Col>
                </Row>
             </Col>
             <Col lg={{size:4}} className="about_img">
                <img src={img} className="top_img"/>
             </Col>
          </Row>
          <Row style={{marginTop: "0em"}}>
            <Col lg={{ size: 10, offset: 1 }} xs="12" sm="12" md={{ size: 10, offset: 1 }} className="about_us">
              <Row>
                <Col>
                  <img src={underline2} className="underline_about"/>
                  <h2>About Us</h2>
                </Col>
              </Row>
              <Row style={{paddingLeft: "10px"}}>
                <Col>
                  <p style={{color: "#696161", fontSize: "20px"}}>
                    Let’s Educate Children In Need (LECIN) is a youth led nonprofit organization started in 2015, with a motive to bring a change in society through the medium of informal education. The organization believes that informal learning space provides deep rooted learning experiences which will help in the holistic development of a child. We aim to create these learning spaces in communities and government schools with the help of our uniquely developed curriculum and pedagogy focusing on intrapersonal, interpersonal and thinking skills.
                  </p>
                </Col>
              </Row>
              <Row style={{marginTop: "2em"}}>
                <Col lg={{size: 4, offset: 2}}>
                  <Row>
                    <Col>
                      <h2>Vision</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p style={{color: "#696161"}}>
                        A world where children are equipped with social, emotional and cognitive skills along with an attitude to bring a positive change in themselves.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col lg={{size: 5}}>
                  <Row>
                    <Col>
                      <h2>Mission</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p style={{color: "#696161"}}>
                        LECIN is a youth led organization that works with children from marginalized communities and aim to develop their interpersonal, intrapersonal as well as thinking skills.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{marginTop: "2em"}}>
            <Col lg={{ size: 10, offset: 1 }} xs="12" sm="12" md={{ size: 10, offset: 1 }} className="about_us">
              <Row>
                <Col>
                  <img src={underline2} className="underline_about"/>
                  <h2>Our Programs</h2>
                </Col>
              </Row>
            </Col>
          </Row>
       </Container>
    );
  }
}

export default App;
