import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [chatMessage, setChatMessage] = useState<string>("");
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { name: "Prescription Drugs", count: 2500, image: "first.jpeg" },
    { name: "OTC Medicines", count: 1800, image: "otc.jpg" },
    { name: "Healthcare Products", count: 1200, image: "healthcared.jpeg" },
    { name: "Personal Care", count: 950, image: "personal.jpeg" },
    { name: "Vitamins & Supplements", count: 850, image: "vitamins.jpeg" },
    { name: "Medical Devices", count: 450, image: "medical.jpeg" },
  ];

  const specialOffers = [
    {
      name: "Premium Vitamin D3 Supplements",
      originalPrice: 49.99,
      discountPrice: 39.99,
      discount: 20,
      image: "offer1.jpg",
    },
    {
      name: "Advanced Blood Pressure Monitor",
      originalPrice: 129.99,
      discountPrice: 99.99,
      discount: 25,
      image: "offer2.jpg",
    },
    {
      name: "Organic Immunity Booster",
      originalPrice: 34.99,
      discountPrice: 27.99,
      discount: 20,
      image: "offer3.jpg",
    },
  ];

  const blogPosts = [
    {
      title: "Understanding the Importance of Regular Health Check-ups",
      excerpt:
        "Regular health screenings can help identify potential health issues before they become serious...",
      image: "health1.jpg",
    },
    {
      title: "Essential Vitamins for Winter Wellness",
      excerpt:
        "Discover the key vitamins and supplements that can help boost your immune system during cold months...",
      image: "health2.jpg",
    },
    {
      title: "Managing Chronic Conditions: A Comprehensive Guide",
      excerpt:
        "Learn about effective strategies and modern treatments for managing chronic health conditions...",
      image: "health3.jpg",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterOpen(false);
    setEmail("");
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChatMessage("");
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
    window.location.href = youtubeSearchUrl;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNewsletterOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white animate-fadeIn">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-6 md:space-x-12">
            <div className="text-2xl font-bold text-blue-600 animate-slideInDown">
              GrandPharma
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
              <Link to="/video" className="text-gray-600 hover:text-blue-600">
                Video Chat
              </Link>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Prescriptions
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Health Blog
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-48 md:w-64 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 text-sm hover:shadow-md transition-shadow duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <IoIosSearch className="absolute right-4 top-3 text-gray-400 hover-bounce" onClick={handleSearch} />
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <div className="relative cursor-pointer hover-bounce">
              <i className="fas fa-shopping-cart text-xl text-gray-600"></i>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                3
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="mt-20 relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-12 animate-slideInLeft">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Your Trusted Online Medicine Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Experience healthcare reimagined with 24/7 delivery, certified
              products, and expert pharmacist support.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/product">
                <button className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-6 py-3 text-lg hover:bg-blue-700">
                  Shop Medicines
                </button>
              </Link>
              <Link to="/chatbot">
                <button className="!rounded-button whitespace-nowrap border-2 border-blue-600 text-blue-600 px-6 py-3 text-lg hover:bg-blue-50">
                  Upload Prescription
                </button>
              </Link>
            </div>
            <div className="flex items-center mt-8 md:mt-12 space-x-6">
              <img
                src="banner.jpg"
                alt="Certification"
                className="h-12 w-12 md:h-16 md:w-16 object-contain"
              />
              <img
                src="banner2.jpg"
                alt="Security"
                className="h-12 w-12 md:h-16 md:w-16 object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 z-[1] animate-slideInRight mt-8 md:mt-0">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              className="rounded-lg shadow-2xl"
            >
              <SwiperSlide>
                <img
                  src="https://public.readdy.ai/ai/img_res/60627c42d7e170913bbbf3ec20de7105.jpg"
                  alt="Modern Pharmacy"
                  className="w-full z-[-9999] h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://public.readdy.ai/ai/img_res/874179d46787bd7a5e67f32fc7f19f56.jpg"
                  alt="Medical Laboratory"
                  className="w-full z-[-9999] h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://public.readdy.ai/ai/img_res/c0bec052fcc95bdfb9c9530b370340cd.jpg"
                  alt="Pharmaceutical Warehouse"
                  className="w-full z-[-9999] h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://public.readdy.ai/ai/img_res/7830281d49fe09a6c148397a0d7762f2.jpg"
                  alt="Telemedicine Consultation"
                  className="w-full z-[-9999] h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://public.readdy.ai/ai/img_res/668c0003fdba55495c9c763af2c9cafc.jpg"
                  alt="Pharmaceutical Research"
                  className="w-full z-[-9999] h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fadeInUp">
            <div className="text-center p-6 md:p-8 rounded-lg bg-blue-50">
              <i className="fas fa-shield-alt text-3xl md:text-4xl text-blue-600 mb-3 md:mb-4"></i>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                Verified Medicines
              </h3>
              <p className="text-gray-600">
                100% authentic medicines with quality assurance
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-lg bg-blue-50">
              <i className="fas fa-headset text-3xl md:text-4xl text-blue-600 mb-3 md:mb-4"></i>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Expert pharmacists available round the clock
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-lg bg-blue-50">
              <i className="fas fa-truck text-3xl md:text-4xl text-blue-600 mb-3 md:mb-4"></i>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Same-day delivery for urgent medicines
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-lg bg-blue-50">
              <i className="fas fa-lock text-3xl md:text-4xl text-blue-600 mb-3 md:mb-4"></i>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                Secure Payments
              </h3>
              <p className="text-gray-600">
                Multiple secure payment options available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 animate-fadeInUp">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-24 md:h-40 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-semibold text-sm md:text-lg mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {category.count} Products
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fadeInUp">
            {specialOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale"
              >
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                    {offer.discount}% OFF
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {offer.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3 md:mb-4">
                    <span className="text-gray-400 line-through text-sm md:text-base">
                      ${offer.originalPrice}
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-blue-600">
                      ${offer.discountPrice}
                    </span>
                  </div>
                  <button className="!rounded-button whitespace-nowrap w-full bg-blue-600 text-white py-2 hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Health & Wellness Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fadeInUp">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-4 gap-8 animate-fadeInUp">
            <div>
              <h3 className="text-xl font-bold mb-4">GrandPharma</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner in online healthcare, providing quality
                medicines and expert support 24/7.
              </p>
              <div className="flex space-x-4">
                <i className="fab fa-facebook text-xl hover:text-blue-400 cursor-pointer"></i>
                <i className="fab fa-twitter text-xl hover:text-blue-400 cursor-pointer"></i>
                <i className="fab fa-instagram text-xl hover:text-blue-400 cursor-pointer"></i>
                <i className="fab fa-linkedin text-xl hover:text-blue-400 cursor-pointer"></i>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
              <div className="space-y-4">
                <button className="!rounded-button whitespace-nowrap w-full bg-white text-gray-900 py-2 px-4 flex items-center justify-center space-x-2">
                  <i className="fab fa-apple text-xl"></i>
                  <span>App Store</span>
                </button>
                <button className="!rounded-button whitespace-nowrap w-full bg-white text-gray-900 py-2 px-4 flex items-center justify-center space-x-2">
                  <i className="fab fa-google-play text-xl"></i>
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
            <p className="text-gray-400">
              © 2025 GrandPharma. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <img
                src="https://public.readdy.ai/ai/img_res/576328e55c7ec72db210c75678cc7f6e.jpg"
                alt="Visa"
                className="h-6"
              />
              <img
                src="master.jpg"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="paypal.jpg"
                alt="PayPal"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="!rounded-button whitespace-nowrap fixed bottom-8 right-8 bg-blue-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-transform duration-300 hover:scale-110 animate-bounce"
      >
        <i
          className={`fas ${isChatOpen ? "fa-times" : "fa-comments"} text-2xl`}
        ></i>
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-28 right-8 w-96 bg-white rounded-lg shadow-xl">
          <div className="p-4 bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">24/7 Support</h3>
          </div>
          <div className="h-96 p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-gray-700">Hello! How can we help you today?</p>
            </div>
          </div>
          <form onSubmit={handleChatSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 text-sm"
              />
              <button
                type="submit"
                className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Newsletter Popup */}
      {isNewsletterOpen && (
        <div className="fixed inset-0 bg-blur backdrop-filter backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-end">
              <button
                onClick={() => setIsNewsletterOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Get the latest updates on new products and special offers!
            </p>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-500 text-sm"
                required
              />
              <button
                type="submit"
                className="!rounded-button whitespace-nowrap w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Cookie Consent */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <p className="text-gray-600">
              We use cookies to enhance your experience. By continuing to visit
              this site you agree to our use of cookies.
            </p>
            <button
              onClick={() => setShowCookieConsent(false)}
              className="!rounded-button whitespace-nowrap ml-4 bg-blue-600 text-white px-6 py-2 hover:bg-blue-700"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
