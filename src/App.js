// Package Dependencies
import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Button, Card, CardImg } from 'reactstrap'

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
       <div>
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
          </Container>
          <div className="container-fluid">
             <Row style={{marginTop: "2em"}}>
                <Col lg="12" xs="12" sm="12" md="12" style={{background: "#c4a17e1f", height: "40em"}}
                     className="about_us">
                   <Row style={{marginBottom: "4em"}}>
                      <Col lg={{size:1}} style={{marginRight: "5.5em"}}/>
                      <Col>
                         <img src={underline2} className="underline_about"/>
                         <h2>Our Programs</h2>
                      </Col>
                   </Row>
                   <Row style={{marginTop: "2em", borderTop: "4px solid #e8d5bc"}}>
                      <Col lg={{size: 1}} style={{marginLeft: "3em"}}/>
                      <Col style={{position: "inherit"}}>
                         <Row>
                            <Col lg={{size: 1, offset: 1}} className="dot-col">
                               <div className="blue">
                                  <div className="white">
                                     <div className="red"></div>
                                  </div>
                               </div>
                               <span style={{fontWeight: 600}} className="dot-title">
                                  GYANMUDRA
                               </span>
                            </Col>
                            <Col lg={{size: 1, offset: 3}} className="dot-col">
                               <div className="blue">
                                  <div className="white">
                                     <div className="red"></div>
                                  </div>
                               </div>
                               <span className="dot-title">
                                  KALAKRITI
                               </span>
                            </Col>
                            <Col lg={{size: 1, offset: 5}} className="dot-col">
                               <div className="blue">
                                  <div className="white">
                                     <div className="red"></div>
                                  </div>
                               </div>
                               <span className="dot-title">
                                  NAITIKTA
                               </span>
                            </Col>
                            <Col lg={{size: 1, offset: 7}} className="dot-col">
                               <div className="blue">
                                  <div className="white">
                                     <div className="red"></div>
                                  </div>
                               </div>
                               <span className="dot-title">
                                  ALFAZON KI JUGALBANDI
                               </span>
                            </Col>
                         </Row>
                      </Col>
                   </Row>
                   <Row style={{marginTop: "10em"}}>
                      <Container>
                         <Row>
                            <Col lg="1"/>
                            <Col lg={{size: 3, offset: 1}} md={{size: 4, offset: 1}}>
                               <Card className="text-center" style={{width: "25em"}}>
                                  <CardImg
                                     src="http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder.png"
                                     alt="Card image cap"/>
                               </Card>
                            </Col>
                            <Col lg={{size: 4, offset: 2}} md={{size: 4, offset: 2}}>
                               <Row style={{position: "relative", top: "25%"}}>
                                  <Col>
                                     <h3>GYANMUDRA</h3>
                                  </Col>
                               </Row>
                               <Row style={{position: "relative", top: "25%"}}>
                                  <Col>
                                     <p style={{fontSize: "18px"}}>
                                        It refers to the logical reasoning and language
                                        sessions organized every weekend with an aim to
                                        develop critical thinking skills, problem solving
                                        attitude and decision-making ability in children.
                                     </p>
                                  </Col>
                               </Row>
                            </Col>
                         </Row>
                      </Container>
                   </Row>
                </Col>
             </Row>
          </div>
          <Container>
             <Row style={{marginTop: "2em"}}>
               <Col lg={{ size: 10, offset: 1 }} xs="12" sm="12" md={{ size: 10, offset: 1 }}
                    className="about_us">
                 <Row>
                   <Col>
                     <img src={underline2} className="underline_about"/>
                     <h2>Our Initiatives</h2>
                   </Col>
                 </Row>
                 <Row style={{margin: "30px -15px 30px -15px"}}>
                   <Col lg="2">
                   </Col>
                   <Col lg="4">
                     <Card className="text-center">
                     <div className="prog_thumb_wrap">
                       <h3>GYANMUDRA</h3>
                     </div>
                     <CardImg top src="http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png"
                       alt="Card image cap" />
                     </Card>
                   </Col>
                   <Col lg="4">
                     <Card>
                     <CardImg top src="http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png"
                       alt="Card image cap" />
                     </Card>
                   </Col>
                   <Col lg="2"></Col>
                 </Row>
                 <Row>
                   <Col lg="2">
                   </Col>
                   <Col lg="4">
                     <Card>
                     <CardImg top src="http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png"
                       alt="Card image cap" />
                     </Card>
                   </Col>
                   <Col lg="4">
                     <Card>
                     <CardImg top src="http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png"
                       alt="Card image cap" />
                     </Card>
                   </Col>
                   <Col lg="2"></Col>
                 </Row>
               </Col>
             </Row>
             <Row style={{height: "30em", background: "#cccccc38", marginTop: "4em"}}>
                 <Col>
                 </Col>
             </Row>
          </Container>
       </div>
    );
  }
}

export default App;
