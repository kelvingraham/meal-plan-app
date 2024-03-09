//import logo from './logo.svg';
import './App.css';

const handleClick = (e) => {
  console.log("Clicked button at "+e.clientX+", "+e.clientY+"!")
}

function Button({text}) {
  return (
    <button
      className="btn"
      onClick={(e) => handleClick(e)}>
      {text}
    </button>
  );
}

export default Button;
