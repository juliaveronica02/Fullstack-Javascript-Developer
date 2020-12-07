import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../action/auth";
import classnames from "classnames";
import "./style.css";
import LoadingSpinner from './Loading'
// import logo from "../../img/logo.svg";
import { Form } from "reactstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

class Register extends Component {
  // initialize User table list on database.
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
      role: "User",
      errors: {},
      loading: false
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to
    // dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  onChangePhone = (e) => {
    this.setState({
      [e.target.id]: e.target.value.replace(/\D/, ""),
    });
  };
  // event when press submit.
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({loading : true})
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
      role: this.state.role,
    };
    this.props.registerUser(newUser, this.props.history);
    console.log(newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="d-md-flex flex-row">
        <container className="SignIn header">
          <h1 className="display-3 font-weight-bold">
            Want to Buy Something Cheap?
          </h1>
          <h1>Take a Look Inside Here.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </container>
        <div className="logo">
        </div>
        <div className="form">
          <Form onSubmit={this.onSubmit}>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="10">
                  <p className="h5 text-center mb-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      onChange={this.onChange}
                      value={this.state.username}
                      error={errors.username}
                      id="username"
                      className={classnames("form-control wider", {
                        invalid: errors.username || errors.usernamenotfound,
                      })}
                    />
                    <MDBInput
                      label="Phone Number"
                      icon="phone"
                      group
                      type="text"
                      id="phone"
                      onChange={this.onChangePhone}
                      value={this.state.phone}
                      error={errors.phone}
                      className={classnames("form-control wider", {
                        invalid: errors.phone || errors.phonenotfound,
                      })}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      id="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      className={classnames("form-control wider", {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      id="password"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      className={classnames("form-control wider", {
                        invalid: errors.password || errors.passwordnotfound,
                      })}
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="exclamation-triangle"
                      group
                      type="password"
                      id="passwordConfirm"
                      onChange={this.onChange}
                      value={this.state.passwordConfirm}
                      error={errors.passwordConfirm}
                      className={classnames("form-control wider", {
                        invalid: errors.passwordConfirm || errors.passwordConfirm,
                      })}
                    />
                  </div>
                  {this.state.loading ? <LoadingSpinner /> : <></>}
                  <div className="text-center">
                    <MDBBtn color="primary" type="submit">Register</MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </Form>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors });
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
