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

            <div className="2xl:flex 2xl:flex-row 2xl:justify-around 2xl:items-center 2xl:mt-[5%] xl:flex xl:flex-row xl:justify-around xl:items-center xl:mt-[5%] xs:flex-col xs:mt-0 md:flex-col md:mt-0">
                <div className="2xl:w-[25%] xl:w-[40%] xs:w-[100%] xs:text-center xs:mt-[5%] md:w-[100%] md:text-center md:mt-[5%]">
                    <p className="text-white 2xl:text-8xl xl:text-8xl xs:text-6xl xs:px-9 md:text-6xl md:px-9">Entregas en el día</p>

                    <div className="2xl:mt-[20%] xl:mt-[20%] xs:mt-[15%] md:mt-[15%]">
                        <Link to={"/about"}>
                            <button className="2xl:text-3xl xl:text-3xl text-white bg-verde-100 hover:bg-blue-700 w-[50%] 2xl:py-6 2xl:px-4 xl:py-6 xl:px-4 xl:w-[50%] rounded-full focus:outline-none focus:shadow-outline xs:text-2xl xs:py-3 xs:px-3 md:text-2xl md:py-3 md:w-[30%]">Saber más</button>
                        </Link>
                    </div>
                </div>

                {/* Imagen de Pc */}
                <div className="xs:hidden md:hidden 2xl:block xl:block">
                    <img className="rounded-[3rem]" src={HomeImage} alt="Imagen Principal"></img>
                </div>

                {/* Imagen de cel */}
                <div className="lg:hidden xl:hidden xs:mt-[10%] xs:flex xs:justify-center md:mt-[10%] md:flex md:justify-center">
                    <img className="w-[95%] md:w-[50%]" src={HomeImageCel} alt="Imagen Principal"></img>
                </div>
            </div>
        </div>
    )
}

export default HomePage