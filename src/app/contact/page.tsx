import ContactForm from "@/components/ContactForm";


export default function ContactUs() {
    return (
        <div className=" text-black p-10 md:p-16">

            <div className="s font-serif text-center px-10 md:px-16 lg:px-20">
                <div className="text-2xl md:text-3xl lg:text-5xl border-2 p-2 ">
                    <h1>Get in Touch</h1>  

                    </div>
                <p className="lg:text-2xl xl:text-3xl mb-2 lg:mb-3">+92-3461234567</p>
                <p className="lg:text-2xl xl:text-3xl mb-2 lg:mb-3"><strong>Email:</strong>&nbsp; farhanayaseen@gmail.com</p>
                <p className="lg:text-2xl xl:text-3xl mb-2 lg:mb-3"><strong>Address:</strong>&nbsp; Karachi, Pakistan</p>
            </div>

            <div>
                <ContactForm />
  
            </div>

        </div>
    )
}