// import React, { useState } from 'react';

// function SignupForm() {
//   // State hooks for managing the form input values (name, email, and password)
//   const [email, setEmail] = useState("");  // To store the email input
//   const [password, setPassword] = useState("");  // To store the password input
//   const [name, setName] = useState("");  // To store the name input

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();  // Prevent the default form submission (page reload)

//     // Simple validation to check if all fields are filled
//     if (!name || !email || !password) {
//       alert("All fields are required!");  // Alert if any field is empty
//       return;
//     }

//     // Log the form data (this is where you would submit to an API later)
//     console.log('Form Submitted', { name, email, password });

//     // Reset form fields after submission
//     setEmail("");
//     setName("");
//     setPassword("");
//   };

//   return (
//     <div>
//       <h1>Signup Form</h1> {/* Title of the form */}
      
//       {/* The form element which triggers handleSubmit on submit */}
//       <form onSubmit={handleSubmit}>
        
//         {/* Name input */}
//         <div>
//           <label htmlFor="name">Name:</label> {/* Label for the name input */}
//           <input 
//             type="text" 
//             id="name" 
//             name="name" 
//             required  // Makes this field required
//             onChange={(e) => setName(e.target.value)}  // Updates name state on input change
//             value={name}  // Controlled input, value bound to state
//           />
//         </div>

//         {/* Email input */}
//         <div>
//           <label htmlFor="email">Email:</label> {/* Label for the email input */}
//           <input 
//             type="email" 
//             id="email" 
//             name="email" 
//             required  // Makes this field required
//             onChange={(e) => setEmail(e.target.value)}  // Updates email state on input change
//             value={email}  // Controlled input, value bound to state
//           />
//         </div>

//         {/* Password input */}
//         <div>
//           <label htmlFor="password">Password:</label> {/* Label for the password input */}
//           <input 
//             type="password" 
//             id="password" 
//             name="password" 
//             required  // Makes this field required
//             onChange={(e) => setPassword(e.target.value)}  // Updates password state on input change
//             value={password}  // Controlled input, value bound to state
//           />
//         </div>

//         {/* Submit button */}
//         <button type="submit">Submit</button>  {/* Button to submit the form */}
//       </form>
//     </div>
//   );
// }

// export default SignupForm;  // Export the SignupForm component for use in other files





import React from 'react';
import { useForm } from 'react-hook-form';

function SignupForm() {
  // Destructure methods and formState (for errors) from useForm
  const { register, handleSubmit, formState: { errors } , reset } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    // If no validation errors, submit the form
    console.log(data);

      // Reset form fields after submission
    reset();  // This will reset the form to its initial state (empty fields)
  };

  return (
    <div>
      <h1>Signup Form</h1>

      {/* The form element which triggers handleSubmit on submit */}
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register('name', { required: "Name is required" })}  // Adding validation message
          />
          {/* Display error message if name is missing */}
          <p>{errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}</p>
        </div>

        {/* Email input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', { 
              required: "Email is required", 
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 
                message: "Invalid email format"
              }
            })}  // Email validation with pattern
          />
          {/* Display error message if email is invalid */}
         <p> {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}</p>
        </div>

        {/* Password input */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register('password', { 
              required: "Password is required", 
              minLength: {
                value: 6, 
                message: "Password must be at least 6 characters"
              }
            })}  // Password validation for required and minLength
          />
          {/* Display error message if password doesn't meet criteria */}
         <p> {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}</p>
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
