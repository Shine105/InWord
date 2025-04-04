'use client';
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Add state for error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/API/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setRegistrationMessage(data.message);
      setErrorMessage(""); // Clear any previous error messages
    } else {
      setErrorMessage(data.message || "Registration failed.");
      setRegistrationMessage(""); // Clear any previous success message
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {registrationMessage && <p style={{ color: "green" }}>{registrationMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit">Register</button>
        <Link href="http://localhost:3000/">Home</Link>
      </form>
    </div>
  );
}