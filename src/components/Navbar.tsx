import Link from "next/link"
import Hamburger from "./Hamburger"
import Image from "next/image"


const Navbar = () => {
    return (
        <div className="h-20 px-4 lg:px-8 xl:px-10 font-serif relative">
            {/* Mobile  */}
            <div className="flex justify-between items-center h-full  md:hidden">
                <Image src={"/logo.png"} alt={"logo"} width={40} height={40}></Image>
                <Hamburger />
            </div>

            {/* Other Screen */}
            <div className="hidden md:flex items-center justify-between h-32">

                <div>
                    {/* Left Side */}
                    <Image src={"/logo.png"} alt={"logo"} width={80} height={80}></Image>
                </div>

                <div className="flex gap-5 font-bold text-base lg:text-lg xl:text-xl">
                    {/* Right Side */}
                    <Link href={"/"} >Home</Link>
                    <Link href={"/about"} >About Us</Link>
                    <Link href={"/contact"} >Contact Us</Link>
                </div>


            </div>







        </div>
    )
}

export default Navbar