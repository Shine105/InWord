import { useState } from "react";
import { API_ROUTES } from "@/constants/apiRoutes";

export const useRegister = () => {
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const registerUser = async (formData: { name: string; email: string; password: string }) => {
    try {
      const response = await fetch(API_ROUTES.REGISTER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),     
      });

      const data = await response.json();
      if (response.ok) {
        setRegistrationMessage(data.message);
        setErrorMessage("");
      } else {
        setErrorMessage(data.message || "Registration failed.");
        setRegistrationMessage("");
      }
    } catch (error) {
      setErrorMessage("Something went wrong.");
    }
  };

  return { registerUser, registrationMessage, errorMessage };
};
