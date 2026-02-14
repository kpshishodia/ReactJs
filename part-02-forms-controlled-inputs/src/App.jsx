

import React from 'react';
import './App.css';
import SignupForm from './components/SignUpForm';  // Import SignupForm correctly

// TodoList component - responsible for displaying the list of todos
function TodoList() {
  // Define the list of todos
  const todos = [
    {id: 1, text: "Learn JSX"},          // Each todo has an id and text
    {id: 2, text: "Understand props"},
    {id: 3, text: "Learn React"},
    {id: 4, text: "Learn HTML"},
    {id: 5, text: "Learn CSS"},
  ];

  return (
    <div>
      {/* Title of the Todo List */}
      <h1>React ToDoS</h1>

      {/* Unordered list to display each todo */}
      <ul>
        {/* Iterate over the todos array and render each todo as a list item */}
        {todos.map((todo) => {
          // Return a list item with a unique 'key' and todo text
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}

// App component - the main component that renders TodoList and SignupForm
function App() {
  return (
    <div>
      {/* Call the TodoList component to display the todo items */}
      <TodoList />
      {/* Call the SignupForm component to display the signup form */}
      <SignupForm />
    </div>
  );
}

export default App;  // Only export App once here
