import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import ListCategory from "./List"

export default function Category() {
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({})
  const [category, setCategory] = useState([])

  useEffect(() => {
    const checkToken = localStorage.getItem("Token")
    if (!checkToken) {
      history.replace("/login")
    } else {
      history.replace("/")
    }
  }, [history])

  // show data from backend.
  useEffect(() => {
    axios
      .get("http://localhost:7000/category/show")
      .then((res) => {
        setCategory(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // create category.
  const onSubmit = (data) => {
    axios
      .post("http://localhost:7000/category/create", data)
      .then((res) => {
        setCategory([...category, res.data])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    // form.
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Category
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="name"
            ref={register({ required: true })}
          />
        </div>
        <p>{errors.name && "This field is required"}</p>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      <div>
        <ListCategory item={category} />
      </div>
    </div>
  )
}
