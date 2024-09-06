"use client";
import React, { useState, FormEvent, ChangeEvent, useContext } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "@/utils/firebase";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import FormInput from "./FormInput.client";

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
    <div className="w-[380px] flex flex-col">
      <h2 className="font-bold text-[1.5em] my-2.5">
        Already have an account?
      </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="flex">
          <button type="submit">Sign In</button>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="bg-blue-500 hover:bg-blue-500 hover:text-black"
          >
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
