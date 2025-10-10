"use client";
import React from "react";

const packagesData = {
  "Social Marketing": [
    {
      price: "$319",
      title: "Web Content Basic Package",
      features: [
       "1 Page Professional Copywriting Service",
"Creative & Well-Written by 1 Professional Copywriter",
"Industry Specified Expert Copywriter",
"300 Words Per Page",
"5 Revisions",
"3 to 4 Business Days Rotation",
"According To Your Exact Requirements",
"Proofing by our in-house experts",
"100% Ownership Rights",
"100% Original Content",
"100% Approval Assurance",
"30 Days Refund Warranty",
"Unlimited Revisions",
"Unlimited Revisions",
      ],
    },
    {
      price: "$1119",
      title: "Web Content Starter Package",
      features: [
          "5 Pages Professional Copywriting Service",
"Creative & Well-Written by 2 Professional Copywriters",
"Industry Specified Expert Copywriters",
"300 Words Per Page",
"10 Revisions",
"5 to 7 Business Days Rotation",
"According To Your Exact Requirements",
"Proofing by our in-house experts",
"FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description",
"SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner",
"100% Ownership Rights",
"100% Original Content",
"100% Approval Assurance",
"30 Days Refund Warranty",
"Unlimited Revisions",
        
      ],
    },
    {
      price: "$2119",
      title: "Web Content Professional Package",
      features: [
        "10 Pages Professional Copywriting Service",
"Creative & Well-Written by 2 Professional Copywriters",
"Industry Specified Expert Copywriters",
"300 Words Per Page",
"Unlimited Revisions",
"7 to 10 Business Days Rotation",
"According To Your Exact Requirements",
"Proofing by our in-house experts",
"FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description",
"SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner",
"100% Ownership Rights",
"100% Original Content",
"100% Approval Assurance",
"30 Days Refund Warranty",
"Unlimited Revisions",
      ],
    },
    {
      price: "$4619",
      title: "Web Content Identity Package",
      features: [
        "Up to 20 Pages Professional Copywriting Service",
"Creative & Well-Written by 3 Professional Copywriters",
"Industry Specified Expert Copywriters",
"300 Words Per Page",
"Unlimited Revisions",
"7 to 10 Business Days Rotation",
"According To Your Exact Requirements",
"Proofing by our in-house experts",
"FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description",
"SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner",
"100% Ownership Rights",
"100% Original Content",
"100% Approval Assurance",
"30 Days Refund Warranty",
"Unlimited Revisions",
      ],
    },
    {
      price: "$369",
      title: "Article Writing Package",
      features: [
        "1 Creative, Fresh & Well-Written Article",
"By 1 Professional Copywriter",
"Industry Specified Expert Copywriter",
"400 Words Per Page",
"3 to 5 Business Days Rotation",
"5 Revisions",
"According To Your Exact Requirements",
"Written on Your Specified Topic/Keyword",
"Proofing by our in-house experts",
"Free Submission on any article marketing directories /blog (If required)",
"SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner",
"100% Ownership Rights",
"100% Original Content",
"100% Approval Assurance",
"30 Days Refund Warranty",
"Unlimited Revisions",
      ],
    },
    {
      price: "$319",
      title: "Blog Writing Package",
      features: [
      " 1 Creative, Fresh & Well-Written Article",
"By 1 Professional Copywriter",
"Industry Specified Expert Copywriter",
"400 Words Per Page",
"3 to 5 Business Days Rotation",
"5 Revisions",
"According To Your Exact Requirements",
"Written on Your Specified Topic/Keyword",
"Proofing by our in-house experts",
"Free Submission on any article marketing directories /blog (If required)",
"SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner",
"100% Ownership Rights",
"100% Original Content",
"00% Approval Assurance",
"30 Days Refund Warranty",
"Unlimited Revisions",
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
