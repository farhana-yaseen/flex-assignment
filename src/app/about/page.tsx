

"use client"
import Image from "next/image"



export default function AboutUs() {

    return (

        <div className="font-serif w-full h-screen text-black py-10">
            <h1 className="p-5 md:p-8 lg:p-12 xl:16 text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ">Tailwind CSS</h1>

            <div className="lg:flex justify-center items-center p-5 md:p-8 lg:p-12 xl:p-16">

                {/* Left content (Image) */}
                {/* Profile Picture*/}
                <Image src={"/profileImg.jpg"} alt={"Profile Picture"} width={300} height={300} className="mb-10 px-auto md:shadow-xl shadow-lg shadow-white w-40 h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80 rounded-full object-cover"></Image>
                <div>

                </div>


                {/* Right content */}
                <div className="px-8 md:px-12 lg:px-20 py-5  ">

                    <h1 className="bg-purple-500 lg:p-2 2xl:p-3 text-2xl lg:text-4xl xl:text-5xl text-center font-bold rounded-md">About Me</h1>

                    <p className="text-justify text-sm lg:text-lg xl:text-2xl md:leading-relaxed xl:leading-loose py-5">Hello! I am a  web developer with a passion for coding and building websites that work beautifully. I’ve worked with HTML, CSS, Tailwind CSS, Typescript, Next.js  and am always learning more to improve my craft.
                        Whether you are looking to create a personal project or a business website, I am here to help bring your ideas to life. Let&apos;s build something great together!
                    </p>

                </div>

            </div>
        </div>
    )
}



