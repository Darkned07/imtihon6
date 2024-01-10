import React, { useRef } from "react";
// import react-router-dom
import { Link } from "react-router-dom";

// hooks
import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { login } = useLogin();
  const { signin } = useSignup();
  const email = useRef();
  const password = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0)",
      }}
    >
      <div className="h-screen grid place-items-center">
        <div className=" sm:px-[20px] px-[10px] py-[10px] md:px-[30px] md:py-[20px] bg-white opacity-80 rounded-lg shadow-2xl ">
          <h1 className="md:text-[33px] sm:text-[23px] text-[20px] text-center">
            Login
          </h1>
          <form onSubmit={handleLogin}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email:</span>
              </div>
              <input
                ref={email}
                type="email"
                placeholder="Email write..."
                className="input input-bordered input-info w-full max-w-xs skeleton w-full"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password:</span>
              </div>
              <input
                ref={password}
                type="password"
                placeholder="password write..."
                className="input input-bordered input-info w-full max-w-xs skeleton w-full"
              />
            </label>
            <div className="flex flex-col mt-[10px] gap-2">
              <button className="btn btn-sm md:btn-md btn-outline btn-accent skeleton w-full">
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  signin();
                }}
                className="btn btn-sm md:btn-md  btn-outline skeleton w-full"
              >
                Google
              </button>
              <Link
                to="/signup"
                className="btn btn-outline btn-sm md:btn-md btn-secondary skeleton w-full"
              >
                Create a new user ? Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
