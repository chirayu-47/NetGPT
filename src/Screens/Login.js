import React, { useState } from "react";
import HeaderLogin from "../Components/HeaderLogin";
import { BG_URL } from "../Utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-full">
      <HeaderLogin />
      <img
        className="absolute w-full object-cover mix-blend-overlay brightness-50 "
        src={BG_URL}
        alt="bgImg"
      />
      <div className="form relative flex h-screen items-center justify-center">
        <form className="mx-auto w-full max-w-[400px] bg-black bg-opacity-80 p-14">
          <h2 className="text-3xl font-bold text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          <div className=" my-6">
            {!isSignInForm && (
              <input
                type="text"
                className="mb-3 w-full rounded-md bg-zinc-800 p-3 text-white"
                placeholder="Full Name"
              />
            )}
            <input
              type="text"
              className="mb-3 w-full rounded-md bg-zinc-800 p-3 text-white"
              placeholder="Email or phone number"
            />
            <input
              type="text"
              className="w-full rounded-md bg-zinc-800 p-3 text-white"
              placeholder="Password"
            />
          </div>
          <button className=" mt-5 w-full rounded-md bg-red-600 py-3 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="my-2 flex justify-between">
            <p className="text-gray-400">
              <input type="checkbox" />
              Remember Me
            </p>
            <p className="cursor-pointer text-gray-400 hover:underline">
              Need Help ?
            </p>
          </div>

          {isSignInForm && (
            <div className="py-12">
              <p className="mb-2 flex text-gray-400">
                New to Netflix?{" "}
                <p
                  className="ml-1 cursor-pointer select-none text-white hover:underline"
                  onClick={toggleSignUpForm}
                >
                  Sign Up now.
                </p>
              </p>
            </div>
          )}
          {!isSignInForm && (
            <div className="pb-12">
              <p className="mb-2 flex text-gray-400">
                Already a user?{" "}
                <p
                  className="ml-1 cursor-pointer select-none text-white hover:underline"
                  onClick={toggleSignUpForm}
                >
                  Sign In now.
                </p>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
