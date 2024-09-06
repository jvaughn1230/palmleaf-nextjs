import React from "react";
import SignupForm from "@/components/SignupForm.client";
import SigninForm from "@/components/SigninForm.client";

const page = () => {
  return (
    <div className="custom-auth-break flex flex-wrap justify-between  my-[30px] mx-auto max-w-[900px] ">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default page;
