import { Button } from "../common/Button";
import { useState } from "react";
const BookingSection: React.FC<{ price: number }> = ({ price }) => {
    const [totalNights, setTotalNights] = useState(1);
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const difference = new Date(checkout).getTime() - new Date(checkin).getTime();
    const days = difference / (1000 * 60 * 60 * 24);


    return (
        <div className="bg-white p-6 shadow-lg  rounded-lg w-full">
            <h3 className="text-xl font-semibold">${price}/night</h3>
            <div className="mt-4">
                <label>Check-in</label>
                <input type="date" className="border border-gray-200 p-2 w-full mt-2" 
                value={checkin}
                onChange={(e)=> setCheckin(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <label>Check-out</label>
                <input type="date" className="border border-gray-200 p-2 w-full mt-2" 
                value={checkout}
                onChange={(e)=> setCheckout(e.target.value)}/>
            </div>

            {/* Total payment */}
            <div className="mt-4">
                <p className="w-full flex justify-between">Total payment: <strong className="text-[#34967C]">${days? price * days: price}</strong></p>
            </div>

            {/* Reserve button */}
            <Button color="bg-[#34967C] text-white w-full mt-6" text="Reserve now" />
        </div>
    );
};

export default BookingSection;
