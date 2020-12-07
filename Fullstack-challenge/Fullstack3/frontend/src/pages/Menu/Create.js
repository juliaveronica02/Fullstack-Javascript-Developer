import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { useForm } from "react-hook-form"

export default function Food() {
  const history = useHistory()
  const [category, setCategory] = useState([])
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      name: "",
      detail: "",
      price: 0,
      category: "",
    },
  })

  useEffect(() => {
    const checkToken = localStorage.getItem("Token")
    if (!checkToken) {
      history.replace("/login")
    } else {
      // show category.
      axios
        .get("http://localhost:7000/category/show")
        .then((res) => {
          setCategory(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [history])
  // create menu.
  const onSubmit = (data, e) => {
    axios.post("http://localhost:7000/menu/create", data)
    e.target.reset()
  }

  const mapCategory = category.map((data) => {
    return (
      <option key={data._id} value={data._id}>
        {data.name}
      </option>
    )
  })

  return (
    <div>
      <h3>Adding Food & Drink</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Name
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
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Detail
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="detail"
            ref={register({ required: true })}
          />
        </div>
        <p>{errors.detail && "This field is required"}</p>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Price
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="price"
            ref={register({ required: true })}
          />
        </div>
        <p>{errors.price && "This field is required"}</p>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Category
            </label>
          </div>
          <select
            name="category"
            className="custom-select"
            id="inputGroupSelect01"
            ref={register({ required: true })}
            defaultValue=""
          >
            {mapCategory}
          </select>
        </div>
        <p>{errors.category && "This field is required"}</p>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  )
}
