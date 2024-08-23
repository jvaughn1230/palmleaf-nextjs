"use client";
import React, { useState, FormEvent, ChangeEvent, useContext } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "@/utils/firebase";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";

const defaultFormFields = {
  email: "",
  password: "",
};

const SigninForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const router = useRouter();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    router.back();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      router.back();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <input
          placeholder="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div>
          <button type="submit">Sign In</button>
          <button type="button" onClick={signInWithGoogle}>
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
