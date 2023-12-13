import React from "react";
import { IoMdHeart } from "react-icons/io";

import {
  Button,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import Logo from "../logo.png";
import "../site.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar className="header" dark expand="md">
          <NavbarBrand href="/">
            {" "}
            <img src={Logo} alt="Logo" style={{ width: "120px" }} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="d-flex justify-content-end w-100" navbar>
              <Button
                onClick={() => this.props.getFavs()}
                color="success"
                className="btn-main"
                outline
                style={{ display: "inline", margin: "1px" }}
              >
                Favoriler &nbsp; &nbsp;
                <IoMdHeart size="18" />
                {/* <FaRegHeart size="18" /> */}
              </Button>
              <NavItem>
                <NavLink href="#">
                  <Button color="warning" outline>
                    SignUp
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">
                  <Button color="secondary" className="btn-main" outline>
                    Login
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
