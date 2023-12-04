//App.js

import React, { useState } from "react";
import './App.css';
import { LoginForm } from "../src/components/LoginForm";
import { RegistrationForm } from "../src/components/RegistrationForm";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <LoginForm onFormSwitch={toggleForm} /> : <RegistrationForm onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
