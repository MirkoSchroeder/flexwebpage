import React from "react";
import { useRef } from "react";
import AppImage from "../../img/imageApp.jpg"
import BenefitImage from "../../img/imageBenefits.jpg"
import ServiceImage from "../../img/imageService.jpg"
import logo from '../../img/logo-sin-nombre-png.png'
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import { TbWorld } from "react-icons/tb";
import ScrollDownButton from "../../Components/ScrollDownButton";
import ScrollTopButton from "../../Components/ScrollTopButton";


const About = () => {

    const aboutOne = useRef(null)
    const aboutTwo = useRef(null)
    const aboutThree = useRef(null)
    const aboutFour = useRef(null)
    const aboutFive = useRef(null)

    return (
        <div className="bg-violeta-800">
            <div ref={aboutOne} className="flex flex-col justify-center h-screen items-center">
                <div className="w-[41%]">
                    <p className="text-white text-6xl text-center leading-[108%]"><span className="text-verde-100">Flex</span><span className="text-violeta-100">Boi</span> es una startup dedicada a aquellos comercios que buscan realizar las entregas de sus paquetes en el <span className="text-verde-100">menor tiempo posible</span>, ofreciendo un servicio de <span className="text-verde-100">primera calidad</span> a un <span className="text-verde-100">bajo costo</span>.</p>
                </div>
                <ScrollDownButton scroll={aboutTwo}/>
            </div>  

            <div className="h-screen flex flex-col items-center justify-center">
                <div ref={aboutTwo} className="flex h-screen items-center justify-center gap-60">
                    {/* <ScrollTopButton scroll={aboutOne} /> */}
                    <div className="w-[35%]">
                        <p className="text-9xl text-violeta-100">APP</p>
                        <p className="text-3xl text-white mt-[8%]">Para facilitar el proceso de carga de paquetes y hacer todo mas sencillo.</p>
                    </div>
                    <div className="">
                        <img className="w-[35rem] rounded-[3rem]" src={AppImage} alt="App"></img>
                    </div>
                </div>
                <ScrollDownButton scroll={aboutThree}/>
            </div>
                
            <div className="h-screen flex flex-col items-center justify-center">
                <div ref={aboutThree} className="h-screen flex items-center justify-center gap-60">
                    <div>
                        <img className="rounded-[3rem]" src={BenefitImage} alt="Beneficios"></img>
                    </div>
                    <div className="h-[50%] w-[30%]">
                        <p className="text-verde-100 text-9xl">Beneficios</p>
                        <ul className="text-white text-3xl list-disc mt-[10%]">
                            <li className="mb-[3%]">Entregas en el dia.</li>
                            <li className="mb-[3%]">Ahorrar tiempo y recursos a traves de la digitalizacion (APP).</li>
                            <li className="mb-[3%]">Ayudar a cualquier tipo de comercio en la distribucion de sus paquetes. </li>
                            <li>Servicio Low Cost.</li>
                        </ul>
                    </div>
                </div>
                <ScrollDownButton scroll={aboutFour}/>
            </div>
            

            <div className="flex flex-col items-center justify-center">
                <div className="h-screen flex flex-col items-center justify-center">
                    <div ref={aboutFour} className="h-screen flex items-center justify-center gap-60">
                        <div className="w-[40%] tracking-wide">
                            <p className="text-8xl text-violeta-100">Nuestro Servicio</p>
                            <p className="text-3xl text-white mt-[6%]">Como empresa de logística y tecnología buscamos lo mejor para nuestros clientes.</p>
                            <p className="text-3xl text-white mt-[6%]">Priorizando una entrega efectiva de sus paquetes en el mismo día, ofreciendo un excelente servicio, facilitándolo mediante el uso de nuestra aplicación y a su vez cuidando su bolsillo con tarifas low cost.</p>
                            <p className="text-3xl text-white mt-[6%]">Nuestra aplicación es la base del servicio. En ella el comercio adherido podrá cargar todos sus pedidos del día y de esta manera se optimiza el proceso de envío</p>
                            <p className="text-3xl text-white mt-[6%]">Los pedidos cargados se le asignaran automáticamente a un cadete el cual pasara a buscar sus paquetes en horarios preestablecidos.</p>
                        </div>
                        <div className="">
                            <img className="w-[35rem] rounded-[3rem]" src={ServiceImage} alt="App"></img>
                        </div>
                    </div>
                </div>
                <ScrollDownButton scroll={aboutFive}/>
            </div>

            <div ref={aboutFive} className="h-screen flex items-center justify-center gap-20">
                <div className="w-[50%] h-[70%] border-r-4 border-verde-100 flex">
                    <div className="flex justify-center items-center pl-[2%]">
                        <img className="w-[50%]" src={logo} alt="logo" />
                        <p className="text-8xl text-white">FlexBoi</p>
                    </div>
                </div>
                <div className="h-[50%] w-[50%]">
                    <p className="text-violeta-100 text-7xl">Contáctanos</p>
                    <ul className="text-white text-3xl mt-[10%]">
                        <li className="mb-[3%]">+ 54 9 3516 23-5609</li>
                        <li className="mb-[3%]">Córdoba Capital, Córdoba, Argentina</li>
                        <li className="mb-[3%]">info@flex-boi.com</li>
                    </ul>

                    <div className="flex gap-x-10 mt-[6%]">
                        <Link to="https://www.linkedin.com/" target="_blank">
                            <AiFillLinkedin color="white" size={70}/>
                        </Link>
                        <Link to="https://www.instagram.com/flexboi.ar/" target="_blank">
                            <AiOutlineInstagram color="white" size={70}/>
                        </Link>
                        <Link to="https://www.flex-boi.com/" target="_blank">
                            <TbWorld color="white" size={70}/>
                        </Link>
                        <Link to="https://web.whatsapp.com/" target="_blank">
                            <AiOutlineWhatsApp color="white" size={70}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About