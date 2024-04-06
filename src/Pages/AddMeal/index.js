import React, { useState, useEffect } from 'react'
import Button from '../../Button';
import './AddMeals.css';

let addMealsButtonText = "Add Meals"
let addMealsButtonClassName = "add-meals-btn"

//let mealsMap = {}

const allMeals = ["Apple Pie","Carrot Cake","Hamburger","Jumbalaya","Lasagna","Meringue Pie","Pea Soup","XXX","YYY","ZZZ"]
  .map(meal => ({name: meal, isSelected: false, isVisible: true}))
  //.forEach((meal, i) => mealsMap[`${i}${i}`] = {name: meal, isSelected: false})

const AddMeal = () => {
  const [mealsFiltered,setMealsFiltered] = useState(allMeals)
  const [regexMatch,setRegexMatch] = useState("")

  const handleOnTextInputChange = async (e) => { // updates filter

    /* TODO investigate escaping regex */

    setRegexMatch(e.target.value)

    // const updatedArr = mealsFiltered.map(meal => {
    //   if (meal.name.toLowerCase().match(new RegExp(e.target.value.toLowerCase()))) {
    //     return {
    //       ...meal,isVisible: true
    //     }
    //   }
    //   return {
    //     ...meal,isVisible: false
    //   }
    // })
    // setMealsFiltered(updatedArr)
      
    console.log("\""+e.target.value+"\" yields:")
    console.log(mealsFiltered)
  }

  const handleAllMealsBtnClick = (e) => {
    console.log("Clicked button at "+e.clientX+", "+e.clientY+" from parent!")
    const dataToSend = mealsFiltered.filter(
      meal => meal.isSelected
    )
    console.log("SENDING:",dataToSend)

    const updatedArr = mealsFiltered.map(meal => {return {...meal,isSelected: e.target.checked}})
    setMealsFiltered(updatedArr)

    setRegexMatch("")
  }

  const handleOnCheck = async (e, selectedMeal, i) => { // sets meal > isSelected

    const updatedArr = mealsFiltered.map(meal => {
      if (meal.name === selectedMeal.name) {
        return {
          ...meal,isSelected: e.target.checked
        }
      }
      return meal
    })
    setMealsFiltered(updatedArr)
    console.log(selectedMeal)
    console.log("\""+selectedMeal.name+"\" set to "+e.target.checked)
    console.log(mealsFiltered)
  }

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

  return (
    <div className="page-wrapper">
        <div className="page">
            <h1 className="h1">Add Meals</h1>

            <input 
              className="meal-search-input"
              type="text"
              placeholder="Filter meals..."
              onChange={(e) => handleOnTextInputChange(e, mealsFiltered)}
              value={regexMatch}/>

            <Button
              text={addMealsButtonText}
              className={addMealsButtonClassName}
              onClick={handleAllMealsBtnClick}/>

            <div className="meal-wrapper">
              <ul className="meal-ul">
                {mealsFiltered.filter(meal => meal.isSelected).map((meal, i) => 
                  <li
                    className="meal-li"
                    key={i}>
                    <div className="meal-li-div">
                      <input 
                        type="checkbox"
                        htmlFor="meal"
                        checked={(meal.isSelected)}
                        onChange={(e) => handleOnCheck(e, meal, i)}/>
                      <div className="meal-li-title">
                        {meal.name}
                      </div>
                    </div>
                  </li>)
                }
              </ul>
            </div>

            <div className="meal-wrapper">
              <ul className="meal-ul">
                {mealsFiltered.filter(meal => !meal.isSelected && meal.isVisible).map((meal, i) => 
                  <li
                    className="meal-li"
                    key={i}>
                    <div className="meal-li-div">
                      <input 
                        type="checkbox"
                        htmlFor="meal"
                        checked={(meal.isSelected)}
                        onChange={(e) => handleOnCheck(e, meal, i)}/>
                      <div className="meal-li-title">
                        {meal.name}
                      </div>
                    </div>
                  </li>)
                }
              </ul>
            </div>
        </div>
    </div>
  )
}

export default AddMeal