// this will include all constants used in the app
import { PropertyProps } from "@/interfaces";
import Amazing_pool from '@/public/assets/logos/Amazing pool.svg';
import Beach_house from '@/public/assets/logos/Beach house.svg';
import Island from '@/public/assets/logos/Island.svg';
import Mansion from '@/public/assets/logos/Mansion.svg';
import New from '@/public/assets/logos/New.svg';
import Rooms from '@/public/assets/logos/Rooms.svg';
import Villa from '@/public/assets/logos/Villa.svg';
import Treehouse from '@/public/assets/logos/Treehouse.svg';
import Tropical from '@/public/assets/logos/Tropical.svg';
import Hero from '@/public/assets/Hero.png';
import image1 from '@/public/assets/listing/image 3.png';
import image2 from '@/public/assets/listing/image 4.png';
import image3 from '@/public/assets/listing/image 6.png';
import image4 from '@/public/assets/listing/image 7.png';
import image5 from '@/public/assets/listing/image 8.png';
import image6 from '@/public/assets/listing/image 9.png';
import image7 from '@/public/assets/listing/image 12.png';
import image8 from '@/public/assets/listing/image 17.png';
import image9 from '@/public/assets/listing/image 18.png';
import image10 from '@/public/assets/listing/List 1.png';
import image11 from '@/public/assets/listing/List 4.png';
import image12 from '@/public/assets/listing/List 9.png';
import image13 from '@/public/assets/listing/List 10.png';
import image14 from '@/public/assets/listing/List 12.png';
import image15 from '@/public/assets/listing/List 14.png';
import image16 from '@/public/assets/listing/List 13.png';
import avatar1 from '@/public/assets/details/image 25.png'
import avatar2 from '@/public/assets/details/image 25(1).png'
import avatar3 from '@/public/assets/details/image 25(2).png'
import avatar4 from '@/public/assets/details/image 25(3).png'
export const HEROIMAGE = Hero;
export const CATEGORIES = [
    {
        name: 'Amazing Pool',
        icon: Amazing_pool
    },
    {
        name: 'Beach House',
        icon: Beach_house
    },
    {
        name: 'Island',
        icon: Island
    },
    {
        name: 'Mansion',
        icon: Mansion
    },
    {
        name: 'New',
        icon: New
    },
    {
        name: 'Rooms',
        icon: Rooms
    },
    {
        name: 'Villa',
        icon: Villa
    },
    {
        name: 'Treehouse',
        icon: Treehouse
    },
    {
        name: 'Tropical',
        icon: Tropical
    }
];

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: image1,
    discount: "",
    description:
      "Nestled in the vibrant neighborhood of Seminyak, Villa Ocean Breeze combines refined Balinese craftsmanship with contemporary comforts. Mornings bring gentle ocean breezes and the private pool is framed by lush palms — an ideal spot for breakfast or an evening sundowner. Interiors feature hand-carved furnishings, soft linens, and large windows that fill the space with daylight, while nearby local restaurants and beaches are just a short drive away.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 5,
        comment:
          "A stunning villa — the pool and ocean breeze made our stay unforgettable. Spotless and very welcoming host."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.7,
        comment:
          "Beautiful design and close to the beach. Perfect for a relaxed family holiday; minor note on kitchen cookware."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.9,
        comment:
          "Loved the Balinese decor and spacious bedrooms. Great location for exploring Seminyak's cafes and shops."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.8,
        comment:
          "Exceptional hospitality and privacy. Pool area was pristine — highly recommended for families."
      }
    ]
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: image2,
    discount: "30",
    description:
      "Tucked into a quiet slope outside Aspen, this chalet offers sweeping mountain vistas and rustic luxury. Spend days skiing or hiking, then warm up beside the stone fireplace with hot chocolate; large windows capture dramatic sunrise and sunset colors. Practical amenities like a self-checkin system and heated boot room make this a comfortable base for outdoor-loving families or groups.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.6,
        comment:
          "Cozy and spacious — perfect for a ski trip. Fireplace was a real highlight after long days outdoors."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.4,
        comment:
          "Great views and comfortable living area. A little drive to town but totally worth the serenity."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.7,
        comment:
          "Well-equipped kitchen and warm bedding. The location felt private and peaceful."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.5,
        comment:
          "Excellent stay for nature lovers. Host was quick to respond to our questions about local trails."
      }
    ]
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: image3,
    discount: "",
    description:
      "This tasteful desert home blends minimal modern design with warm, sunlit spaces for a restful getaway. Enjoy wide desert vistas from the private patio, a carefully curated interior, and pet-friendly facilities for travelling companions. The property’s quiet location makes it perfect for couples seeking privacy, while proximity to local attractions keeps daytime options open.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 5,
        comment:
          "Peaceful, stylish and bright — exactly what we needed. Loved that it was pet-friendly."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.8,
        comment:
          "Clean, modern, and close to sights. The patio view at sunrise was gorgeous."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.9,
        comment:
          "Perfect for a slow getaway. Comfortable bed and well-thought-out interior details."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.6,
        comment:
          "Great host and quick check-in. Would stay again for the desert calm."
      }
    ]
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: image4,
    discount: "15",
    description:
      "Perched above the city, this penthouse provides cinematic skyline views and stylish modern living suited to both business and romantic stays. Floor-to-ceiling windows, plush seating, and an open-plan kitchen create an airy, sophisticated atmosphere. The building’s 24h check-in and reliable WiFi make it a practical choice for late arrivals and remote work alike.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.9,
        comment:
          "Breathtaking skyline views and excellent location. The interiors felt high-end and comfortable."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.6,
        comment:
          "Great for a weekend in the city. Very convenient and well-appointed rooms."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.7,
        comment:
          "Amazing view at night — felt like living in a movie. Clean and well-managed."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.8,
        comment:
          "Perfect location for restaurants and shows. Highly recommend for couples."
      }
    ]
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: image5,
    discount: "20",
    description:
      "Set on the river’s edge, this cabin blends rustic charm with thoughtful modern comforts, creating an immersive nature escape. Mornings on the private dock bring misty waters and bird life, while complimentary kayaks invite leisurely paddles under alpine skies. Inside, warm timber finishes, cozy seating, and large windows connect guests with the surrounding landscape.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.8,
        comment:
          "Magical location — the dock and kayaks were the highlight. Comfortable and clean cabin."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.6,
        comment:
          "Peaceful setting and great for outdoor activities. Kitchen had everything we needed."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.7,
        comment:
          "Loved waking up to the river — so tranquil. Beds were comfy and the living area warm."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.5,
        comment:
          "Excellent family getaway. Host gave great local recommendations for hikes and dining."
      }
    ]
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: image6,
    discount: "",
    description:
      "A statement of luxury on the shore, this five-bedroom villa features an infinity pool, expansive terraces, and a dedicated chef service to craft bespoke meals. Interiors are airy and contemporary, with large openings that bring sea breezes and panoramic ocean views into living spaces. Tailored for groups or families seeking high-end privacy and attentive service, the villa delivers a serene, resort-like experience.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 5,
        comment:
          "Truly exceptional — private pool and chef service made our stay effortless and indulgent."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.9,
        comment:
          "Amazing location and luxurious amenities. Rooms are spacious and very comfortable."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.8,
        comment:
          "Perfect for a large family — everything was pristine and the staff were professional."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.7,
        comment:
          "Stunning design and incredible sea views. Would come back in a heartbeat."
      }
    ]
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: image7,
    discount: "10",
    description:
      "This chalet sits beside a pristine lake with majestic mountain backdrops and easy access to hiking trails. Large windows and a rustic-modern interior invite guests to relax and take in the scenery, while outdoor seating offers ideal sunset viewing spots. Facilities are family-friendly and practical for multi-day outdoor adventures.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.4,
        comment:
          "Beautiful location and comfy interiors. Great base for hikes and canoeing."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.2,
        comment:
          "Lovely views but a short drive to amenities. Perfect if you want to disconnect."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.6,
        comment:
          "Cozy chalet with a great vibe. We had a peaceful, restorative stay."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.5,
        comment:
          "Clean and well-located for nature lovers; hosts were friendly and helpful."
      }
    ]
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: image8,
    discount: "25",
    description:
      "Hidden within verdant gardens, this villa offers calm, privacy, and direct access to nature paths and shaded terraces. Interiors are bright and breezy, opening to outdoor dining and lounging areas that make al fresco meals a delight. With free parking and simple self-checkin, it’s a practical yet beautiful option for families and groups wanting a peaceful tropical stay.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.7,
        comment:
          "A green sanctuary with lovely outdoor spaces. Great for unwinding and family time."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.5,
        comment:
          "Quiet and refreshing — the garden was stunning. Easy self-checkin was convenient."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.8,
        comment:
          "Beautifully maintained and comfortable. Close enough to beaches for day trips."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.6,
        comment:
          "Lovely hosts and a serene environment. Perfect for a restful holiday."
      }
    ]
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: image9,
    discount: "",
    description:
      "Set in the heart of Berlin, this loft captures urban character with exposed brick, industrial details, and modern conveniences. The compact but thoughtful layout is ideal for couples or solo travellers who want to be steps away from cafes, galleries, and nightlife. Reliable WiFi and 24h check-in make it practical for both leisure and work stays.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.5,
        comment:
          "Stylish and centrally located — perfect for exploring Berlin on foot. Clean and comfortable."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.2,
        comment:
          "Great vibe and close to many attractions. Compact but charming."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.6,
        comment:
          "Easy transport links and cozy interior. Good value for the location."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.3,
        comment:
          "Friendly host and practical amenities. Loved the local café recommendations."
      }
    ]
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: image10,
    discount: "40",
    description:
      "A private retreat surrounded by towering evergreens, this cabin is designed for total relaxation and outdoor adventure. Unwind in the outdoor hot tub beneath a canopy of stars, or cozy up indoors by the wood-accented living area after days of skiing or hiking. Self check-in and spacious common areas make it an easy, comfortable option for larger groups.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.8,
        comment:
          "Romantic hot tub nights and serene surroundings — loved every minute. Great for groups."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.5,
        comment:
          "Perfect for a nature escape. Very private and peaceful; great host communication."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.6,
        comment:
          "Warm and comfortable cabin that felt like home. Easy access to local trails."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.4,
        comment:
          "Well-equipped and lovely location. Hot tub was the crowning feature of our stay."
      }
    ]
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: image11,
    discount: "50",
    description:
      "Perched on the Amalfi cliffs, this villa delivers unmatched Mediterranean panoramas and a dramatic infinity pool that appears to spill into the sea. Interiors reflect Italian elegance with hand-finished details, sumptuous linens, and large terraces for alfresco dining. Ideal for special occasions or intimate luxury escapes, the property combines seclusion with easy access to charming coastal towns.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 5,
        comment:
          "Absolutely breathtaking views and a stunning pool — an unforgettable stay. Impeccable service."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.9,
        comment:
          "Perfectly located for coastal drives and seafood dinners. Very luxurious and private."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.8,
        comment:
          "Elegant design and spectacular sea views. Highly recommended for a romantic getaway."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.7,
        comment:
          "Dreamlike setting and first-class amenities. A must-stay on the Amalfi Coast."
      }
    ]
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: image12,
    discount: "",
    description:
      "A bright, family-friendly villa overlooking Noosa’s pristine shoreline, offering direct beach access and ample outdoor space for relaxation. The layout encourages indoor-outdoor living with breezy terraces, a BBQ area, and family-focused amenities, while being pet-friendly keeps the whole family together. Local cafes and national parks are a short drive away for day excursions.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.9,
        comment:
          "Family-friendly and perfectly located — the beach was right there. Everyone loved it."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.6,
        comment:
          "Comfortable rooms and great outdoor space. Ideal for families with pets."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.7,
        comment:
          "Clean, bright, and a short walk to shops. Wonderful host and easy communication."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.5,
        comment:
          "Lovely coastal vibe and great for kids. Would stay again during summer."
      }
    ]
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: image13,
    discount: "35",
    description:
      "This lovingly restored Florentine villa blends authentic historical features with modern comforts — think exposed beams, terracotta tiles, and antique touches alongside updated bathrooms and kitchen. Guests enjoy a complimentary local-style breakfast and a tranquil courtyard for morning coffee. Located within easy reach of museums, piazzas, and artisan shops, it’s a cultural base for exploring Tuscany.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.6,
        comment:
          "Charming villa with real Tuscan character. Breakfast was delightful and the location ideal."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.4,
        comment:
          "Authentic feel and comfortable rooms. A wonderful spot for exploring Florence."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.7,
        comment:
          "Beautiful restoration and helpful host tips for local dining. Very peaceful courtyard."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.5,
        comment:
          "Great blend of history and comfort. We enjoyed the nearby markets and walks."
      }
    ]
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: image14,
    discount: "",
    description:
      "A sleek downtown apartment that places guests within Tokyo’s vibrant urban fabric — close to transport, cafes, and cultural hotspots. Compact but intelligently designed, the apartment includes modern appliances, fast WiFi, and a comfortable living area ideal for short stays. Whether you’re here for business or leisure, the central location makes sightseeing efficient and enjoyable.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.8,
        comment:
          "Practical and perfectly located — excellent for city exploration and easy transit access."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.6,
        comment:
          "Clean and modern with everything we needed. Great hosts and clear instructions."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.7,
        comment:
          "Comfortable bed and fast WiFi — ideal for remote work and sightseeing."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.5,
        comment:
          "Central location made getting around simple. Small but very efficient layout."
      }
    ]
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: image15,
    discount: "20",
    description:
      "Experience the Serengeti in unrivaled comfort at this luxury safari lodge offering guided game drives, spacious suites, and panoramic views of the savannah. Each suite blends local craftsmanship with high-end amenities, and mornings are punctuated by wildlife sightings and expertly guided tours. Gourmet meals and an attentive team ensure a memorable, immersive African safari experience.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 5,
        comment:
          "Incredible safari lodge — luxurious accommodations and superb guides. Saw lions on our second drive!"
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.9,
        comment:
          "Top-notch service and amazing wildlife experiences. The food was exceptional too."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.8,
        comment:
          "Spectacular setting and very professional guides. Comfortable suites with great views."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.7,
        comment:
          "A once-in-a-lifetime trip. Everything was well-organized and truly memorable."
      }
    ]
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: image16,
    discount: "25",
    description:
      "Charming and quintessentially English, this countryside cottage offers a cozy fireplace, exposed beams, and a garden perfect for tea on sunny afternoons. Located in a peaceful village setting, it’s ideal for couples looking to explore rolling hills and nearby historic towns. Practical amenities and straightforward self-checkin make the stay both nostalgic and hassle-free.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.3,
        comment:
          "Lovely cottage with lots of character. Very relaxing and a great base for countryside walks."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.1,
        comment:
          "Cozy and quaint — perfect for a quiet break. Kitchen could use a few more utensils."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.5,
        comment:
          "Beautiful location and comfortable interior. We enjoyed exploring nearby villages."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.2,
        comment:
          "Charming cottage and friendly host. A peaceful stay overall."
      }
    ]
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "https://example.com/image17.jpg",
    discount: "30",
    description:
      "This elegant Parisian mansion on the riverbank blends classical style with contemporary comforts, offering manicured private gardens and sweeping city views. Grand entertaining spaces, refined bedrooms, and tasteful decor create an air of timeless luxury. With self-checkin and an excellent location, guests have direct access to riverside walks, cafes, and cultural highlights.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.9,
        comment:
          "Beautifully restored mansion with a dreamy river view. Great for large groups."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.7,
        comment:
          "Spacious and elegant — perfect for a special occasion. Close to major attractions."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.6,
        comment:
          "Lovely garden and comfortable rooms. Enjoyed evening walks along the river."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.5,
        comment:
          "Great location and charming interiors. Host provided excellent local tips."
      }
    ]
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image18.jpg",
    discount: "",
    description:
      "Set in the iconic Alps near Zermatt, this chalet offers direct ski access and dramatic alpine views from every window. The living area centers on a warm fireplace for après-ski relaxation, and functional storage keeps gear organized for active guests. Comfortable bedrooms and high-quality linens ensure restful nights after full days on the slopes.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.7,
        comment:
          "Excellent for ski lovers — direct access and cozy living space. Very comfortable stay."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.5,
        comment:
          "Warm interiors and handy location. The views were spectacular."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.6,
        comment:
          "Great base for skiing and mountain hikes. Well-equipped and clean."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.4,
        comment:
          "Had a wonderful time. Fireplace made evenings extra cozy."
      }
    ]
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "https://example.com/image19.jpg",
    discount: "60",
    description:
      "This spectacular villa on Mahe Island offers private beaches, a crystalline pool, and dedicated chef service for a fully curated island experience. Each suite opens to sea breezes and tropical foliage, while handcrafted interiors echo the island’s relaxed elegance. Perfect for large groups or families seeking a luxurious, secluded escape with concierge-level service.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 5,
        comment:
          "Absolute paradise — private beach and incredible food from the chef. Unforgettable!"
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.9,
        comment:
          "Top-tier luxury and amazing service. The villa exceeded our expectations."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.8,
        comment:
          "Stunning location and comfortable suites. Perfect for a family celebration."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.7,
        comment:
          "Beautiful property and attentive staff. Highly recommended for a special trip."
      }
    ]
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image20.jpg",
    discount: "",
    description:
      "This clifftop home offers sweeping ocean views, a private pool, and modern decor for an intimate coastal retreat. Large windows and terraces create dramatic vantage points for whale and sunset watching, while nearby beaches and wineries are within easy reach. Self checkin and practical amenities make this a seamless escape for couples or small groups seeking privacy and scenery.",
    reviews: [
      {
        name: "Aisha Bello",
        avatar: avatar1,
        rating: 4.8,
        comment:
          "Fantastic views and a beautiful pool area. Great spot for relaxing and coastal exploration."
      },
      {
        name: "John Michael",
        avatar: avatar2,
        rating: 4.5,
        comment:
          "Stylish and peaceful — ideal for a romantic break. Easy access to local tours."
      },
      {
        name: "Fatima Yusuf",
        avatar: avatar3,
        rating: 4.6,
        comment:
          "Loved the sunsets from the terrace. Comfortable beds and a well-equipped kitchen."
      },
      {
        name: "Olamide Johnson",
        avatar: avatar4,
        rating: 4.4,
        comment:
          "A serene hideaway with impressive coastal views. Host left helpful local guides."
      }
    ]
  }
];
