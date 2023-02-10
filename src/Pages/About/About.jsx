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

            <div className="h-screen flex flex-col items-center justify-center">
                <div ref={aboutOne} className="flex flex-col justify-center 2xl:h-screen 2xl:mt-[5%] xl:h-screen xl:mt-[5%] items-center xs:mt-[10%] xs:px-[4%] md:mt-[10%] md:px-[4%]">
                    <div className="2xl:w-[42%] xl:w-[42%] xs:w-[100%] md:w-[100%]">
                        <p className="text-white text-center 2xl:text-6xl 2xl:leading-[120%] xl:text-5xl xl:leading-[140%] xs:text-4xl xs:leading-[120%] md:text-4xl md:leading-[120%]"><span className="text-verde-100">Flex</span><span className="text-violeta-100">Boi</span> es una startup dedicada a aquellos comercios que buscan realizar las entregas de sus paquetes en el <span className="text-verde-100">menor tiempo posible</span>, ofreciendo un servicio de <span className="text-verde-100">primera calidad</span> a un <span className="text-verde-100">bajo costo</span>.</p>
                    </div>
                </div>
                <div className="xs:hidden md:hidden 2xl:block xl:block">
                    <ScrollDownButton scroll={aboutTwo}/>
                </div>
            </div>

            <div ref={aboutTwo} className="2xl:h-screen xl:h-screen flex flex-col items-center justify-center">
                <div className="xs:hidden md:hidden 2xl:block xl:block">
                    <ScrollTopButton scroll={aboutOne} />
                </div>
                <div className="flex justify-center 2xl:flex-row 2xl:h-screen 2xl:items-center 2xl:gap-60 2xl:pt-0 xl:flex-row xl:h-screen xl:items-center xl:gap-60 xl:pt-0 xs:flex-col xs:pt-[20%] md:flex-col md:pt-[20%]">
                    <div className="2xl:w-[35%] 2xl:items-start xl:w-[35%] xl:items-start xs:flex xs:flex-col items-center md:flex md:flex-col ">
                        <p className="2xl:text-9xl xl:text-9xl text-violeta-100 xs:text-7xl md:text-7xl">APP</p>
                        <p className="text-4xl text-white mt-[8%] 2xl:px-0 xl:px-0 xs:text-center xs:px-[4%] md:text-center md:px-[4%] 2xl:text-start xl:text-start">Para facilitar el proceso de carga de paquetes y hacer todo más sencillo.</p>
                    </div>
                    <div className="xs:mt-[10%] xs:flex xs:justify-center md:mt-[10%] md:flex md:justify-center 2xl:mt-0 xl:mt-0">
                        <img className="2xl:w-[35rem] xl:w-[28rem] rounded-[3rem] xs:w-[80%] md:w-[50%]" src={AppImage} alt="App"></img>
                    </div>
                </div>
                <div className="xs:hidden md:hidden 2xl:block xl:block">
                    <ScrollDownButton scroll={aboutThree}/>
                </div>
            </div>
                
            <div ref={aboutThree} className="flex flex-col items-center justify-center 2xl:pt-0 2xl:h-screen xl:pt-0 xl:h-screen xs:pt-[50%] md:pt-[25%]">
                <div className="xs:hidden md:hidden 2xl:block xl:block">
                    <ScrollTopButton scroll={aboutTwo} />
                </div>
                <div className="2xl:h-screen 2xl:flex 2xl:flex-row xl:h-screen xl:flex xl:flex-row xl:gap-40 xl:pt-[6%] justify-center gap-60 xs:flex-col md:flex-col">
                    <div className="xs:hidden md:hidden 2xl:block xl:block">
                        <img className="rounded-[3rem] xl:w-[90%]" src={BenefitImage} alt="Beneficios"></img>
                    </div>
                    <div className="h-[50%] 2xl:w-[30%] 2xl:flex 2xl:items-start xl:w-[30%] xl:flex xl:items-center xs:flex xs:flex-col xs:items-center md:flex md:flex-col md:items-center">
                        <p className="text-verde-100 2xl:text-9xl xl:text-8xl xs:text-6xl md:text-6xl">Beneficios</p>
                        <ul className="text-white 2xl:text-3xl 2xl:px-0 xl:text-3xl xl:px-0 list-disc mt-[10%] xs:text-2xl xs:px-[10%] md:text-2xl md:px-[10%]">
                            <li className="mb-[3%]">Entregas en el día.</li>
                            <li className="mb-[3%]">Ahorrar tiempo y recursos a través de la digitalización (APP).</li>
                            <li className="mb-[3%]">Ayudar a cualquier tipo de comercio en la distribución de sus paquetes. </li>
                            <li>Servicio Low Cost.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="2xl:hidden xl:hidden xs:mt-[7%] xs:flex xs:justify-center md:mt-[7%] md:flex md:justify-center">
                        <img className="rounded-[3rem] xs:w-[80%] md:w-[70%]" src={BenefitImage} alt="Beneficios"></img>
                </div>
                <div className="xs:hidden md:hidden 2xl:block xl:block">
                    <ScrollDownButton scroll={aboutFour}/>
                </div>
            </div>
            

            <div ref={aboutFour} className="flex flex-col items-center justify-center 2xl:pt-0 2xl:h-screen xl:pt-0 xl:h-screen xs:pt-[40%] md:pt-[20%]">
                <div className="xs:hidden md:hidden 2xl:block xl:block">
                    <ScrollTopButton scroll={aboutThree} />
                </div>
                <div className="2xl:h-screen xl:h-screen flex flex-col items-center justify-center">
                    <div className="flex justify-center 2xl:flex-row 2xl:items-center 2xl:gap-60 xl:flex-row xl:items-center xl:gap-60 xs:flex-col md:flex-col">
                        <div className="tracking-wide 2xl:w-[40%] 2xl:px-0 2xl:text-start 2xl:items-start xl:w-[40%] xl: xl:px-0 xl:text-start xl:items-start xs:flex xs:flex-col xs:items-center xs:text-center xs:px-[10%] md:flex md:flex-col md:items-center md:text-center md:px-[10%]">
                            <p className="2xl:text-8xl xl:text-7xl xl:mt-[4%] text-violeta-100 xs:text-6xl md:text-6xl">Nuestro Servicio</p>
                            <p className="2xl:text-3xl xl:text-xl xl:mt-[4%] text-white mt-[6%] xs:text-2xl md:text-2xl">Como empresa de logística y tecnología buscamos lo mejor para nuestros clientes.</p>
                            <p className="2xl:text-3xl xl:text-xl xl:mt-[4%] text-white mt-[6%] xs:text-2xl md:text-2xl">Priorizando una entrega efectiva de sus paquetes en el mismo día, ofreciendo un excelente servicio, facilitándolo mediante el uso de nuestra aplicación y a su vez cuidando su bolsillo con tarifas low cost.</p>
                            <p className="2xl:text-3xl xl:text-xl xl:mt-[4%] text-white mt-[6%] xs:text-2xl md:text-2xl">Nuestra aplicación es la base del servicio. En ella el comercio adherido podrá cargar todos sus pedidos del día y de esta manera se optimiza el proceso de envío</p>
                            <p className="2xl:text-3xl xl:text-xl xl:mt-[4%] text-white mt-[6%] xs:text-2xl md:text-2xl">Los pedidos cargados se le asignaran automáticamente a un cadete el cual pasará a buscar sus paquetes en horarios preestablecidos.</p>
                        </div>
                        <div className="xs:mt-[10%] xs:flex xs:justify-center md:mt-[10%] md:flex md:justify-center 2xl:mt-0 xl:mt-0">
                            <img className="2xl:w-[35rem] xl:w-[30rem] rounded-[3rem] xs:w-[80%] md:w-[50%]" src={ServiceImage} alt="App"></img>
                        </div>
                    </div>
                </div>
                <div className="xs:hidden md:hidden 2xl:block xl:block">
                    <ScrollDownButton scroll={aboutFive}/>
                </div>
            </div>

            <div ref={aboutFive} className="justify-center 2xl:h-screen 2xl:pt-0 flex 2xl:flex-row 2xl:gap-20 xl:h-screen xl:pt-0 xl:flex-row xl:gap-20 xs:flex-col xs:items-center xs:pt-[2%] md:flex-col md:items-center md:pt-[2%]">
                    <div className="w-[50%] h-[70%] 2xl:flex 2xl:border-r-4 2xl:block xl:flex xl:border-r-4 xl:block border-verde-100 flex xs:hidden md:hidden">
                        <div className="flex 2xl:justify-center xl:justify-center items-center pl-[2%] xl:pr-[5%]">
                            <img className="w-[50%]" src={logo} alt="logo" />
                            <p className="text-9xl xl:text-8xl text-white">FlexBoi</p>
                        </div>
                    </div>
                    <div className="2xl:hidden xl:hidden border-b-2 border-verde-100 w-[90%] flex flex-col xs:pt-[20%] md:pt-[20%]">
                        <LogoTextMenu />
                    </div>
                    <div className="h-[50%] 2xl:w-[50%] 2xl:items-start 2xl:pt-0 2xl:flex-col 2xl:pt-0 xl:w-[50%] xl:items-start xl:pt-0 xl:flex-col xl:pt-0 items-center xs:w-[100%] xs:flex xs:flex-col xs:pt-[10%] md:w-[100%] md:flex md:flex-col md:pt-[10%]">
                        <p className="text-violeta-100 2xl:text-7xl xl:text-7xl xs:text-4xl md:text-4xl">Contáctanos</p>
                        <ul className="text-white 2xl:px-0 xl:px-0 text-3xl mt-[10%] xs:px-[10%] md:px-[10%]">
                            <li className="mb-[10%]">+ 54 9 3516 23-5609</li>
                            <li className="mb-[10%]">Córdoba Capital, Córdoba, Argentina</li>
                            <li className="mb-[3%]">info@flex-boi.com</li>
                        </ul>

                        <div className="flex 2xl:gap-x-10 xl:gap-x-10 mt-[6%] xs:gap-x-5 xs:pb-[10%] md:gap-x-5 md:pb-[10%]">
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