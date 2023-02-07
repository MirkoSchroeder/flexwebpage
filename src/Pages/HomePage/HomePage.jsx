import React from "react";
import HomeImage from "../../img/homeImage.jpg"
import "../../App.css"
import { Link } from "react-router-dom";
import LogoTextMenu from "../../Components/LogoTextMenu";

const HomePage = () => {
    return (
        <div>
            <LogoTextMenu />

            <div className="flex justify-around items-center mt-[5%]">
                <div className="w-[25%]">
                    <p className="text-8xl text-white">Entregas en el día</p>

                    <div className="mt-[20%]">
                        <Link to={"/about"}>
                            <button className="text-3xl text-white bg-verde-100 hover:bg-blue-700 w-[50%] py-6 px-4 rounded-full focus:outline-none focus:shadow-outline">Saber más</button>
                        </Link>
                    </div>
                </div>


                <div>
                    <div>
                        <img className="rounded-[3rem]" src={HomeImage} alt="Imagen Principal"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage