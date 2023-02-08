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
import LogoTextMenu from "../../Components/LogoTextMenu";


const About = () => {

    const aboutOne = useRef(null)
    const aboutTwo = useRef(null)
    const aboutThree = useRef(null)
    const aboutFour = useRef(null)
    const aboutFive = useRef(null)

    return (
        <div className="bg-violeta-800">

            <div className="lg:h-screen flex flex-col items-center justify-center">
                <div ref={aboutOne} className="flex flex-col justify-center lg:h-screen items-center xs:mt-[10%] xs:px-[4%] md:mt-[10%] md:px-[4%] lg:mt-[10%] lg:px-[4%]">
                    <div className="w-[41%] xs:w-[100%] md:w-[100%]">
                        <p className="text-white text-6xl text-center leading-[108%] xs:text-4xl xs:leading-[120%] md:text-4xl md:leading-[120%]"><span className="text-verde-100">Flex</span><span className="text-violeta-100">Boi</span> es una startup dedicada a aquellos comercios que buscan realizar las entregas de sus paquetes en el <span className="text-verde-100">menor tiempo posible</span>, ofreciendo un servicio de <span className="text-verde-100">primera calidad</span> a un <span className="text-verde-100">bajo costo</span>.</p>
                    </div>
                </div>
                <div className="xs:hidden md:hidden">
                    <ScrollDownButton scroll={aboutTwo}/>
                </div>
            </div>

            <div ref={aboutTwo} className="lg:h-screen flex flex-col items-center justify-center">
                <div className="xs:hidden md:hidden">
                    <ScrollTopButton scroll={aboutOne} />
                </div>
                <div className="flex lg:h-screen lg:items-center justify-center lg:gap-60 xs:flex-col xs:pt-[20%] md:flex-col md:pt-[20%]">
                    <div className="lg:w-[35%] xs:flex xs:flex-col items-center md:flex md:flex-col">
                        <p className="text-9xl text-violeta-100 xs:text-7xl md:text-7xl">APP</p>
                        <p className="text-3xl text-white mt-[8%] xs:text-center xs:px-[4%] md:text-center md:px-[4%]">Para facilitar el proceso de carga de paquetes y hacer todo mas sencillo.</p>
                    </div>
                    <div className="xs:mt-[10%] xs:flex xs:justify-center md:mt-[10%] md:flex md:justify-center">
                        <img className="w-[35rem] rounded-[3rem] xs:w-[80%] md:w-[80%]" src={AppImage} alt="App"></img>
                    </div>
                </div>
                <div className="xs:hidden md:hidden">
                    <ScrollDownButton scroll={aboutThree}/>
                </div>
            </div>
                
            <div ref={aboutThree} className="lg:h-screen flex flex-col items-center justify-center xs:pt-[25%] md:pt-[25%]">
                <div className="xs:hidden md:hidden">
                    <ScrollTopButton scroll={aboutTwo} />
                </div>
                <div className="lg:h-screen flex items-center justify-center gap-60 xs:flex-col md:flex-col">
                    <div className="xs:hidden md:hidden">
                        <img className="rounded-[3rem]" src={BenefitImage} alt="Beneficios"></img>
                    </div>
                    <div className="h-[50%] lg:w-[30%] xs:flex xs:flex-col xs:items-center md:flex md:flex-col md:items-center">
                        <p className="text-verde-100 text-9xl xs:text-7xl md:text-7xl">Beneficios</p>
                        <ul className="text-white text-3xl list-disc mt-[10%] xs:text-2xl xs:px-[10%] md:text-2xl md:px-[10%]">
                            <li className="mb-[3%]">Entregas en el dia.</li>
                            <li className="mb-[3%]">Ahorrar tiempo y recursos a traves de la digitalizacion (APP).</li>
                            <li className="mb-[3%]">Ayudar a cualquier tipo de comercio en la distribucion de sus paquetes. </li>
                            <li>Servicio Low Cost.</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:hidden xs:mt-[7%] xs:flex xs:justify-center md:mt-[7%] md:flex md:justify-center">
                        <img className="rounded-[3rem] xs:w-[80%] md:w-[80%]" src={BenefitImage} alt="Beneficios"></img>
                    </div>
                <div className="xs:hidden md:hidden">
                    <ScrollDownButton scroll={aboutFour}/>
                </div>
            </div>
            

            <div ref={aboutFour} className="flex flex-col items-center justify-center lg:h-screen xs:pt-[20%] md:pt-[20%]">
                <div className="xs:hidden md:hidden">
                    <ScrollTopButton scroll={aboutThree} />
                </div>
                <div className="lg:h-screen flex flex-col items-center justify-center">
                    <div className="flex lg:items-center justify-center lg:gap-60 xs:flex-col md:flex-col">
                        <div className="lg:w-[40%] tracking-wide xs:flex xs:flex-col xs:items-center xs:text-center xs:px-[10%] md:flex md:flex-col md:items-center md:text-center md:px-[10%]">
                            <p className="text-8xl text-violeta-100 xs:text-6xl md:text-6xl">Nuestro Servicio</p>
                            <p className="text-3xl text-white mt-[6%] xs:text-2xl md:text-2xl">Como empresa de logística y tecnología buscamos lo mejor para nuestros clientes.</p>
                            <p className="text-3xl text-white mt-[6%] xs:text-2xl md:text-2xl">Priorizando una entrega efectiva de sus paquetes en el mismo día, ofreciendo un excelente servicio, facilitándolo mediante el uso de nuestra aplicación y a su vez cuidando su bolsillo con tarifas low cost.</p>
                            <p className="text-3xl text-white mt-[6%] xs:text-2xl md:text-2xl">Nuestra aplicación es la base del servicio. En ella el comercio adherido podrá cargar todos sus pedidos del día y de esta manera se optimiza el proceso de envío</p>
                            <p className="text-3xl text-white mt-[6%] xs:text-2xl md:text-2xl">Los pedidos cargados se le asignaran automáticamente a un cadete el cual pasara a buscar sus paquetes en horarios preestablecidos.</p>
                        </div>
                        <div className="xs:mt-[10%] xs:flex xs:justify-center md:mt-[10%] md:flex md:justify-center">
                            <img className="w-[35rem] rounded-[3rem] xs:w-[80%] md:w-[80%]" src={ServiceImage} alt="App"></img>
                        </div>
                    </div>
                </div>
                <div className="xs:hidden md:hidden">
                    <ScrollDownButton scroll={aboutFive}/>
                </div>
            </div>

            <div ref={aboutFive} className="lg:h-screen flex lg:items-center justify-center lg:gap-20 xs:flex-col xs:items-center xs:pt-[2%] md:flex-col md:items-center md:pt-[2%]">
                <div className="w-[50%] h-[70%] lg:border-r-4 border-verde-100 flex xs:hidden md:hidden">
                    <div className="flex lg:justify-center items-center lg:pl-[2%] xs:w-[20%] md:w-[20%]">
                        <img className="w-[50%]" src={logo} alt="logo" />
                        <p className="text-9xl text-white">FlexBoi</p>
                    </div>
                </div>
                <div className="lg:hidden border-b-2 border-verde-100 w-[90%] flex flex-col xs:pt-[20%] md:pt-[20%]">
                    <LogoTextMenu />
                </div>
                <div className="h-[50%] w-[50%] items-center xs:w-[100%] xs:flex xs:flex-col xs:pt-[10%] md:w-[100%] md:flex md:flex-col md:pt-[10%]">
                    <p className="text-violeta-100 text-7xl xs:text-4xl md:text-4xl">Contáctanos</p>
                    <ul className="text-white text-3xl mt-[10%] xs:px-[10%] md:px-[10%]">
                        <li className="mb-[10%]">+ 54 9 3516 23-5609</li>
                        <li className="mb-[10%]">Córdoba Capital, Córdoba, Argentina</li>
                        <li className="mb-[3%]">info@flex-boi.com</li>
                    </ul>

                    <div className="flex lg:gap-x-10 mt-[6%] xs:gap-x-5 xs:pb-[10%] md:gap-x-5 md:pb-[10%]">
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