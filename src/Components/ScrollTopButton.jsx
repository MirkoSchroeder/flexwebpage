import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md"


const ScrollTopButton = ({scroll}) => {

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return(
        <div className="absolute">
            <button className="text-white hover:text-verde-100" onClick={() => scrollToSection(scroll)}><MdKeyboardArrowUp className="w-[7rem] h-[7rem]"/></button>
        </div>
    )
}

export default ScrollTopButton