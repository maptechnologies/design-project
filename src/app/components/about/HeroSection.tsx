
// // ---------------- HERO WITH CARDS ----------------
// const HeroWithCards: React.FC = () => {
//   const cards = [
//     { title: "", text: ".", img: "/iamge/exper-img-2.webp", position: "top" },
//     { title: "", text: ".", img: "/iamge/exper-img-1.webp", position: "center" },
//     {
//       title: "Experienced Award-Winning Certified Company Where We Are Today",
//       text: "Bloops Design was founded in 2010. Today, we have a huge portfolio of logo, website and branding projects.",
//       position: "bottom",
//       button: true,
//     },
//   ];

import { Sliders } from "lucide-react";
import Slider from "../Herosection";

//   const coreValues = [
//     {
//       title: "Service",
//       description:
//         "Bloops Design drives digital sales and illustrates relatable moments of your brand by communicating your brand’s voice.",
//       image: "/iamge/service-img-3 (1).webp",
//     },
//     {
//       title: "Quality",
//       description:
//         "We craft high-quality, vibrant, and bespoke brand experiences with innovation.",
//       image: "/iamge/service-img-2 (1).webp",
//     },
//     {
//       title: "Team Work",
//       description:
//         "We work like your very own creative team — not just another hired agency.",
//       image: "/iamge/service-img-1.webp",
//     },
//   ];

//   const stats = [
//     { number: "500+", label: "happy customers" },
//     { number: "180+", label: "experienced designers" },
//     { number: "10+", label: "years in the industry" },
//     { number: "400+", label: "website designed" },
//     { number: "600+", label: "logo designed" },
//   ];

//   return (
//     <div className="flex flex-col">
//       {/* ✅ Hero Section */}
//       <div
//         className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center overflow-hidden"
//         style={{
//           backgroundImage: "url('public/iamge/istockphoto-2161298305-612x612.webp')",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-sky-200/60 to-green-300/60"></div>

//         <div className="relative text-center max-w-3xl animate__animated animate__fadeInUp z-10">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
//             WE ARE MORE THAN JUST <br /> AN AVERAGE BRAND AGENCY
//           </h1>
//           <p className="mt-4 text-lg text-black font-bold">
//             We develop a strong brand identity that connects <br />
//             with your audience!
//           </p>
//           <button className="mt-6 bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-200 hover:text-black transition font-semibold">
//             Read More
//           </button>
//         </div>

//         {/* Left Images */}
//         <div className="absolute left-10 top-1/4 space-y-4 hidden md:block z-10">
//           <img
//             src="/iamge/halcon-1310548.webp"
//             alt="Work"
//             className="w-32 rounded shadow-lg animate__animated animate__fadeInLeft"
//           />
//           <img
//             src="/iamge/istockphoto-1289303735-612x612.jpg"
//             alt="Work"
//             className="w-40 rounded shadow-lg animate__animated animate__fadeInLeft animate__delay-1s"
//           />
//         </div>

//         {/* Right Images */}
//         <div className="absolute right-10 top-1/4 space-y-4 hidden md:block z-10">
//           <img
//             src="/iamge/istockphoto-1132292535-612x612 (1).jpg"
//             alt="Work"
//             className="w-32 rounded shadow-lg animate__animated animate__fadeInRight"
//           />
//           <img
//             src="/iamge/istockphoto-1266156392-612x612.jpg"
//             alt="Work"
//             className="w-40 rounded shadow-lg animate__animated animate__fadeInRight animate__delay-1s"
//           />
//         </div>
//       </div>

