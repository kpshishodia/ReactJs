import React from 'react';
// import './App.css';

function SignupForm() {
  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission (page reload)
    e.preventDefault();
    console.log('Form Submitted');
    // Add your form data processing here
  };

  return (
    <div>
      <h1>Signup Form</h1>
      {/* Simple form */}
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        {/* Email input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        {/* Password input */}
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;  // Export the form component
