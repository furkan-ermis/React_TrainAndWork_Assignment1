import React from "react";
import { IoMdHeart } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { Button, Collapse, Nav, Navbar, NavbarToggler } from "reactstrap";
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
          {" "}
          <a className="logo" href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="d-flex justify-content-end w-100" navbar>
              {this.props.isFormOpen ? (
                <Button
                  onClick={() => this.props.addMovieForm()}
                  color="danger"
                  className="btn-main"
                  outline
                  style={{ display: "inline", margin: "1px" }}
                >
                  Close Form &nbsp; <TfiClose />
                </Button>
              ) : (
                <Button
                  onClick={() => this.props.addMovieForm()}
                  color="secondary"
                  className="btn-main"
                  outline
                  style={{ display: "inline", margin: "1px" }}
                >
                  Add Movies
                </Button>
              )}
              &nbsp; &nbsp;
              <Button
                onClick={() => this.props.getFavs()}
                color="success"
                className="btn-main"
                outline
                style={{ display: "inline", margin: "1px" }}
              >
                Favorite Movies &nbsp; &nbsp;
                <IoMdHeart size="18" />
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
