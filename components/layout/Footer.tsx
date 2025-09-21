import Logo from "@/public/assets/logos/ALX.png";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="bg-[#34967C] text-gray-300 pt-4 text-center mt-12">
            <div className="bg-black bg-opacity-50 lg:px-12 px-4 py-4 h-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0">
                    <section className="max-w-lg  text-left ">
                        <div className="mb-6">
                        <Image src={Logo} alt="ALX Logo" width={80} height={40} className="invert" />
                        </div>
                        <p>
                            ALX is a platform where travelers can discover and book unique, 
                            comfortable, and affordable lodging options worldwide. 
                            From cozy city apartments and tranquil countryside retreats to exotic beachside villas, 
                            ALX connects you with the perfect place to stay for any trip.
                        </p>
                    </section>
                    <section className="grid grid-cols-2 md:grid-cols-3 gap-x-10 p-2 lg:gap-x-12 text-left md:space-y-0  space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold">Explore</h3>
                        <ul className="space-y-2 mt-4">
                            <li><a href="/">Apartment in Dubai</a></li>
                            <li><a href="/">Hotels in New York</a></li>
                            <li><a href="/">Villa in Spain</a></li>
                            <li><a href="/">Mansion in Indonesia</a></li>
                        </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Company</h3>
                            <ul className="space-y-2 mt-4">
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Career</a></li>
                            <li><a href="/">Customers</a></li>
                            <li><a href="/">Brand</a></li>
                        </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Help</h3>
                            <ul className="space-y-2 mt-4">
                            <li><a href="/">Support</a></li>
                            <li><a href="/">Cancel booking</a></li>
                            <li><a href="/">Refunds processes</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="text-center space-y-4 lg:space-y-0  lg:text-left flex flex-col lg:flex-row justify-between items-center mt-6 border-t border-gray-300 pt-4">
                    <p>Some hotel requires you to cancel more than 24 hours before check-in. 
                        Details <a href="/" className="text-green-800">here</a></p>
                    <ul className="flex space-x-4 items-center justify-center text-sm lg:text-md ">
                            <li><a href="/">Terms of service</a></li>
                            <li><a href="/">Policy Service</a></li>
                            <li><a href="/">Cookie policy</a></li>
                            <li><a href="/">Partners</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;