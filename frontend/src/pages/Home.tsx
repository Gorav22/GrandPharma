// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// Add global styles for animations
const style = document.createElement("style");
style.textContent = `
@keyframes fadeIn {
from { opacity: 0; }
to { opacity: 1; }
}
@keyframes slideInDown {
from {
transform: translateY(-100%);
opacity: 0;
}
to {
transform: translateY(0);
opacity: 1;
}
}
@keyframes slideInLeft {
from {
transform: translateX(-100%);
opacity: 0;
}
to {
transform: translateX(0);
opacity: 1;
}
}
@keyframes slideInRight {
from {
transform: translateX(100%);
opacity: 0;
}
to {
transform: translateX(0);
opacity: 1;
}
}
@keyframes fadeInUp {
from {
transform: translateY(20px);
opacity: 0;
}
to {
transform: translateY(0);
opacity: 1;
}
}
@keyframes pulse {
0% {
transform: scale(1);
}
50% {
transform: scale(1.05);
}
100% {
transform: scale(1);
}
}
@keyframes bounce {
0%, 100% {
transform: translateY(0);
}
50% {
transform: translateY(-10px);
}
}
@keyframes shake {
0%, 100% {
transform: translateX(0);
}
25% {
transform: translateX(-5px);
}
75% {
transform: translateX(5px);
}
}
.animate-fadeIn {
animation: fadeIn 0.8s ease-out;
}
.animate-slideInDown {
animation: slideInDown 0.8s ease-out;
}
.animate-slideInLeft {
animation: slideInLeft 0.8s ease-out;
}
.animate-slideInRight {
animation: slideInRight 0.8s ease-out;
}
.animate-fadeInUp {
animation: fadeInUp 0.8s ease-out;
}
.animate-pulse {
animation: pulse 2s infinite;
}
.animate-bounce {
animation: bounce 2s infinite;
}
.animate-shake {
animation: shake 0.5s ease-in-out;
}
/* Add hover animations */
.hover-scale {
transition: transform 0.3s ease;
}
.hover-scale:hover {
transform: scale(1.05);
}
.hover-bounce:hover {
animation: bounce 1s infinite;
}
.hover-shake:hover {
animation: shake 0.5s ease-in-out;
}
`;
document.head.appendChild(style);
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [chatMessage, setChatMessage] = useState<string>("");
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(true);
  const categories = [
    { name: "Prescription Drugs", count: 2500 },
    { name: "OTC Medicines", count: 1800 },
    { name: "Healthcare Products", count: 1200 },
    { name: "Personal Care", count: 950 },
    { name: "Vitamins & Supplements", count: 850 },
    { name: "Medical Devices", count: 450 },
  ];
  const specialOffers = [
    {
      name: "Premium Vitamin D3 Supplements",
      originalPrice: 49.99,
      discountPrice: 39.99,
      discount: 20,
      image:
        "offer1.jpg",
    },
    {
      name: "Advanced Blood Pressure Monitor",
      originalPrice: 129.99,
      discountPrice: 99.99,
      discount: 25,
      image:
        "offer2.jpg",
    },
    {
      name: "Organic Immunity Booster",
      originalPrice: 34.99,
      discountPrice: 27.99,
      discount: 20,
      image:
        "offer3.jpg",
    },
  ];
  const blogPosts = [
    {
      title: "Understanding the Importance of Regular Health Check-ups",
      excerpt:
        "Regular health screenings can help identify potential health issues before they become serious...",
      image:
        "health1.jpg",
    },
    {
      title: "Essential Vitamins for Winter Wellness",
      excerpt:
        "Discover the key vitamins and supplements that can help boost your immune system during cold months...",
      image:
        "health2.jpg",
    },
    {
      title: "Managing Chronic Conditions: A Comprehensive Guide",
      excerpt:
        "Learn about effective strategies and modern treatments for managing chronic health conditions...",
      image:
        "health3.jpg",
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
          <div className="flex items-center space-x-12">
            <div className="text-2xl font-bold text-blue-600 animate-slideInDown">
              GrandPharma
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
              <a href="/video" className="text-gray-600 hover:text-blue-600">
                Video Chat
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Prescriptions
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Health Blog
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-64 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 text-sm hover:shadow-md transition-shadow duration-300"
              />
              <IoIosSearch className="absolute z-4 right-4 top-3 text-gray-400 hover-bounce"/>
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
        <div className="max-w-7xl mx-auto px-4 py-20 flex items-center">
          <div className="w-1/2 pr-12 animate-slideInLeft">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Your Trusted Online Medicine Partner
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience healthcare reimagined with 24/7 delivery, certified
              products, and expert pharmacist support.
            </p>
            <div className="flex space-x-4">
             <Link to='/product'><button className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-8 py-3 text-lg hover:bg-blue-700">
                Shop Medicines
              </button></Link>
              <Link to='/chatbot'><button className="!rounded-button whitespace-nowrap border-2 border-blue-600 text-blue-600 px-8 py-3 text-lg hover:bg-blue-50">
                Upload Prescription
              </button></Link>
            </div>
            <div className="flex items-center mt-12 space-x-8">
              <img
                src="banner.jpg"
                alt="Certification"
                className="h-16 w-16 object-contain"
              />
              <img
                src="banner2.jpg"
                alt="Security"
                className="h-16 w-16 object-contain"
              />
              
            </div>
          </div>
          <div className="w-1/2 z-[1] animate-slideInRight">
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
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 animate-fadeInUp">
            <div className="text-center p-8 rounded-lg bg-blue-50">
              <i className="fas fa-shield-alt text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Verified Medicines</h3>
              <p className="text-gray-600">
                100% authentic medicines with quality assurance
              </p>
            </div>
            <div className="text-center p-8 rounded-lg bg-blue-50">
              <i className="fas fa-headset text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Expert pharmacists available round the clock
              </p>
            </div>
            <div className="text-center p-8 rounded-lg bg-blue-50">
              <i className="fas fa-truck text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Same-day delivery for urgent medicines
              </p>
            </div>
            <div className="text-center p-8 rounded-lg bg-blue-50">
              <i className="fas fa-lock text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Multiple secure payment options available
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Categories Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-6 gap-6 animate-fadeInUp">
      {categories.map((category, index) => {
        const imageMap = {
          "Prescription Medicines": "first.jpeg",
          "OTC Medicines":"otc.jpg",
          "Healthcare Products": "healthcared.jpeg",
          "Personal Care": "personal.jpeg",
          "Vitamins & Supplements": "vitamins.jpeg",
          "Medical Devices": "medical.jpeg",
        };

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={imageMap[category.name  as keyof typeof imageMap] || "first.jpeg"}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
              <p className="text-gray-600">{category.count} Products</p>
            </div>
          </div>
        );
      })}
          </div>
        </div>
      </div>
      {/* Special Offers Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Special Offers
          </h2>
          <div className="grid grid-cols-3 gap-8 animate-fadeInUp">
            {specialOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale"
              >
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
                    {offer.discount}% OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-gray-400 line-through">
                      ${offer.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
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
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Health & Wellness Tips
          </h2>
          <div className="grid grid-cols-3 gap-8 animate-fadeInUp">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="!rounded-button whitespace-nowrap text-blue-600 font-semibold hover:text-blue-700">
                    Read More →
                  </button>
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
      <Link to='/chatbot'><button
  onClick={() => setIsChatOpen(!isChatOpen)}
  className="!rounded-button whitespace-nowrap fixed bottom-8 right-8 z-[9999] bg-blue-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-transform duration-300 hover:scale-110 animate-bounce"
>
  <i
    className={`fas ${isChatOpen ? "fa-times" : "fa-comments"} text-2xl`}
  ></i>
</button></Link>


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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
