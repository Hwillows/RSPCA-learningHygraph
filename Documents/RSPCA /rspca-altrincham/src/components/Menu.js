import React from "react";

function Menu() {
  return (
    <div>
      <div className="bg-[#B5E0DC] p-3 place-content-center hidden sm:block ">
        <div className="grid grid-cols-8 ">
          <div></div>
          <button className="raleway ">Home</button>
          <button className="raleway">News</button>
          <button className="raleway">Events</button>
          <button className="raleway">Rehoming</button>
          <button className="raleway">Get Involved</button>
          <button className="raleway">Links</button>
          <div></div>
        </div>
      </div>
      <div className="bg-[#B5E0DC] h-3 m-3 sm:hidden"></div>
    </div>
  );
}

export default Menu;
