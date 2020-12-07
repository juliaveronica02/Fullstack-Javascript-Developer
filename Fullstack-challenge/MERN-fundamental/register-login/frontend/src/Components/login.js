import React from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"

const Login = () => {
  const history = useHistory()
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = (values) => {
    axios
      .post("http://localhost:8080/users/login", values)
      .then((res) => {
        if (res) {
          localStorage.setItem("Token", res.data.token)
          history.replace("/")
        }
      })
      .catch((err) => {
        console.log(err, " Wrong Password")
      })
  }

  return (
    <div className="container pb">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-3 offset-md-1">
                <label>Username :</label>
              </div>
              <div className="col-md-6">
                <input
                  type="username"
                  name="username"
                  className="form-control"
                  ref={register({ required: true })}
                />
              </div>
              <p>{errors.username && <span> Name is required </span>}</p>
            </div>
            <div className="row pt-4">
              <div className="col-md-3 offset-md-1">
                <label>password :</label>
              </div>
              <div className="col-md-6">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  ref={register({ required: true })}
                />
              </div>
              <p>{errors.password && <span> Password is required </span>}</p>
            </div>
            <div className="pt-4">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login