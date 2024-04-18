import Link from "next/link";
import {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-screen flex justify-center items-center h-[100px] text-xs bg-[black] gap-1 fixed bottom-0">
            <Image src={"/telegram.png"} alt={"telegram"} width={55} height={55} layout={"fixed"}
                   onClick={() => window.open("https://t.me/perfect010", "_blank")}
            />
            <button className={"bg-[#2BA3D6] w-[150px] h-[45px] rounded-[10px] text-[16px] text-white"}
                    onClick={() => window.open("https://t.me/perfect010", "_blank")}
            >텔레그램 상담하기
            </button>
        </footer>
    );
}
