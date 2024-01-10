import React, { useRef } from "react";
// import react-router-dom
import { Link } from "react-router-dom";

// hooks
import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";
import Button from "../components/Button";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Login() {
  const { isPending } = useGlobalContext();
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
      <div className="grid h-screen place-items-center">
        <div className="px-[30px] sm:w-sm md:w-md py-[20px] bg-white opacity-80 rounded-lg shadow-2xl ">
          <h1 className="text-center text-2xl md:text-4xl font-bold">Login</h1>
          <form onSubmit={handleLogin}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email:</span>
              </div>
              <input
                ref={email}
                type="email"
                placeholder="Email write"
                className="input input-bordered mb-4 w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
            <label className="form-control mb-4 w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password:</span>
              </div>
              <input
                ref={password}
                type="password"
                placeholder="Password write"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
            <div className="flex flex-col gap-3">
              {!isPending && <Button text={"Login"} disabled={false} />}
              {isPending && <Button text={"Loading..."} disabled={true} />}

              <button
                type="button"
                onClick={signin}
                className="btn btn-accent btn-sm md:btn-md"
              >
                Google
              </button>
              <Link to="/signup" className="btn btn-info btn-sm md:btn-md">
                If you dont have any account ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
