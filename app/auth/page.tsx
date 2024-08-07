import React from "react";
import SignupForm from "@/components/SignupForm.client";
import SigninForm from "@/components/SigninForm.client";

const page = () => {
  return (
    <div className="flex w-[900px] justify-between my-8 mx-auto">
      <SignupForm />
      <SigninForm />
    </div>
  );
};

export default page;
