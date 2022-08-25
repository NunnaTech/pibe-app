import React from "react";
import Logo from "../../resources/static/img/logo.svg"
export const Footer = () => {
    return (
        <footer className="sticky w-full top-[100vh] bg-primary">
            <div className="flex justify-content-center">
                <div className="flex align-items-center justify-content-center text-white m-2"><img src={Logo} alt="Pibe Logo" /></div>
                <div className="flex align-items-center justify-content-center text-white m-2">PIBE Plataform | © 2022 All rights reserved</div>
            </div>
        </footer>
    )
}