"use client";

import { useMemo, useState } from "react";

interface PricingPlan {
  price: string;
  title: string;
  features: string[];
}

type CategoryKey =
  | "Logo"
  | "Web Design"
  | "Video Animation"
  | "Branding"
  | "E-Commerce"
  | "Social Marketing"
  | "NFT Design"
  | "Marketing Collateral"
  | "SEO";

const categories: CategoryKey[] = [
  "Logo",
  "Web Design",
  "Video Animation",
  "Branding",
  "E-Commerce",
  "Social Marketing",
  "NFT Design",
  "Marketing Collateral",
  "SEO",
];

const pricingData: Record<CategoryKey, PricingPlan[]> = {
  Logo: [
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
        "Money Back Guarantee",
        "Unlimited Revisions",
      ],
    },
    {
      price: "$129",
      title: "Startup Logo",
      features: [
        "5 Custom Logo Design Concepts",
        "By 2 Designers",
        "48 to 72 hours TAT",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "Money Back Guarantee",
        "Unlimited Revisions",
      ],
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
        "Money Back Guarantee",
        "Unlimited Revisions",
      ],
    },
    {
      price: "$249",
      title: "Elite Logo",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 5 Award Winning Designers",
        "Icon Design",
        "UNLIMITED Revisions",
        "FREE MS Word Letterhead",
        "Free Email Signature",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "Money Back Guarantee",
        "Unlimited Revisions",
        "48 to 72 hours TAT",
      ],
    },
    {
      price: "$349",
      title: "Business Logo",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 8 Award Winning Designers",
        "UNLIMITED Revisions",
        "2 Stationary Design Sets (Business Card, Letterhead, Envelope)",
        "Icon Design",
        "Double Sided Flyer Design / Bi-Fold Brochure",
        "FREE MS Word Letterhead",
        "Free Email Signature",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
      ],
    },
    {
      price: "$499",
      title: "Gold Logo",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 8 Award Winning Designers",
        "Icon Design",
        "UNLIMITED Revisions",
        "2 Stationary Design Sets (Business Card, Letterhead, Envelope)",
        "FREE MS Word Letterhead",
        "Free Email Signature",
        "3 Page Custom Website",
        "2 Stock Photos",
        "jQuery Slider",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "Money Back Guarantee",
        "Unlimited Revisions",
      ],
    },
  ],
  "Web Design": [
    {
      price: "$299",
      title: "Basic Website",
      features: [
        "1 Page Website Design",
        "HTML Based",
        "1 Banner Design",
        "Contact/Query Form",
        "3 Revisions",
        "Complete W3C Certified HTML",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
      ],
    },
    {
      price: "$549",
      title: "Startup Website",
      features: [
        "3 Page Website Design",
        "HTML Based",
        "Hover Effects",
        "2 Banner Designs",
        "Sliding Banner",
        "2 Stock Photos (You can provide us more)",
        "Contact/Query Form",
        "3 Professional Email ID's",
        "6 Revisions",
        "Complete W3C Certified HTML",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      price: "$799",
      title: "Professional Website",
      features: [
        "Up to 5 Pages Website Design",
        "3 Stock Photos (You can provide us more)",
        "3 Banner Designs",
        "Sliding Banner",
        "Hover Effects",
        "Content Management System (WordPress)",
        "5 Professional Email ID's",
        "Search Engine Submission",
        "Unlimited Revisions",
        "Complete W3C Certified HTML",
        "Industry specified Team of Expert Designers and Developers",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
      ],
    },
    {
      price: "$699",
      title: "Elite Website",
      features: [
        "Unique 5 Pages Website Design",
        "Custom, Interactive, Dynamic & High End Web Design",
        "Custom WordPress Development",
        "5 Stock Images",
        "5 Banner Designs",
        "Sliding Banners",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content Management System (WordPress)",
        "Mobile Responsive",
        "Online Appointment/Booking/Scheduling/Online Ordering Integration (If Required)",
        "5 Professional Email ID's",
        "Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete W3C Certified HTML",
        "Industry specified Team of Expert Designers and Developers",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      price: "$1999",
      title: "Identity Website",
      features: [
        "10 Unique Pages Website Design",
        "Custom, Interactive, Dynamic & High End Design",
        "Customize WordPress (or) PHP Development",
        "Interactive Sliding Banners",
        "10 Stock Images",
        "10 Banner Designs",
        "Special Hover Effects",
        "Unlimited Revisions",
        "Content Management System (WordPress or Custom)",
        "Mobile Responsive",
        "Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)",
        "Online Payment Integration (Optional)",
        "10 Professional Email ID's",
        "Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete W3C Certified HTML",
        "Industry specified Team of Award Winning Designers and Developers",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      price: "$3499",
      title: "Corporate Website",
      features: [
        "15 to 20 Unique Pages Website Design",
        "Custom Made, Interactive, Dynamic & High End Design",
        "Customized WordPress & PHP Development",
        "Up to 15 Custom Made Banner Designs",
        "15 Stock Images",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content Management System",
        "Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)",
        "Online Payment Integration (Optional)",
        "Multi Lingual (Optional)",
        "Custom Dynamic Forms (Optional)",
        "Signup Area (For Newsletters, Offers etc.)",
        "Search Bar",
        "Live Feeds of Social Networks integration (Optional)",
        "Mobile Responsive",
        "Up to 15 Professional Email ID's",
        "Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete W3C Certified HTML",
        "Industry specified Team of Award Winning Designers and Developers",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
  ],
  "Video Animation": [
    {
      price: "$999",
      title: "Starter Video",
      features: [
        "30 Second Video",
        "Professional Script",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
        "Unlimited Revisions",
        "4 weeks Delivery",
      ],
    },
    {
      price: "$2198",
      title: "Classic Video",
      features: [
        "60 Second Video",
        "Professional Script",
        "Sample Theme",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
        "5 weeks Delivery",
      ],
    },
    {
      price: "$2489",
      title: "Premium Video",
      features: [
        "120 Second Video",
        "Professional Script",
        "Sample Theme",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
      ],
    },
    {
      price: "$4598",
      title: "Unlimited Video",
      features: [
        "120 Second Video",
        "Professional Script",
        "Sample Theme",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
      ],
    },
  ],
  Branding: [
    {
      price: "$198",
      title: "Startup Collateral",
      features: [
        "Startup Collateral",
        "FREE Fax Template",
        "Print Ready Formats",
        "UNLIMITED Revisions",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
      ],
    },
    {
      price: "$788",
      title: "Collateral Classic",
      features: [
        "2 Stationery Design Set",
        "UNLIMITED Revisions",
        "Flyer Design",
        "Brochure Design (Bi-fold/Tri-fold)",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
      ],
    },
    {
      price: "$1188",
      title: "Premium Collateral",
      features: [
        "2 Stationery Design Set",
        "Packaging Design",
        "UNLIMITED Revisions",
        "T-Shirt Design",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
      ],
    },
    {
      price: "$1088",
      title: "Unlimited Collateral",
      features: [
        "2 Stationery Design Set",
        "Menu Card Design",
        "T-Shirt Design",
        "1 Banner Design",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
      ],
    },
  ],
  "E-Commerce": [
    {
      price: "$999",
      title: "E-commerce Website",
      features: [
        "E-Commerce Website Design and Development",
        "Theme Based Design",
        "2 Banner Designs",
        "Sliding Banner",
        "3 Stock Photos",
        "06 Revisions",
        "Hover Effects",
        "Up to 10 Products",
        "Up to 3 Categories",
        "Content/Inventory Management System",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Tax calculator Integration",
        "Shipping calculator Integration",
        "Wishlist",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      price: "$1399",
      title: "E-commerce Startup",
      features: [
        "E-Commerce Website Design and Development",
        "High-end Theme Based Design",
        "5 Banner Designs",
        "Sliding Banner",
        "5 Stock Photos",
        "12 Revisions",
        "Hover Effects",
        "Up to 25 Products",
        "Up to 5 Categories",
        "Content/Inventory Management System",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Shipping calculator Integration",
        "Wishlist",
        "Search Engine Submission",
        "Social Media Pages Integration",
        "Facebook Like Plugin integration",
        "Sitemap",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
      ],
    },
    {
      price: "$2399",
      title: "E-commerce Professional",
      features: [
        "E-Commerce Website Design and Development",
        "Customized Theme Based Design",
        "7 Banner Designs",
        "Sliding Banner",
        "7 Stock Photos",
        "Unlimited Revisions",
        "Hover Effects",
        "Up to 100 Products",
        "Up to 10 Categories",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Tax calculator Integration",
        "Shipping calculator Integration",
        "Wishlist",
        "Import/Export Order",
        "Bulk Import/export of Order information",
        "Search Engine Submission",
        "SEO Friendly",
        "Web Analytics Integration",
        "Monthly Traffic Reporting",
        "Social Media Pages Integration",
        "Facebook Like Plugin integration",
        "Sitemap",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      price: "$3399",
      title: "E-commerce Identity",
      features: [
        "E-Commerce Website Design and Development",
        "Customized Tailor-Made Design",
        "Professional, Modern, Unique Design",
        "10 Banner Designs",
        "Sliding Banner",
        "10 Stock Photos",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Up to 500 Products",
        "Up to 25 Categories",
        "Product Reviews & Ratings",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "User Signup Area",
        "User Sign-in Area",
        "User Dashboard Area",
        "Auto Email for Profile Validation & Notification(s)",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Tax calculator Integration",
        "Shipping calculator Integration",
        "Wishlist",
        "Import/Export Order",
        "Bulk Import/export of Order information",
        "Search Engine Submission",
        "SEO Friendly",
        "Web Analytics Integration",
        "Monthly Traffic Reporting",
        "Social Media Pages Integration",
        "Facebook Like Plugin integration",
        "Blog page (If Required)",
        "Sitemap",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      price: "$4999",
      title: "E-commerce Elite",
      features: [
        "E-Commerce Website Design and Development",
        "Customized Tailor-Made Design",
        "Professional, Modern, Interactive, Dynamic, Unique Design",
        "User-friendly Navigation",
        "20 Banner Designs",
        "Sliding Banner",
        "20 Stock Photos",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "Unlimited Products",
        "Unlimited Categories",
        "Product Reviews & Ratings",
        "Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By Date",
        "Multiple Filtrations Option",
        "Multiple Sorting Options (Newest / Price / Alphabetical / Rating)",
        "Product View with Multiple Views",
        "Product Rating",
        "Product Detail with Similar Product Range",
        "Coupon Code Generation (by category and product)",
        "Product Comparison",
        "User Signup Area",
        "User Sign-in Area",
        "User Dashboard Area",
        "Auto Email for Profile Validation & Notification(s)",
        "Last Purchase Order Details (download invoice)",
        "Customer Login / Registration via Social Login Facebook and Google+",
        "Customer profile management (From Backend and Frontend)",
        "Discounted Products Showcase",
        "New Arrival Products Showcase",
        "Discount Coupons",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Payment Module Integration",
        "Multiple Currency Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Tax calculator Integration",
        "Shipping calculator Integration",
        "Wishlist",
        "Import/Export Order",
        "Bulk Import/export of Order information",
        "Bulk Product Upload From Excel Sheet",
        "Export order into excel sheet",
        "Live Chat Integration",
        "Search Engine Submission",
        "SEO Friendly",
        "Web Analytics Integration",
        "Monthly Traffic Reporting",
        "Social Media Pages Integration",
        "Facebook Shop Setup",
        "Facebook Like Plugin integration",
        "Blog page (If Required)",
        "Sitemap",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      price: "$7398",
      title: "E-commerce Corporate",
      features: [
        "E-Commerce Website Design and Development",
        "Customized Tailor-Made Design",
        "Professional, Modern, Interactive, Dynamic, Unique Design",
        "User-friendly Navigation",
        "20 Banner Designs",
        "Sliding Banner",
        "20 Stock Photos",
        "Special Hover Effects",
        "Unlimited Revisions",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "Unlimited Products",
        "Unlimited Categories",
        "Product Reviews & Ratings",
        "Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By Date",
        "Multiple Filtrations Option",
        "Multiple Sorting Options (Newest / Price / Alphabetical / Rating)",
        "Product View with Multiple Views",
        "Product Rating",
        "Product Detail with Similar Product Range",
        "Coupon Code Generation (by category and product)",
        "Product Comparison",
        "User Signup Area",
        "User Sign-in Area",
        "User Dashboard Area",
        "Auto Email for Profile Validation & Notification(s)",
        "Last Purchase Order Details (download invoice)",
        "Customer Login / Registration via Social Login Facebook and Google+",
        "Customer profile management (From Backend and Frontend)",
        "Discounted Products Showcase",
        "New Arrival Products Showcase",
        "Discount Coupons",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Payment Module Integration",
        "Multiple Currency Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Tax calculator Integration",
        "Shipping calculator Integration",
        "Wishlist",
        "Import/Export Order",
        "Bulk Import/export of Order information",
        "Bulk Product Upload From Excel Sheet",
        "Export order into excel sheet",
        "Live Chat Integration",
        "Search Engine Submission",
        "SEO Friendly",
        "Web Analytics Integration",
        "Monthly Traffic Reporting",
        "Social Media Pages Integration",
        "Facebook Shop Setup",
        "Facebook Like Plugin integration",
        "Blog page (If Required)",
        "Sitemap",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "Value Added Services",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
  ],
  "Social Marketing": [
    {
      price: "$199",
      title: "Bronze Social",
      features: [
        "1 Social Media Platform (Facebook)",
        "Social media account setup",
        "Complete Account Management",
        "8 Custom Designed Social Media Posts per month",
        "Custom Editorial calendar (Review before publishing)",
        "Goal focused Facebook Ad campaigns",
        "1000 Likes on Facebook page",
        "End of term report-KPI Comparison & more",
      ],
    },
    {
      price: "$2500",
      title: "Silver Social",
      features: [
        "2 Social Media Platforms (Facebook/ Instagram)",
        "Social media accounts setup",
        "Complete Accounts Management",
        "12 Custom Designed Social Media Posts per month",
        "Custom Editorial calendar (Review before publishing)",
        "Goal focused Facebook and Instagram Ad campaigns",
        "Call to action Integration",
        "1200 likes on Facebook page",
        "250 followers on Instagram",
        "Monthly Analytic Report-KPI Comparison & more",
      ],
    },
    {
      price: "$3500",
      title: "Gold Social",
      features: [
        "3 Social Media Platforms (Facebook/ Instagram/ Twitter)",
        "Social media accounts setup",
        "Complete Accounts Management",
        "Competitor Analysis - Local and Nationwide",
        "16 Custom Designed Social Media Posts per month",
        "Community management - All Community Based Social Networks",
        "1 GIF post per Month",
        "Custom Editorial Calendar (Review before publishing)",
        "Goal focused Facebook and Instagram Ad campaigns",
        "Engagement Tracking Setup",
        "Call to action Integration",
        "3000 Likes on Facebook page",
        "500 followers on Instagram",
        "Bi-monthly Analytic Report-KPI Comparison & more",
        "Dedicated Account Manager",
      ],
    },
    {
      price: "$5400",
      title: "Combo Social",
      features: [
        "4 Social Media Platforms (Facebook/ Instagram / Twitter/Linkedin)",
        "Social media accounts setup",
        "Complete Accounts Management",
        "Initial Brand Analysis",
        "Consumer Persona Analysis",
        "Competitor Analysis - Local and Nationwide",
        "18 Custom Designed Social Media Posts per month",
        "Community management - All Community Based Social Networks",
        "Brand Listing-20",
        "2 GIF posts per month",
        "Custom Editorial Calendar (Review before publishing)",
        "Goal focused Facebook and Instagram Ad campaign",
        "Engagement Tracking Setup",
        "Call to action Integration",
        "Facebook Shop Creation",
        "4000 Likes on Facebook page",
        "800 followers on Instagram",
        "Weekly Analytic Report -KPI Comparison & more",
        "Dedicated Account manager",
      ],
    },
  ],
  "NFT Design": [
    {
      price: "$299",
      title: "NFT Labs Lite",
      features: [
        "Base Character Creation",
        "3 Traits/Accessories",
        "2 revisions included",
        "Source file",
        "Fully refundable until revision call",
      ],
    },
    {
      price: "$2400",
      title: "NFT Entrepreneur",
      features: [
        "Base Character",
        "30 Traits/Accessories",
        "1,000 Variations",
        "Collection Generation",
        "Metadata",
        "Source Files",
        "2 Revisions included",
      ],
    },
    {
      price: "$4999",
      title: "NFT Moon Shot",
      features: [
        "Base Character",
        "70 Traits/Accessories",
        "10,000 Variations",
        "Collection Generation",
        "Metadata",
        "Source Files",
        "3 Revisions included",
        "Fully refundable until revision call",
      ],
    },
  ],
  "Marketing Collateral": [
    {
      price: "$149",
      title: "Startup Collateral",
      features: [
        "2 Stationery Design Set",
        "FREE Fax Template",
        "Print Ready Formats",
        "UNLIMITED Revisions",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
      ],
    },
    {
      price: "$299",
      title: "Collateral Classic",
      features: [
        "2 Stationery Design Set",
        "UNLIMITED Revisions",
        "Flyer Design",
        "Brochure Design (Bi-fold/Tri-fold)",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
      ],
    },
    {
      price: "$499",
      title: "Premium Collateral",
      features: [
        "2 Stationery Design Set",
        "Packaging Design",
        "UNLIMITED Revisions",
        "T-Shirt Design",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
      ],
    },
  ],
  SEO: [
    {
      price: "$300",
      title: "Basic Plan",
      features: [
        "1 Prior Analysis",
        "Business Analysis",
        "Consumer Analysis",
        "Competitor Analysis",
        "15 Selected Keywords Targeting",
        "15 Pages Keyword Targeted",
        "2 Webpage Optimization",
        "Meta Tags Creation",
        "Keyword Optimization",
        "Image Optimization",
        "Inclusion of anchors",
        "3 Tracking Analysis",
        "Google Analytics Installation",
        "Creation of Sitemaps",
        "4 Reporting",
        "Monthly Reporting",
        "Recommendation",
        "Email Support",
        "Phone Support",
      ],
    },
    {
      price: "$599",
      title: "Premium Plan",
      features: [
        "1 Prior Analysis",
        "Business Analysis",
        "Consumer Analysis",
        "Competitor Analysis",
        "30 Selected Keywords Targeting",
        "30 Pages Keyword Targeted",
        "2 Analysis",
        "Meta Tags Creation",
        "Keyword Optimization",
        "Image Optimization",
        "Inclusion of anchors Tags",
        "Inclusion of anchors Indexing Modifications",
        "3 Tracking Analysis",
        "Google Places Inclusions",
        "Google Webmaster Installation",
        "Call To Action Plan",
        "Creation of Sitemaps",
        "4 Reporting",
        "Monthly Reporting",
        "Recommendation",
        "Email Support",
        "Phone Support",
        "5 Off Page Optimization",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ's",
        "Link Building",
        "Directory Submission",
        "Local Business Listings",
      ],
    },
    {
      price: "$899",
      title: "Enterprise Plan",
      features: [
        "1 Prior Analysis",
        "Business Analysis",
        "Consumer Analysis",
        "Competitor Analysis",
        "70 Selected Keywords Targeting",
        "2 Webpage Optimization",
        "Meta Tags Creation",
        "Keyword Optimization",
        "Image Optimization",
        "Inclusion of anchors Tags",
        "3 Tracking Analysis",
        "Google Places Inclusions",
        "Google Analytics Installation",
        "Google Webmaster Installation",
        "Call To Action Plan",
        "Creation of Sitemaps",
        "Phone Support",
        "4 Off Page Optimization",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ's",
        "Link Building",
        "Directory Submission",
        "Local Business Listings",
        "Blog Content Creation",
        "Local SEO",
      ],
    },
  ],
};

const CARDS_PER_VIEW = 3;

export default function PricingPackages() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("Logo");
  const [startIndex, setStartIndex] = useState(0);

  const plans = pricingData[activeCategory];

  const visiblePlans = useMemo(
    () => plans.slice(startIndex, startIndex + CARDS_PER_VIEW),
    [plans, startIndex]
  );

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + CARDS_PER_VIEW < plans.length;

  const handleCategoryChange = (cat: CategoryKey) => {
    setActiveCategory(cat);
    setStartIndex(0);
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - CARDS_PER_VIEW));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + CARDS_PER_VIEW, Math.max(0, plans.length - CARDS_PER_VIEW))
    );
  };

  return (
    <section className="w-full bg-[#F5F7FA] py-10 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1a1a]">
          Most Affordable Packages
        </h2>
        <p className="text-center text-[#777777] mt-4 max-w-2xl mx-auto leading-relaxed text-lg lg:text-base px-2">
          We are well aware of the competition. That is the reason why we have a fair pricing model.
          <br />
          We ensure quality over quantity on each order.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-2x1 font-medium border-2 transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-[#00a1e6] to-[#00d2f1] text-white border-transparent hover:bg-white hover:bg-none hover:text-black hover:border-[#5ddebf]"
                    : "bg-white text-gray-800 border-gray-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards with Arrows */}
        <div className="relative flex items-center justify-center mt-14 gap-2 sm:gap-4">
          {/* Left Arrow - visible from sm up */}
          <button
            aria-label="Previous"
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="hidden sm:flex flex-shrink-0 items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-cyan-300 text-cyan-400 hover:bg-cyan-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ←
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
            {visiblePlans.map((plan) => (
              <div
                key={plan.title}
                className="group flex flex-col h-[490px] sm:h-[520px] lg:h-[560px] rounded-lg overflow-hidden text-white bg-gradient-to-b from-[#0F8FE8] to-[#20D6E6] hover:bg-none hover:bg-white shadow-lg transition-colors duration-300 border border-transparent hover:border-[#0F8FE8]"
              >
                <div className="p-6 sm:p-8 pb-0 flex-shrink-0">
                  <p className="text-1xl sm:text-5xl font-extrabold transition-colors duration-300 group-hover:text-black">
                    {plan.price}
                  </p>
                 <div className="mt-4 pt-3 pb-3 border-t border-b border-white/40 transition-colors duration-600 group-hover:border-black/20">
  <p className="font-semibold transition-colors duration-300 group-hover:text-black">
    {plan.title}
  </p>
</div>
                </div>

                <ul className="feature-scroll flex-1 min-h-0 overflow-y-auto px-6 sm:px-8 pt-4 space-y-2.5 text-sm transition-colors duration-300 group-hover:text-black">
                  {plan.features
                    .filter((f) => f.trim().length > 0)
                    .map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-0.5 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>

                <div className="flex-shrink-0 flex items-center justify-between gap-4 px-6 sm:px-8 py-6 sm:py-8">
                  <button className="border border-white group-hover:border-[#0F8FE8] group-hover:text-[#0F8FE8] rounded-full px-5 sm:px-6 py-2.5 text-sm font-semibold hover:bg-[#0F8FE8] hover:text-black group-hover:hover:bg-[#0F8FE8] group-hover:hover:text-white transition-colors whitespace-nowrap">
                    ORDER NOW
                  </button>
                  <button className="flex items-center gap-1 text-xs font-semibold leading-tight text-left transition-colors duration-300 group-hover:text-black">
                    <span aria-hidden>💬</span>
                    <span>
                      Click here to
                      <br />
                      <span className="text-sm">Live Chat</span>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow - visible from sm up */}
          <button
            aria-label="Next"
            onClick={handleNext}
            disabled={!canGoNext}
            className="hidden sm:flex flex-shrink-0 items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-cyan-300 text-cyan-400 hover:bg-cyan-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>

        {/* Mobile Prev/Next controls */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
          <button
            aria-label="Previous"
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="flex items-center justify-center w-10 h-9  border border-cyan-300 text-cyan-400 hover:bg-cyan-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ←
          </button>
          <button
            aria-label="Next"
            onClick={handleNext}
            disabled={!canGoNext}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-cyan-300 text-cyan-400 hover:bg-cyan-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>

        <style jsx>{`
          .feature-scroll {
            scrollbar-width: thin;
            scrollbar-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.08);
          }
          .feature-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .feature-scroll::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.08);
            border-radius: 999px;
          }
          .feature-scroll::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 999px;
          }
        `}</style>

        {/* View All Packages */}
        <div className="flex justify-center mt-12">
          <button className="border border-cyan-400 text-gray-700 rounded-full px-8 py-3 text-sm font-medium hover:bg-cyan-50 transition-colors">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
}