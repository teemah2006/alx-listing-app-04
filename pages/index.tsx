import { HEROIMAGE } from "@/constants";
import Image from "next/image";
import Pill from "@/components/common/Pill";
import {PROPERTYLISTINGSAMPLE} from "@/constants";
import Card from "@/components/common/Card";
import { useState } from "react";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const categoryList = ["All", "Top villa", "Free Reschedule", "Book Now, Pay later", "Self Checkin", "Instant Book"];


  const filteredProperties = selectedCategory === "All"
    ? PROPERTYLISTINGSAMPLE
    : PROPERTYLISTINGSAMPLE.filter(property =>
        property.category.includes(selectedCategory)
      );
  return (
    <div className="w-full h-full lg:px-10 md:px-8 px-4 py-4">
      <div className="w-full h-[250px] lg:h-[400px] rounded-lg overflow-hidden  relative">
        <Image src={HEROIMAGE} alt="Hero" className="w-full h-full  object-cover rounded-lg" />
      </div>
      {/* filter section */}
      <div className="w-full flex space-x-4 overflow-x-auto mt-4 py-2">
        {
          categoryList.map((category) => (
            <Pill 
              key={category} 
              title={category} 
              active={selectedCategory === category} 
              onClick={() => handleCategorySelect(category)} 
            />
          ))
        }
        
      </div>
      {/* property listing section */}
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6 gap-y-16 mt-4 justify-center items-center">
        {filteredProperties.map((property, index) => (
          <Card
            key={index}
            name={property.name}
            address={property.address}
            rating={property.rating}
            category={property.category}
            price={property.price}
            offers={property.offers}
            image={property.image}
            discount={property.discount}
            description={property.description}
            reviews={property.reviews}
          />
        ))}
      </div>
      
    </div>
  );
}
