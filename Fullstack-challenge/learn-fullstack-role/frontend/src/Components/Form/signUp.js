import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../action/auth";
import PropTypes from "prop-types";
import classnames from "classnames";

class signUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
      role: "user",
      errors: {},
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
  onSubmit = (e) => {
    // e.preventDefault();
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
      role: this.state.role
    };
    this.props.registerUser(newUser, this.props.history);
    console.log("new user",newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="App-login">
        <main>
          <center>
            <div className="container">
              <div
                className="z-depth-1  lighten-4"
                style={{
                  display: "inline-block",
                  padding: "32px 48px 0px 48px",
                  border: "1px solid #EEE",
                }}
              >
                <img
                  // src={Logo}
                  className="responsive-img"
                  style={{
                    width: "150px",
                    margin: 20,
                  }}
                  alt="..."
                />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      onChange={this.onChange}
                      value={this.state.username}
                      error={errors.username}
                      placeholder="username"
                      id="username"
                      size="25"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      placeholder=" Email Address"
                      id="email"
                      size="25"
                      type="email"
                      className={classnames("form-control", {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={this.onChange}
                      value={this.state.phone}
                      error={errors.phone}
                      placeholder=" Phone Number"
                      id="phone"
                      size="15"
                      type="number"
                      className={classnames("form-control", {})}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      placeholder=" Password"
                      id="password"
                      size="25"
                      type="password"
                      className={classnames("form-control", {
                        invalid: errors.password || errors.passwordincorrect,
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={this.onChange}
                      value={this.state.passwordConfirm}
                      error={errors.passwordConfirm}
                      placeholder=" Confirm Password"
                      id="passwordConfirm"
                      size="25"
                      type="password"
                      className={classnames("form-control", {
                        invalid: errors.passwordConfirm || errors.passwordincorrect,
                      })}
                    />
                  </div>
                  <div
                    style={{
                      margin: 20,
                    }}
                    className="text-center pt-4"
                  >
                    <button type="submit" className="btn btn-outline-dark">
                      Signup
                    </button>
                  </div>
                  {/* <div className="text-center pt-2">
                                            <a className="btn btn-link text-primary" href="#">Forgot Your Password?</a>
                                        </div> */}
                </form>
              </div>
            </div>
          </center>
        </main>
      </div>
        );
      }
}
signUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors });
export default connect(mapStateToProps, { registerUser })(withRouter(signUp));