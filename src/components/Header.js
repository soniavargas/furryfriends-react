import React, { Component} from 'react';
import {  Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }



    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-3 col-md-2">
                                <img src="/assets/images/furry-friends-noletters.png" alt="Furry Friends Logo"/>
                             </div>
                            <div className="col-md-6  " >
                                <h1>Furry Friends</h1>
                                <h2>Pet Concierge</h2>
                            </div>
                            <div className="col-md-3 mt-4 text-right">
                                <a role="button"className="btn btn-warning btn-lg book-border"  id="bookButton" > Book Now</a>
                                <br />
                                <a  role="button" className="btn btn-link" href="tel:+14075551425"><i class="fa fa-phone"></i> 1-407-555-1425</a>
                                <br />
                                <a  role="button" className="btn btn-link" href="mailto:furryfriends@gmail.com"><i class="fa fa-envelope-o"></i> furryfriends@gmail.com</a>
                           </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/furry-friends-noletters.png" height="60" width="60" alt="Furry Friends Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> Directory
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
 
            </React.Fragment>
        )
    }
}

export default Header;