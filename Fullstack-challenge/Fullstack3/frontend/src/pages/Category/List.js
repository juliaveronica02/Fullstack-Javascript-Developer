import React, { useState, useEffect } from "react"

const ListCategory = (props) => {
  const { item } = props
  const [category, setCategory] = useState(item)

  useEffect(() => {
    setCategory(item)
  }, [item])

  // show the data after create.
  const mapData = category.map((data) => {
    return (
      <li key={data.id} className="list-group-item">
        {data.name}
      </li>
    )
  })

  return (
    <div className="pt-3">
      <ul className="list-group">{mapData}</ul>
    </div>
  )
}

export default ListCategory
