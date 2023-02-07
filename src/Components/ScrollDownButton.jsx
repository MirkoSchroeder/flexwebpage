import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md"


const ScrollDownButton = ({scroll}) => {

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return(
        <div className="">
            <button className="text-white hover:text-verde-100" onClick={() => scrollToSection(scroll)}><MdKeyboardArrowDown className="w-[7rem] h-[7rem]"/></button>
        </div>
    )
}

export default ScrollDownButton