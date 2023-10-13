import React from "react";
import { useState } from "react";

function Navbar() {
  const [navBar, setNavBar] = useState(false);
  return (
    <div>
      {navBar ? (
        <nav
          // id="sidenav-1"
          className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='true']:translate-x-0 dark:bg-zinc-800"
          // data-te-sidenav-init
          data-te-sidenav-hidden="true"
          // data-te-sidenav-position="absolute"
        >
          <div className="grid grid-cols-1">
            <div>
              <div className="grid justify-items-end">
                <button
                  className="pt-5 px-5"
                  onClick={() => setNavBar(!navBar)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
                </button>
              </div>
              <ul
                className="relative m-0 list-none px-[0.2rem] pl-5 py-5"
                data-te-sidenav-menu-ref
              >
                <li className=" py-4 px-5">
                  <button className="raleway ">Home</button>
                </li>
                <li className=" py-4 px-5">
                  <button className="raleway">News</button>
                </li>
                <li className="py-4 px-5">
                  <button className="raleway">Events</button>
                </li>
                <li className="py-4 px-5">
                  <button className="raleway">Rehoming</button>
                </li>
                <li className="py-4 px-5">
                  <button className="raleway">Get Involved</button>
                </li>
                <li className="py-4 px-5">
                  <button className="raleway">Links</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <div></div>
      )}
      {/* <!-- Sidenav -->

<!-- Toggler --> */}
      <button className="sm:hidden " onClick={() => setNavBar(!navBar)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        >
          <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Navbar;
