import React from "react";
import logo from '../img/logo-sin-nombre-png.png'

const LogoTextMenu = () => {

    return(
        <div className="flex items-center 2xl:justify-start 2xl:pl-[2%] xl:justify-start xl:pl-[2%] xs:justify-center xs:pl-0 md:justify-center md:pl-0">
            <img className="2xl:w-[8%] xl:w-[8%] xs:w-[30%] md:w-[30%]" src={logo} alt="logo" />
            <p className="text-white text-4xl">FlexBoi</p>
        </div>
    )
}

export default LogoTextMenu