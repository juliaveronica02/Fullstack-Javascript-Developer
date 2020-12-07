import React from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import AddingCategory from "./Category/Create"
import AddingFoodDrink from "./Menu/Create"
import Main from "./ShowMenu/Main"

export default function Index() {
  return (
    <div>
      <Navbar />
      <Switch>
        <div className="container pt-3">
          <Route path="/Food&Drink" component={Main} />
          <Route path="/addingFoodDrink" component={AddingFoodDrink} />
          <Route exact path="/" component={AddingCategory} />
        </div>
      </Switch>
    </div>
  )
}
