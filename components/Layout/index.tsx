import {Inter} from "next/font/google";
import React, {useEffect} from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

const inter = Inter({subsets: ["latin"]});

export default function Layout<FC>({children}: any) {
    return (
        <>
            <Header/>
            <main
                className={`flex w-full flex-col items-center pb-[150px] pt-[50px] ${inter.className}`}
            >
                {children}
            </main>
            <Footer />
        </>
    );
}
