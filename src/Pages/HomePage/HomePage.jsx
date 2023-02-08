import React from "react";
import HomeImage from "../../img/homeImage.jpg"
import "../../App.css"
import { Link } from "react-router-dom";
import LogoTextMenu from "../../Components/LogoTextMenu";
import HomeImageCel from "../../img/homepageImage.jpg"

const HomePage = () => {
    return (
        <div>
            <LogoTextMenu />

            <div className="flex justify-around lg:items-center mt-[5%] xs:flex-col xs:mt-0 md:flex-col md:mt-0">
                <div className="w-[25%] xs:w-[100%] xs:text-center xs:mt-[5%] md:w-[100%] md:text-center md:mt-[5%]">
                    <p className="text-white text-8xl xs:text-6xl xs:px-9 md:text-6xl md:px-9">Entregas en el día</p>

                    <div className="mt-[20%] xs:mt-[15%] md:mt-[15%]">
                        <Link to={"/about"}>
                            <button className="text-3xl text-white bg-verde-100 hover:bg-blue-700 w-[50%] py-6 px-4 rounded-full focus:outline-none focus:shadow-outline xs:text-2xl xs:py-3 xs:px-3 md:text-2xl">Saber más</button>
                        </Link>
                    </div>
                </div>

                {/* Imagen de Pc */}
                <div className="xs:hidden md:hidden">
                    <img className="rounded-[3rem] xs:w-[60%] xs:rounded-none" src={HomeImage} alt="Imagen Principal"></img>
                </div>

                {/* Imagen de cel */}
                <div className="lg:hidden xs:mt-[10%] xs:flex xs:justify-center md:mt-[10%] md:flex md:justify-center">
                    <img className="w-[95%] md:w-[50%]" src={HomeImageCel} alt="Imagen Principal"></img>
                </div>
            </div>
        </div>
    )
}

export default HomePage