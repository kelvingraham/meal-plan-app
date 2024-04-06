//import logo from './logo.svg';
import './App.css';

const handleClick = (e) => {
  console.log("Clicked button at "+e.clientX+", "+e.clientY+"!")
}

function Button({text,className="btn",onClick=handleClick}) {
  return (
    <button
      className={className}
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