//       {/* ✅ Cards */}
//       <div className="bg-gray-100 py-16 px-6">
//         <div className="max-w-7xl mx-auto grid text-black md:grid-cols-3 gap-10">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="relative bg-white rounded-xl shadow-lg overflow-hidden text-black transform transition duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp"
//             >
//               {card.img && (
//                 <img
//                   src={card.img}
//                   alt={card.title}
//                   className="w-full h-80 object-cover"
//                 />
//               )}
//               <div
//                 className={`absolute text-white p-4 w-full ${
//                   card.position === "top"
//                     ? "top-4 text-center"
//                     : card.position === "center"
//                     ? "top-1/2 transform -translate-y-1/2 text-center"
//                     : "bottom-4 text-center"
//                 }`}
//               >
//                 <h3 className="text-xl font-bold drop-shadow-lg">{card.title}</h3>
//                 <p className="text-sm mt-2 drop-shadow-md">{card.text}</p>
//                 {card.button && (
//                   <button className="mt-4 px-6 py-2 border-2 border-green-400 text-green-500 font-semibold rounded-full hover:bg-green-400 hover:text-white transition">
//                     Lets Get Started
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Core Values */}
//       <section className="bg-pink-50 py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
//         </div>
//         <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//           {coreValues.map((value, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-2xl p-6 text-center"
//             >
//               <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full shadow-md">
//                 <img
//                   src={value.image}
//                   alt={value.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {value.title}
//               </h3>
//               <p className="mt-3 text-gray-600 text-sm">{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Stats */}
//       <div className="bg-black text-white py-16">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
//           <h2 className="text-3xl font-bold">Hitting New Records</h2>
//           <div className="flex flex-wrap justify-center gap-10 text-center flex-1">
//             {stats.map((stat, i) => (
//               <div key={i}>
//                 <h3 className="text-3xl font-extrabold">{stat.number}</h3>
//                 <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ✅ Work Process */}
//       <WorkProcess />

//       {/* ✅ Awards */}
//       <Awards />

//       {/* ✅ Features */}
//       <Features />
//     </div>
//   );
// };
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Kandra West-Pettigrew",
      review:
        "Experience was very engaging, prompt replies, affordable pricing with unlimited edits. Process took a bit longer than expected, but the last few edits after initial appwas met with cooperation. Would recommend for sure! Thank you Karen/Alex and dteam!",
      rating: 5,
    },
    {
      name: "Top Quality Motors",
      review:
        "“Excellent job creating our logo and website. They listened to what we wanted and gave us our logo in all the formats that we needed. Their pricing is more than reasonable for the work that they did for us. We would highly recommend to others. Special thanks toVeronica and team for her artwork on this project.”c.",
      rating: 5,
    },
    {
      name: "Sean J Harrison",
      review:
        "“It was a great experience working with Websites Design Agency. Their team developed thewebsite for our brand on very short notice. The refresh rate of our website is wayfaster than before. Overall the whole website performance is great now. Thanks”.",
      rating: 4,
    },
    {
      name: "Vic Owens",
      review:
        "“Excellent job creating our logo for sports major league. They listened to what we wanted and gave us our logo in all the formats that we needed. Their pricing is more than reasonable for the work that they did for us. We would highly recommend Websites Design Agency to others. Special thanks to Karen for her artwork on this project.”.",
      rating: 4,
    },
    {
      name: "Peggy Northcott",
      review:
      "“They were very prompt to reply. They listened to what I needed and had reasonably priced packages to choose from. They had a quick turn around time and we’re professional to deal with. The line connection they used was very broken and caused multiple dropped calls which remote communication through email than I would have preferred.”.",
      rating: 4,
    },
    {
      name: "Esther",
      review:
        "“Very compelling and looked for a solution to work within my budget, Kevin spent a lot otime explaining how everything worked in detail and was very fair and reasonable witpricing.”.",
      rating: 4,
    },
    {
      name: "Braden Thompson",
      review:
        "“Amazing to work with, fast responses and very high quality work!”.",
      rating: 4,
    },
    {
      name: "Tammy rubin",
      review:
        "“Kevin was very patient, good at explaining the work to be done and how. well done Kevin.",
      rating: 4,
    },
    {
      name: "Cristina Frasca",
      review:
        "“Very helpful, amazing service very happy”.",
      rating: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <section
      className="relative w-full py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/testimonial-bg.jpg')" }} // ✅ apni image ka path do
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Testimonials</h2>
          <p className="text-gray-200 mt-2">Our Happy Clients</p>
        </div>

        {/* Slider */}
        <Sliders {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-6">
              <div className="bg-white text-gray-800 rounded-xl shadow-lg p-10 max-w-3xl mx-auto">
                {/* Name */}
                <h3 className="text-xl font-semibold text-center">{t.name}</h3>

                {/* Stars */}
                <div className="flex justify-center mt-2 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 text-center leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>
            </div>
          ))}
        </Sliders>
      </div>
    </section>
  );
};

