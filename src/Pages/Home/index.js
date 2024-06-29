import React from 'react'
import Button from '../../Button';
import './Home.css';
import { Link } from 'react-router-dom';

const aboutButtonText = "About"
const manageMealsButtonText = "Manage Meals"
const managePlansButtonText = "Manage Plans"
const manageCalendarButtonText = "Manage Calendar"

const Home = () => {
  return (
    <div className="page-wrapper">
        <div className="page">
            <h1 className="h1">Home</h1>
            <Link className="homepage-link" to="/about">
              <Button
              text={aboutButtonText}/>
            </Link>
            <Link className="homepage-link" to="/managemeals">
              <Button
              text={manageMealsButtonText}/>
            </Link>
            <Link className="homepage-link" to="/addmeal">
              <Button
              text={managePlansButtonText}/>
            </Link>
            <Button text={manageCalendarButtonText}/>
        </div>
    </div>
  )
}

export default Home