import React from "react"
import { Link, useRouteMatch } from "react-router-dom"

const Card = (props) => {
  const { data } = props
  const { url } = useRouteMatch()
  return (
    <div className="col-md-4 pb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.category.name}</h6>
          <p className="card-text">{data.detail}</p>
          <p className="card-text">Rp {data.price}</p>
          <button
            onClick={() => {
              props.clicked(data._id)
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
          &nbsp;
          <Link to={`${url}/update/${data.id}`} className="btn btn-primary">
            Update
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
