import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import axios from "axios"
import { useForm } from "react-hook-form"

export default function Food() {
  const history = useHistory()
  const { id } = useParams()
  const [menu, setMenu] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    const checkToken = localStorage.getItem("Token")
    if (!checkToken) {
      history.replace("/login")
    } else {
      // show by id.
      axios
        .get(`http://localhost:7000/menu/show/${id}`)
        .then((res) => {
          setMenu(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [history, id])

  useEffect(() => {
    // show category.
    axios
      .get("http://localhost:7000/category/show")
      .then((res) => {
        setCategory(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      name: menu.name,
      detail: menu.detail,
      price: menu.price,
      category: menu.category,
    },
  })

  const onSubmit = (data) => {
    // update by id.
    axios
      .put(`http://localhost:7000/menu/update/${id}`, data)
      .then((res) => {
        history.goBack()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const mapCategory = category.map((data) => {
    return (
      <option key={data._id} value={data._id}>
        {data.name}
      </option>
    )
  })

  return (
    // form.
    <div>
      <h3>Update Food & Drink</h3>
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
            defaultValue={menu.name}
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
            defaultValue={menu.detail}
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
            defaultValue={menu.price}
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
            className="custom-select"
            id="inputGroupSelect01"
            name="category"
            defaultValue={menu.category}
            ref={register({ required: true })}
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
