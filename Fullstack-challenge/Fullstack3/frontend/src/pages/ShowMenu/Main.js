import React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import FoodDrink from "./Menu"
import UpdateFoodDrink from "./Update"

const Main = () => {
  let { url } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${url}/Update/:id`} component={UpdateFoodDrink} />
      <Route path={url} component={FoodDrink} />
    </Switch>
  )
}

export default Main
