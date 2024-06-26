import { BannerComponent } from "@/components/Banner";
import React from "react";

export default function ({children} : {children: React.ReactNode}) {
    return (
        <>  
            <BannerComponent />
            
            <div className=" flex flex-grow justify-center items-center mt-20">
                {children}
            </div>
        </>
    )
}