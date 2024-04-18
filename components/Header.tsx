import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {useState, useEffect} from "react";

export default function Header() {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(false)
    }, [router]);

    console.log(router)

    return (
        <header className="w-full h-[80px] flex justify-between items-center bg-white shadow md:px-24 xs:px-4">
            {/*  fixed top-0 z-[1] */}
            <button onClick={() => router.push("/")}>
                <b className={"text-lg"}>Pertfect Solution</b>
            </button>
            <nav className="md:flex xs:hidden gap-4">
                {/*<Link className={router.asPath === "/profile" ? "font-bold" : undefined} href="/profile">PROFILE</Link>*/}
                <Link className={router.asPath === "/" ? "font-bold" : undefined} href="/">HOME</Link>
                <Link className={router.asPath === "/solution" ? "font-bold" : undefined} href="/solution">퍼펙트솔루션</Link>
                <Link className={router.asPath === "/apis" ? "font-bold" : undefined} href="/apis">정품통합알 및 파싱 api</Link>
                <Link className={router.asPath === "/concerting" ? "font-bold" : undefined}
                      href="/concerting">컨설팅</Link>
            </nav>
            <Image src={"/hambuger.png"} width={25} height={15}
                   alt={"hambuger"}
                   onClick={() => setOpen(!open)}
                   quality={100}
                   className={"md:hidden xs:block cursor-pointer"}
            />
            {
                open && <div
                    className={"flex flex-col justify-center items-center fixed w-screen h-screen bg-[#f8f8f8] left-0 top-0 gap-10 animate__animated animate__slideInRight animate__fast ease-in-out"}>
                    <div className={"absolute top-10 right-5"}>
                        <Image src={"/close.png"} width={35} height={35}
                               alt={"close"}
                               onClick={() => setOpen(!open)}
                               quality={100}
                               className={"cursor-pointer"}
                        />
                    </div>
                    {/*<Link className={router.asPath === "/profile" ? "font-bold" : undefined} href="/profile">PROFILE</Link>*/}
                    <Link className={router.asPath === "/" ? "font-bold" : undefined} href="/">HOME</Link>
                    <Link className={router.asPath === "/solution" ? "font-bold" : undefined} href="/solution">퍼펙트솔루션</Link>
                    <Link className={router.asPath === "/apis" ? "font-bold" : undefined} href="/apis">정품통합알 및 파싱 api</Link>
                    <Link className={router.asPath === "/concerting" ? "font-bold" : undefined}
                          href="/concerting">컨설팅</Link>
                </div>
            }
        </header>
    );
}

