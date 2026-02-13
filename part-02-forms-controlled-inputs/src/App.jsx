

import './App.css'
import { useState } from 'react';

function Greeting(props) {
  const { age, name } = props;

  return (
    <div>
      {age >= 18 ? (
        <h1>Hello, I am {name}, I am {age} years old. You are an adult.</h1>
      ) : (
        <h1>Hello, I am {name}, I am {age} years old. Sorry, you're underage!</h1>
      )}
    </div>
  );
}

function App() {

  const [userInput , setUserInput] = useState("")
  // Declare a state variable for showing/hiding the greeting
  const [showGreeting, setShowGreeting] = useState(true);

  

  // Function to toggle the greeting visibility
  const toggleGreeting = () => {
    setShowGreeting((prev) => !prev);  // Toggle the state value
  };
  const handleInputchange = (event) =>{
    setUserInput(event.target.value)
  }

  return (
    <>
      <div>
<div>
      <input 
        type="text" 
        value={userInput} 
        onChange={handleInputchange} // Update state when the input changes
        placeholder="Type something..." 
      />
      
      <p>You typed: {userInput}</p> {/* Dynamically render the user input */}
    </div>
        
        <button onClick={toggleGreeting}>Click to {showGreeting ? 'hide' : 'show'} greeting</button>
        
        {showGreeting && <Greeting name="Sample-1" age={24} />}
        <Greeting name="Sample-2" age={17} />
      </div>
    </>
  );
}

export default App;
