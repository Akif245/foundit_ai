// import React, { useEffect, useState } from "react";
// import ItemCard from "../components/ItemCard";
// import { apiRequest } from "../utils/api";

// const images = [
//   {
//     src: "https://mvsrec.edu.in/2025/images/gallery/gallery-lg3.jpg",
//     alt: "MVSR Campus 1",
//   },
//   {
//     src: "https://pbs.twimg.com/media/DFgjGk-UAAAwoDB.jpg",
//     alt: "MVSR Campus 2",
//   },
//   {
//     src: "https://pbs.twimg.com/media/GVA83zhXoAAU-uA?format=jpg&name=large",
//     alt: "MVSR Campus 3",
//   },
// ];

// export default function Home() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [items, setItems] = useState([]);

//   // Carousel logic
//   const prevSlide = () =>
//     setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

//   const nextSlide = () =>
//     setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

//   // Fetch lost items
//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const data = await apiRequest("/api/items");
//         setItems(data);
//       } catch (err) {
//         console.error("Failed to fetch items", err);
//       }
//     };

//     fetchItems();
//   }, []);

//   return (
//     <>
//       {/* ===== FULL SCREEN HERO CAROUSEL ===== */}
//       <section className="relative w-full h-screen overflow-hidden">
//         {/* Images */}
//         {images.map((img, idx) => (
//           <div
//             key={idx}
//             className={`absolute inset-0 transition-opacity duration-700 ${
//               idx === activeIndex ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={img.src}
//               alt={img.alt}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Text */}
//         <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
//           <h1 className="text-white text-2xl md:text-4xl font-bold max-w-4xl leading-snug">
//             Bringing the MVSR community together to recover lost belongings.
//           </h1>
//         </div>

//         {/* Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white px-4 py-2 rounded-full text-xl"
//         >
//           ◀
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white px-4 py-2 rounded-full text-xl"
//         >
//           ▶
//         </button>
//       </section>

//       {/* ===== Lost Items Section ===== */}
//       <section className="max-w-6xl mx-auto mt-12 px-6 pb-16">
//         <h2 className="text-2xl font-bold mb-6 text-left">Lost Items</h2>

//         {items.length === 0 ? (
//           <p className="text-gray-500">No lost items reported yet.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {items.map((item) => (
//               <ItemCard key={item._id} item={item} />
//             ))}
//           </div>
//         )}
//       </section>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { apiRequest } from "../utils/api";

const images = [
  {
    src: "https://mvsrec.edu.in/2025/images/gallery/gallery-lg3.jpg",
    alt: "MVSR Campus 1",
  },
  {
    src: "https://pbs.twimg.com/media/DFgjGk-UAAAwoDB.jpg",
    alt: "MVSR Campus 2",
  },
  {
    src: "https://pbs.twimg.com/media/GVA83zhXoAAU-uA?format=jpg&name=large",
    alt: "MVSR Campus 3",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState([]);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextSlide = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await apiRequest("/api/items");
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch items", err);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      {/* ===== FULL SCREEN HERO CAROUSEL ===== */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Images */}
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-3xl bg-white/10 backdrop-blur-md px-6 py-8 rounded-2xl shadow-xl border border-white/20">
            <h1 className="text-white text-2xl md:text-5xl font-extrabold leading-snug">
              Bringing the MVSR community together to recover lost belongings.
            </h1>
            <p className="text-gray-200 mt-4 text-sm md:text-base">
              Report lost items • Find found items • Help others easily
            </p>
          </div>
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 
          bg-white/20 hover:bg-white/40 transition 
          text-white px-4 py-3 rounded-full text-2xl shadow-lg backdrop-blur-md"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 
          bg-white/20 hover:bg-white/40 transition 
          text-white px-4 py-3 rounded-full text-2xl shadow-lg backdrop-blur-md"
        >
          
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-3 w-3 rounded-full transition ${
                activeIndex === i ? "bg-white scale-125" : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </section>

{/* ===== Lost Items Section ===== */}
<section className="w-full bg-gray-900">
  <div className="max-w-6xl mx-auto px-6 py-20">
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl font-extrabold text-white">Lost Items</h2>

      <span className="text-sm text-gray-300 bg-gray-800 px-4 py-1 rounded-full">
        Total: {items.length}
      </span>
    </div>

    {items.length === 0 ? (
      <p className="text-gray-300 bg-gray-800 p-6 rounded-xl text-center">
        No lost items reported yet.
      </p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    )}
  </div>
</section>

    </>
  );
}
