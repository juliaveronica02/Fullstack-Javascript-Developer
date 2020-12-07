import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import Card from "../../components/Card/Card"

const FoodDrink = () => {
  const history = useHistory()
  const [foodAndDrink, setfoodAndDrink] = useState([])

  useEffect(() => {
    const checkToken = localStorage.getItem("Token")

    if (!checkToken) {
      history.replace("/login")
    } else {
      // show menu.
      axios
        .get("http://localhost:7000/menu/show")
        .then((res) => {
          setfoodAndDrink(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [history])

  const remove = (id) => {
    // delete menu by id.
    axios
      .delete(`http://localhost:7000/menu/delete/${id}`)
      .then((res) => {
        const newFoodAndDrink = foodAndDrink.filter((item) => {
          if (item._id === id) return false
          return true
        })
        setfoodAndDrink(newFoodAndDrink)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const mapData = foodAndDrink.map((item) => {
    return <Card key={item._id} data={item} clicked={remove} />
  })

  return (
    <div>
      <h3>All Food & Drink List</h3>
      <div className="row">{mapData}</div>
    </div>
  )
}

export default FoodDrink
