import React from 'react'
import Button from '../../Button';
import './Home.css';

const manageMealsButtonText = "Manage Meals"
const planDayButtonText = "Plan Day"
const manageCalendarButtonText = "Manage Calendar"

const Home = () => {
  return (
    <div className="page-wrapper">
        <div className="page">
            <h1 className="h1">Home</h1>
            <Button text={manageMealsButtonText}/>
            <Button text={planDayButtonText}/>
            <Button text={manageCalendarButtonText}/>
        </div>
    </div>
  )
}

export default Home