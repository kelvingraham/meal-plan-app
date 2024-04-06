import React from 'react'
import Button from '../../Button';
import './Home.css';
import { Link } from 'react-router-dom';

const manageMealsButtonText = "Manage Meals"
const planDayButtonText = "Plan Day"
const manageCalendarButtonText = "Manage Calendar"

const Home = () => {
  return (
    <div className="page-wrapper">
        <div className="page">
            <h1 className="h1">Home</h1>
            <Link className="homepage-link" to="/managemeals">
              <Button
              text={manageMealsButtonText}/>
            </Link>
            <Link className="homepage-link" to="/planday">
              <Button
              text={planDayButtonText}/>
            </Link>
            <Button text={manageCalendarButtonText}/>
        </div>
    </div>
  )
}

export default Home