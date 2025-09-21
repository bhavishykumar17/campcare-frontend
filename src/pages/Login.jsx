// Login.js
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d7fbff]">
      <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-2xl flex max-w-4xl overflow-hidden">
        <div className="w-full md:w-1/2 p-12">
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
            Log In
          </h2>
          <p className="text-subtext-light dark:text-subtext-dark mb-8">
            Your journey starts here. Log in to explore and express.
          </p>
          <form>
            <div className="mb-6 relative">
              <input
                className="w-full pl-4 pr-24 py-3 border border-border-light dark:border-border-dark rounded-md bg-transparent text-text-light dark:text-text-dark focus:ring-primary focus:border-primary"
                placeholder="Enter your email address"
                type="email"
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 flex items-center"
                type="submit"
              >
                Next <span className="material-icons ml-2">arrow_forward</span>
              </button>
            </div>
          </form>
          <div className="mb-8 text-right">
            <a className="text-sm text-primary hover:underline" href="#">
              Forgot password?
            </a>
          </div>
          <div className="relative flex py-12 items-center">
            <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
            <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
          </div>
          <p className="text-center text-sm text-subtext-light dark:text-subtext-dark py-2">
            Don't have an account yet?{" "}
            <a className="font-medium text-primary hover:underline" href="#">
              Sign up
            </a>
          </p>
        </div>
        <div className="hidden md:block w-1/2 relative">
          <img
            alt="Abstract blue water texture"
            className="object-cover w-full h-full"
            src="bubble.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
