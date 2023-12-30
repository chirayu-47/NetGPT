import React, { useRef, useState } from "react";
import Header from "../Components/Header";
import { BG_URL } from "../Utils/constants";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-full">
      <Header />
      <img
        className="absolute w-full object-cover brightness-50 "
        // mix blend overlay
        src={BG_URL}
        alt="bgImg"
      />
      <div className="form relative flex h-screen items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto w-full max-w-[400px] bg-black bg-opacity-80 p-14"
        >
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
              ref={email}
              type="text"
              className="mb-3 w-full rounded-md bg-zinc-800 p-3 text-white"
              placeholder="Email or phone number"
            />
            <input
              ref={password}
              type="password"
              className="w-full rounded-md bg-zinc-800 p-3 text-white"
              placeholder="Password"
            />
          </div>
          <p className="text-red-500">{errorMessage}</p>
          <button
            className=" mt-5 w-full rounded-md bg-red-600 py-3 text-white"
            onClick={handleButtonClick}
          >
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
              <h1 className="mb-2 flex text-gray-400">
                New to Netflix?{" "}
                <p
                  className="ml-1 cursor-pointer select-none text-white hover:underline"
                  onClick={toggleSignUpForm}
                >
                  Sign Up now.
                </p>
              </h1>
            </div>
          )}
          {!isSignInForm && (
            <div className="pb-12">
              <h1 className="mb-2 flex text-gray-400">
                Already a user?{" "}
                <p
                  className="ml-1 cursor-pointer select-none text-white hover:underline"
                  onClick={toggleSignUpForm}
                >
                  Sign In now.
                </p>
              </h1>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
