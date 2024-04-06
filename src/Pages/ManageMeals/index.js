import React, { useState } from 'react'
import Button from '../../Button';
import './ManageMeals.css';
import { Link } from 'react-router-dom';

let mealsTemp = ["Hamburger","Lasagna","XXX"]

const addMealsButtonText = "Add Meals"

const ManageMeals = () => {
  const [mealsFiltered,setMealsFiltered] = useState(mealsTemp)

  const handleOnTextInputChange = (e, meals) => {
    if (e.target.value.length !== 0) {
      let mealsResult = meals.filter(meal => meal.toLowerCase().includes(e.target.value.toLowerCase())) //regex?
      console.log("\""+e.target.value+"\" yields:")
      console.log(mealsResult)
      setMealsFiltered(mealsResult)
      return
    }
    setMealsFiltered(mealsTemp)
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
                <li key={i}>{meal}</li>)
              }
            </div>
        </div>
    </div>
  )
}

export default ManageMeals