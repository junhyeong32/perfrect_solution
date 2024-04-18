import {Inter} from "next/font/google";
import React, {useEffect} from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";
import {useRouter} from "next/router";

const inter = Inter({subsets: ["latin"]});

export default function Layout<FC>({children}: any) {
    const router = useRouter()
    return (
        <>
            <Header/>
            <main
                className={`flex w-full flex-col justify-center items-center pb-[150px]`}
                style={{
                    background: "center/cover no-repeat url('/background2.jpeg')",
                    opacity: router.pathname === "/" ? 1 : 0.9,
                    minHeight: "calc(100vh - 100px)",
                }}
            >
                {children}
            </main>
            <Footer />
        </>
    );
}