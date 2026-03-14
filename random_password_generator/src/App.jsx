import { useState, useCallback, useEffect } from "react";

function App() {
  // ----------------------------
  // State variables
  // ----------------------------
  const [length, setLength] = useState(8); // Password length
  const [numbersAllowed, setNumbersAllowed] = useState(true);
  const [lowerCaseAlphabetsAllowed, setLowerCaseAlphabetsAllowed] = useState(true);
  const [upperCaseAlphabetsAllowed, setUpperCaseAlphabetsAllowed] = useState(true);
  const [specialCharsAllowed, setSpecialCharsAllowed] = useState(true);
  const [password, setPassword] = useState(""); // Generated password

  // ----------------------------
  // Password generation function
  // ----------------------------
  const paswordhandler = () => {
    let gerneratedPassword = "";

    // Character sets
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let allNumbers = "0123456789";
    let specialChars = "~!@#$%^&*";

    // Build the pool of allowed characters
    let str = "";
    if (numbersAllowed) str += allNumbers;
    if (lowerCaseAlphabetsAllowed) str += lowerChars;
    if (upperCaseAlphabetsAllowed) str += upperChars;
    if (specialCharsAllowed) str += specialChars;

    // ----------------------------
    // Loop 'length' times to pick random characters
    // ----------------------------
    for (let i = 0; i < length; i++) {
      // Generate random index within str
      let randomIndex = Math.floor(Math.random() * str.length);
      // Append the character at that index to password
      gerneratedPassword += str.charAt(randomIndex);
    }

    // Set password state
    setPassword(gerneratedPassword);
    console.log("generated password:", gerneratedPassword);
  };

  // ----------------------------
  // useCallback to memoize the function
  // Hook is at top level of component
  // ----------------------------
  const passwordGenerator = useCallback(paswordhandler, [
    length,
    numbersAllowed,
    lowerCaseAlphabetsAllowed,
    upperCaseAlphabetsAllowed,
    specialCharsAllowed,
    setPassword,
  ]);

    // useEffect to run passwordGenerator automatically whenever length changes
  // ----------------------------
useEffect(() => {
  passwordGenerator();
}, [
  length,
  numbersAllowed,
  lowerCaseAlphabetsAllowed,
  upperCaseAlphabetsAllowed,
  specialCharsAllowed,
  passwordGenerator
]);

  return (
    <>
      {/* Main container with gradient */}
      <div className="flex justify-center items-center min-h-screen 
      bg-gradient-to-br from-orange-300 via-pink-300 to-cyan-400 
      text-white font-semibold">

        {/* Card container */}
        <div className="border border-white rounded-xl p-8 flex flex-col shadow-[8px_8px_4px_#909090,8px_8px_0px_#575757]">

          {/* Title */}
          <h1 className="text-xl mb-2">Password Generator</h1>

          {/* Password display box */}
          <div className="relative">
            <input
              type="text"
              value={password} // Display generated password
              className="bg-white text-black outline-none px-3 py-2 w-[300px] rounded text-xl my-2"
              id="passBox"
              disabled
            />
            <span className="absolute top-4 right-2 text-black text-2xl cursor-pointer z-10">
              content_copy
            </span>
          </div>

          {/* Range slider for password length */}
          <input
            type="range"
            min="1"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))} // Convert to number
            id="inputSlider"
            className="my-2"
          />

          {/* Row showing password length */}
          <div className="flex my-2">
            <p className="flex-1 text-lg">Password Length</p>
            <span id="sliderValue">{length}</span> {/* Show current length */}
          </div>

          {/* Lowercase letters checkbox */}
          <div className="flex my-2">
            <label className="flex-1 text-lg" htmlFor="lowercase">
              Include Lowercase Letters (a-z)
            </label>
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              checked={lowerCaseAlphabetsAllowed}
              onChange={(e) => setLowerCaseAlphabetsAllowed(e.target.checked)}
              className="w-5 h-5"
            />
          </div>

          {/* Uppercase letters checkbox */}
          <div className="flex my-2">
            <label className="flex-1 text-lg" htmlFor="uppercase">
              Include Uppercase Letters (A-Z)
            </label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={upperCaseAlphabetsAllowed}
              onChange={(e) => setUpperCaseAlphabetsAllowed(e.target.checked)}
              className="w-5 h-5"
            />
          </div>

          {/* Numbers checkbox */}
          <div className="flex my-2">
            <label className="flex-1 text-lg" htmlFor="numbers">
              Include Numbers (0-9)
            </label>
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={numbersAllowed}
              onChange={(e) => setNumbersAllowed(e.target.checked)}
              className="w-5 h-5"
            />
          </div>

          {/* Special characters checkbox */}
          <div className="flex my-2">
            <label className="flex-1 text-lg" htmlFor="symbols">
              Include Symbols (@-*)
            </label>
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={specialCharsAllowed}
              onChange={(e) => setSpecialCharsAllowed(e.target.checked)}
              className="w-5 h-5"
            />
          </div>

          {/* Generate password button */}
          <button
            type="button"
            onClick={passwordGenerator} // Call useCallback function
            className="bg-[#2c619e] hover:bg-blue-600 px-6 py-3 text-lg font-bold rounded my-2 cursor-pointer"
            id="genBtn"
          >
            Generate Password
          </button>

        </div>
      </div>
    </>
  );
}

export default App;