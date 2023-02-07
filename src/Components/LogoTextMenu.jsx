import React from "react";
import logo from '../img/logo-sin-nombre-png.png'

const LogoTextMenu = () => {

    return(
        <div className="flex items-center pl-[2%]">
            <img className="w-[8%]" src={logo} alt="logo" />
            <p className="text-4xl text-white">FlexBoi</p>
        </div>
    )
}

export default LogoTextMenu