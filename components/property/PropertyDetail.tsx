import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import BookingSection from "@/components/property/BookingSection";
const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (

    <div className=" mx-auto p-6 ">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Image src={property.image} alt={property.name} className=" w-full h-full object-cover rounded-lg" />
        <div className="flex flex-col gap-4">
        <Image src={property.image} alt={property.name} className=" w-full h-96 object-cover rounded-lg" />
        <div className="flex gap-2">
        <Image src={property.image} alt={property.name} className=" w-1/2 h-96 object-cover rounded-lg" />
        <Image src={property.image} alt={property.name} className=" w-1/2 h-96 object-cover rounded-lg" />
         </div>
        </div>
      </div>

      <div className=" flex md:flex-row flex-col gap-4 my-6">
        <div className="col-span-2">
            {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold my-6">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
        </div>
        
      <BookingSection price={property.price}/>
      </div>

      
    </div>
  );
};

export default PropertyDetail;