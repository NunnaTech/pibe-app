import React from "react";
import { Toolbar } from 'primereact/toolbar';
import { RightContent } from "./RightContent";
import { LeftContent } from "./LeftContent";

export const LandingNavBar  =()=>{
    return(
        <Toolbar
			left={LeftContent}
			className='border-noround bg-primary'
			right={RightContent}
		/>
    )
}