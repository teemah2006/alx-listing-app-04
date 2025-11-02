import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { reviewProps } from "@/interfaces";
const ReviewSection: React.FC<{ propertyId: any }> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<reviewProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try{
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="mt-8 p-4 w-1/2">
      <h3 className="text-2xl font-semibold ">Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      {reviews.map((review, index) => (
        <div key={index} className=" pb-4 mb-4">
          <div className="flex items-center">
            <Image src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-yellow-500">{review.rating} stars</p>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ReviewSection;