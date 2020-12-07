import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  let history = useHistory()

  useEffect(() => {
    const checkToken = localStorage.getItem("Token")

    if (!checkToken) {
      history.replace("/login")
    }
  }, [history])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Cafe
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Add Category <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addingFoodDrink">
              Create
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Food&Drink">
              Show
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
