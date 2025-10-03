import React from 'react';

const packages = [
  {
    price: "$49",
    title: "Basic Logo",
    features: [
      "3 Custom Logo Design Concepts",
      "1 Dedicated Designer",
      "4 Revisions",
      "48 to 72 hours TAT",
      "100% Unique Design Guarantee",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee*",
      "Unlimited Revisions"
    ]
  },
  {
    price: "$129",
    title: "Start Up Logo",
    features: [
      "5 Custom Logo Design Concepts",
      "By 2 Designers",
      "UNLIMITED Revisions",
      "48 to 72 hours TAT",
      "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "Money Back Guarantee*",
      "Unlimited Revisions"
    ]
  },
  {
    price: "$199",
    title: "Professional Logo",
    features: [
      "UNLIMITED Logo Design Concepts",
      "By 4 Designers",
      "UNLIMITED Revisions",
      "Stationary Design (Business Card, Letterhead, Envelope)",
      "FREE MS Word Letterhead",
      "48 to 72 hours TAT",
      "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "Money Back Guarantee*",
      "Unlimited Revisions"
    ]
  },
  {
    price: "$249",
    title: "Elite Logo",
    features: [
      "UNLIMITED Logo Design Concepts","By 5 Award Winning Designers","Icon Design",
        "UNLIMITED Revisions","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Satisfaction Guarantee","100% Unique Design Guarantee","Money Back Guarantee ","Unlimited Revisions",
        "48 to 72 hours TAT",
    ]
  },
  {
    price: "$349",
    title: "Business Logo",
    features: [
       "UNLIMITED Logo Design Concepts","By 8 Award Winning Designers","UNLIMITED Revisions","2 Stationary Design Sets (Business Card, Letterhead, Envelope)",
        "Icon Design","Double Sided Flyer Design / Bi-Fold Brochure ","FREE MS Word Letterhead","Free Email Signature",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
    ]
  },
  {
    price: "$499",
    title: "Gold Logo",
    features: [
      "UNLIMITED Logo Design Concepts","By 8 Award Winning Designers","Icon Design","UNLIMITED Revisions"
        ,"2 Stationary Design Sets (Business Card, Letterhead, Envelope)","FREE MS Word Letterhead","Free Email Signature",
        "3 Page Custom Website","2 Stock Photos","jQuery Slider","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee","Money Back Guarantee ",
        "Unlimited Revisions",
    ]
  }
];

const PackagesTailwind = () => {
  return (
    <div className="py-12 px-4 text-center bg-gray-100">
      <h2 className="text-3xl text-black font-bold mb-2">Most Affordable Packages</h2>
      <p className="text-gray-600 text-black mb-10">
        We are well aware of the competition. That is the reason why we have a fair pricing model. <br />
        We ensure quality over quantity on each order.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {packages.map((pkg, idx) => (
          <div key={idx} className="bg-gradient-to-b from-sky-400 to-sky-600 text-white rounded-xl w-80 p-6 shadow-lg flex flex-col justify-between">
            <div>
              <div className="text-4xl font-bold mb-2">{pkg.price}</div>
              <div className="text-xl font-medium capitalize mb-4">{pkg.title}</div>
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
