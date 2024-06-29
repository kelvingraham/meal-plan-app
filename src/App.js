import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import AddMeal from './Pages/AddMeal';
import ManageMeals from './Pages/ManageMeals';
import PlanDay from './Pages/PlanDay';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
        <div className="page">
          <NavBar />
          <Routes>
            <Route path = "/" element = {
              <Home />
            }/>
            <Route path = "/about" element = {
              <About />
            }/>
            <Route path = "/managemeals" element = {
              <ManageMeals />
            }/>
            <Route path = "/addmeal" element = {
              <AddMeal />
            }/>
            <Route path = "/planday" element = {
              <PlanDay />
            }/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
