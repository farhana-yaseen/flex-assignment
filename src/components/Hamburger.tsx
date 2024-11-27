"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Hamburger = () => {

    const [openMenu, setOpenMenu] = useState(false)


    return (
        <div>
                                                                                {/* if previous state false it become true if ture covert false */}
            <Image src="/hamburger.png" alt="hamburger menu" width={32} height={32} onClick={() => setOpenMenu(previous => (!previous))} className="cursor-pointer " />
            {openMenu &&
                <div className="flex flex-col items-center justify-center gap-10 left-0 top-20 bg-black text-white font-serif w-full h-screen text-lg font-bold z-20 absolute">
                                             {/* Close menu when Home is clicked */}
                    <Link href={"/"} onClick={() => setOpenMenu(false)}>Home Page</Link>
                    <Link href={"/about"} onClick={() => setOpenMenu(false)}>About Us</Link>
                    <Link href={"/contact"} onClick={() => setOpenMenu(false)}>Contact Us</Link>
                </div>
            }
        </div>
    )
}
export default Hamburger