import React, { useState, useEffect } from 'react'
import axios from "axios";
import Button from '../../Button';
import './ManageMeals.css';
import { Link } from 'react-router-dom';

//let mealsTemp = ["Hamburger","Lasagna","XXX"]

const addMealsButtonText = "Add Meals"

const ManageMeals = () => {
  const [mealsFiltered,setMealsFiltered] = useState([])
  const [regexMatch,setRegexMatch] = useState("")
  
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4741/recipes")
      .then(res => setMealsFiltered(res.data))
      .catch(e => console.log(e))
  },[])

  useEffect(() => {
    const updatedArr = mealsFiltered.map(meal => {
      if (meal.name.toLowerCase().match(new RegExp(regexMatch.toLowerCase()))) {
        return {
          ...meal,isVisible: true
        }
      }
      return {
        ...meal,isVisible: false
      }
    })
    setMealsFiltered(updatedArr)
  },[regexMatch])

  const handleOnTextInputChange = async (e) => { // updates filter

    setRegexMatch(e.target.value)
      
    console.log("\""+e.target.value+"\" yields:")
    console.log(mealsFiltered)
  }

  const handleGetOneMealFromBackendButton = (e, meal) => {
    console.log(`getting ${meal.name} data from backend`)
    axios
      .get(`http://127.0.0.1:4741/recipes/${meal._id}`)
      .then((res) => {console.log(res.data[0])})
      .catch((e) => {console.log(e)})
  }

  const handleGetMealsFromBackendButton = (e) => {

    console.log("getting all recipes from backend")
    axios
      .get("http://127.0.0.1:4741/recipes")
      .then((res) => {console.log(res)})
      .catch((e) => {console.log(e)})
  }

  const handleBackendButton = (e, meal) => {
    console.log("sending "+meal+" to backend!")
    const schemaToSend = {
      name: meal,
      shared: "0",
      ingredients: [],
      steps: []
    }

    console.log("getting")
    axios
      .get("http://127.0.0.1:4741/")
      .then((res) => {console.log(res)})
      .catch((e) => {console.log(e)});

    console.log("posting")
    axios
      .post("http://127.0.0.1:4741/recipes", schemaToSend)
      .then((res) => {console.log(res)})
      .catch((e) => {console.log(e)});
    console.log("finished sending "+meal+" to backend!")
    return
  }

  return (
    <div className="page-wrapper">
        <div className="page">
            <h1 className="h1">Manage Meals</h1>
            <Link to="/addmeal">
              <Button
              classname="btn"
              text={addMealsButtonText}/>
            </Link>

            <input 
              type="text"
              placeholder="Find a meal..."
              onChange={(e) => handleOnTextInputChange(e, mealsFiltered)}/>

            <div>
              {mealsFiltered.map((meal, i) => 
                <li key={i}>{meal.name}
                <Button
                classname="btn"
                text={"Send "+meal.name+" to backend test"}
                onClick={(e) => handleBackendButton(e, meal)}/>
                <Button
                classname="btn"
                name={meal._id}
                data-id={meal._id}
                text={"See "+meal.name}
                onClick={(e) => handleGetOneMealFromBackendButton(e, meal)}/>
                </li>)
              }
            </div>
        </div>
    </div>
  )
}

export default ManageMeals