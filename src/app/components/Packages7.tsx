"use client";
import React from "react";

const packagesData = {
  "Social Marketing": [
    {
      price: "$300",
      title: "Basic Plan",
      features: [
      " Prior Analysis",
"Business Analysis",
"Consumer Analysis",
"Competitor Analysis",
"15 Selected Keywords Targeting",
"15 Pages Keyword Targeted",
"Webpage Optimization",
"Meta Tags Creation",
"Keyword Optimization",
"Image Optimization",
"Inclusion of anchors",
"Tracking Analysis",
"Google Analytics Installation",
"Google Webmaster Installation",
"Call To Action Plan",
"Creation of Sitemaps",
"Reporting",
"Monthly Reporting",
"Recommendation",
"Email Support",
"Phone Support",
"Off Page Optimization",
"Social Bookmarking",
"Slide Share Marketing",
"Forums/FAQ’s",
"Link Building",
"Directory Submission",
"Local Business Listings",
      ],
    },
    {
      price: "$599",
      title: "Premium Plan",
      features: [
         "Prior Analysis",
         
   "Business Analysis",
   "Consumer Analysis",
"Competitor Analysis",
   "30 Selected Keywords Targeting",
   "30 Pages Keyword Targeted",
   "Webpage Optimization",
   "Meta Tags Creation",
   "Keyword Optimization",
   "Image Optimization",
   "Inclusion of anchors Tags",
   "Inclusion of anchors Indexing Modifications",
   "Tracking Analysis",
   "Google Places Inclusions",
   "Google Analytics Installation",
   "Google Webmaster Installation",
   "Call To Action Plan",
   "Creation of Sitemaps",
   "Reporting",
   "Monthly Reporting",
   "Recommendation",
   "Email Support",
   "Phone Support",
   "Off PageOptimization",
   "Social Bookmarking",
   "Slide Share Marketing",
   "Forums/FAQ’s",
   "Link Building",
   "Directory Submission",
   "Local Business Listings",
      ],
    },
    {
      price: "$2119",
      title: "Platinum Plan",
      features: [
             "Prior Analysis",
  "Business Analysis",
  "Consumer Analysis",
  "Competitor Analysis",
  "70 Selected Keywords Targeting",
  "50 Pages Keyword Targeted",
  "Webpage Optimization",
  "Meta Tags Creation",
  "Keyword Optimization",
  "Image Optimization",
  "Inclusion of anchors Tags",
  "Inclusion of anchors Indexing Modifications",
  "Tracking Analysis",
  "Google Places Inclusions",
  "Google Analytics Installation",
  "Google Webmaster Installation",
  "Call To Action Plan",
  "Creation of Sitemaps",
  "Reporting",
  "Monthly Reporting",
  "Recommendation",
  "Email Support",
  "Phone Support",
  "Off Page Optimization",
  "Social Bookmarking",
  "Slide Share Marketing",
  "Forums/FAQ’s",
  "Link Building",
  "Directory Submission",
  "Local Business Listings",
  "Blog Content Creation",
  "Local SEO  ",
      ],
    },
    
 
  ],
};

const PackagesTailwind = () => {
  const socialPackages = packagesData["Social Marketing"]; // ✅ Correct key used

  return (
    <div className="py-12 px-4 text-center bg-gray-100">
      <h2 className="text-3xl text-black font-bold mb-2">
        Most Affordable Packages
      </h2>
      <p className="text-gray-600 mb-10">
        We are well aware of the competition. That is the reason why we have a
        fair pricing model. <br />
        We ensure quality over quantity on each order.
      </p>

      {/* ✅ Packages Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {socialPackages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-sky-400 to-sky-600 text-white rounded-xl w-80 p-6 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl font-bold mb-2">{pkg.price}</div>
              <div className="text-xl font-medium capitalize mb-4">
                {pkg.title}
              </div>
              <hr className="border-white border-opacity-30 mb-4" />
              <ul className="text-left space-y-2 max-h-56 overflow-y-auto pr-2 text-sm">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-white mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-2">
              <button className="w-full bg-white text-sky-600 font-bold py-2 rounded hover:bg-sky-100 transition">
                ORDER NOW
              </button>
              <button className="w-full bg-white text-sky-600 font-bold py-2 rounded hover:bg-sky-100 transition text-sm">
                Click here for <b>Live Chat</b>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesTailwind;
