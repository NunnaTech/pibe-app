import React from "react";
import Logo from "../../resources/static/img/logo.svg"
export const Footer = () => {
    return (
        <footer class="sticky w-full top-[100vh] bg-primary">
            <div class="flex justify-content-center">
                <div class="flex align-items-center justify-content-center text-white m-2"><img src={Logo} alt="Pibe Logo" /></div>
                <div class="flex align-items-center justify-content-center text-white m-2">PIBE Plataform | © 2022 All rights reserved</div>
            </div>
        </footer>
    )
}