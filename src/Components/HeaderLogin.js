import React from "react";
import { LOGO_URL } from "../Utils/constants";

const HeaderLogin = () => {
  return (
    <div className="absolute  w-full  bg-gradient-to-b from-black px-3">
      <img className="w-56 " src={LOGO_URL} alt="Logo" />
    </div>
  );
};

export default HeaderLogin;
