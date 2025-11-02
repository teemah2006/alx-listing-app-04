import { HEROIMAGE } from "@/constants";
import Image from "next/image";
import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";
import axios from "axios";
import { useState,  useEffect } from "react";
import { PropertyProps } from "@/interfaces";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [properties, setProperties] = useState<PropertyProps[]| []>([]);
  const [loading, setLoading] = useState(true);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const categoryList = ["All", "Top villa", "Free Reschedule", "Book Now, Pay later", "Self Checkin", "Instant Book"];
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredProperties = selectedCategory === "All"
    ? properties
    : properties.filter(property =>
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
            property={property}
          />
        ))}
      </div>
      
    </div>
  );
}
