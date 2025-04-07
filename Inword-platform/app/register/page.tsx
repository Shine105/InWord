"use client";
import { useState } from "react";
import Link from "next/link";
import { useRegister } from "@/hooks/useRegister";

export default function Register() {
  const { registerUser, registrationMessage, errorMessage } = useRegister();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerUser(formData);
  };

  return (
    <div>
      <h2>Register</h2>
      {registrationMessage && <p style={{ color: "green" }}>{registrationMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
        <button type="submit">Register</button>
        <Link href="/">Home</Link>
      </form>
    </div>
  );
}
