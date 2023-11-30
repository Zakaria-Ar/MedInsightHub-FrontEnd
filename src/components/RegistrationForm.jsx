// RegistrationForm.jsx
import React, { useState } from "react";

export const RegistrationForm = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState(''); // No default selection

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${pass}, UserType: ${userType}`);
    // Add logic to send registration data to the backend
  }

  return (
    <div className="auth-form-container">
      <h2>Registration Form</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />

        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

        <label htmlFor="userType">Select your role:</label>
        <select id="userType" name="userType" onChange={(e) => setUserType(e.target.value)} value={userType} required>
          <option value="" disabled>Select your role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>

        <button type="submit">Register</button>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  );
}
