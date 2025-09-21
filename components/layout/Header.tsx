import Logo from "@/public/assets/logos/ALX.png";
import Image from "next/image";
import magnifier from "@/public/assets/icons/Magnifer.svg";
import profile from "@/public/assets/icons/Frame 8.png";
import { Button } from "../common/Button";
import { CATEGORIES } from "@/constants";
const Header = () => {
    return (
        <div className="w-full flex flex-col space-y-2">
        <header className="bg-white w-full border-b border-gray-300 lg:px-10 md:px-8 px-4 py-4   flex justify-between items-center">
                <div className="md:block hidden">
                    <Image src={Logo} alt="ALX Logo" width={80} height={40} />
                </div>
                <div className="md:flex space-x-4  lg:h-[78px] md:h-[58] lg:w-auto md:max-w-[730px]  hidden border border-gray-300 rounded-full px-4 py-2">
                    <div className="flex flex-col items-center border-r border-gray-300 lg:text-md text-sm">
                        <label htmlFor="location" className="text-left w-full lg:px-4 ">Location</label>
                        <input type="text" placeholder="Search for destination" className="flex-1 outline-none lg:px-4 rounded-full" />
                    </div>
                    <div className="flex flex-col items-center border-r border-gray-300 lg:text-md text-sm">
                        <label htmlFor="checkin" className="text-left w-full ">Check in</label>
                        <input type="text" placeholder="Add date" className="flex-1 outline-none w-[60px] lg:w-[100px] rounded-full" />
                    </div>
                    <div className="flex flex-col items-center border-r border-gray-300 lg:text-md text-sm">
                        <label htmlFor="checkout" className="text-left w-full ">Check out</label>
                        <input type="text" placeholder="Add date" className="flex-1 outline-none w-[60px] lg:w-[100px] rounded-full" />
                    </div>
                    <div className="flex flex-col items-center lg:text-md text-sm">
                        <label htmlFor="people" className="text-left w-full">People</label>
                        <input type="text" placeholder="Add guest" className="flex-1 outline-none w-[60px] lg:w-[100px] rounded-full" />
                    </div>
                    <div className="flex items-center justify-center text-white bg-orange-400 p-4 rounded-full cursor-pointer hover:bg-orange-500 transition">
                        <Image src={magnifier} alt="Search" width={20} height={20}  />
                    </div>
                </div>
                <div className="lg:flex hidden space-x-4 items-center justify-center">
                    <Button text="Sign in" color="bg-[#34967C] hover:bg-green-800 text-white"/>
                    <Button text="Sign Up" color="text-black border border-gray-300" />
                </div>
                <div className="md:hidden space-x-4  h-[58px] max-w-[320px]  flex border border-gray-300 rounded-full px-4 py-2">
                    <div className="flex flex-col items-center ">
                        <label htmlFor="location" className="text-left w-full">Where to</label>
                        <div className="flex space-x-2">
                            <input type="text" placeholder="Location" className="outline-none w-[55px] text-sm " />
                            <input type="text" placeholder="Date" className=" outline-none w-[40px] text-sm"/>
                            <input type="text" placeholder="Add guest" className=" outline-none w-[60px] text-sm" />
                        </div>
                        
                    </div>
                    <div className="flex items-center justify-center text-white bg-orange-400 p-4 rounded-full cursor-pointer hover:bg-orange-500 transition">
                        <Image src={magnifier} alt="Search" width={20} height={20}  />
                    </div>

                </div>
                <div className="lg:hidden block ">
                    <Image src={profile} alt="Profile" width={40} height={40}  />
                </div>
            
        </header>
        <div className="w-full overflow-x-auto">
            <div className="w-full flex space-x-12 lg:px-10 md:px-8 px-4 ">
                {CATEGORIES.map((category) => (
                    <div key={category.name} className="flex flex-col justify-center items-center space-y-2 cursor-pointer hover:scale-105 transform transition">
                        <a className="w-10 h-10 flex items-center justify-center ">
                            <Image src={category.icon} alt={category.name} width={50} height={50} />
                        </a>
                        <span className="text-sm text-center text-gray-500">{category.name}</span>
                    </div>
                ))}
            </div>

        </div>
    </div>
    )
}

export default Header;