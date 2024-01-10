// import react-router-dom
import { Link } from "react-router-dom";

// import react icons
import { FiAlignRight } from "react-icons/fi";

// hooks
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useToogle } from "../hooks/useToogle";

// firebase
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

function Navbar() {
  const { darks } = useToogle();
  const check = useRef();
  const { user, dipatch } = useGlobalContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout successufuly");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const handleCheck = () => {
    const chec = check.current.checked;
    darks(chec);
  };

  return (
    <div className="navbar  shadow-lg">
      <div className="max-container">
        <div className="flex-1 ">
          <div className="flex flex-row items-center gap-2">
            <Link className="btn btn-outline btn-info text-xl btn-sm md:btn-md  sm:text-[25px]">
              My Kitchen
            </Link>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                ref={check}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onClick={handleCheck}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
        <div className="flex-none flex items-center gap-2">
          <div className="flex items-center md:gap-2 hidden sm:block sm:flex sm:flex-row gap-1">
            <h2 className="md:text-[20px] sm:text-[15px]">
              Welcome {user.displayName}
            </h2>
            <button
              onClick={logout}
              className="btn  btn-outline btn-secondary btn-sm md:btn-md text-[15px] md:text-[20px]"
            >
              logout
            </button>
            <div className="tooltip tooltip-bottom" data-tip="Create recipies">
              <Link
                to="/create"
                className="btn btn-outline btn-sm md:btn-md text-[15px] md:text-[20px]"
              >
                Create
              </Link>
            </div>
          </div>

          <div className="dropdown dropdown-end sm:hidden">
            <div tabIndex={0} role="button">
              <div className="w-10 rounded-full">
                <button className="btn btn-circle btn-ghost text-[25px] btn-sm md:text-[30px] md:btn-md ">
                  <FiAlignRight />
                </button>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/"> welcome {user.displayName}</Link>
              </li>
              <li className="tooltip  tooltip-left" data-tip="Create recipies">
                <Link to="/create">Create</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
