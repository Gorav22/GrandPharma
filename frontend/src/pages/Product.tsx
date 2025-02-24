// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import axios from 'axios';

interface ProductData {
    asin?: string;
    product_title?: string;
    product_photo?: string;
    product_price?: string;
    category?: string;
  }


const Product: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('110002');
  const [cartCount, setCartCount] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const categories = [
    'Covid Essentials', 'Diabetes', 'Cardiac Care', 'Stomach Care', 'Ayurvedic',
    'Homeopathy', 'Fitness', 'Mom & Baby', 'Devices', 'Surgicals',
    'Sexual Wellness', 'Treatments', 'Skin Care', 'Personal Care'
  ];
  const [data, setData] = useState<ProductData[]>([]);

  

  const manufacturers = [
    { name: 'Eris Lifesciences Ltd', count: 7 },
    { name: 'Lincoln Pharmaceuticals Ltd', count: 7 },
    { name: 'Troikaa Pharmaceuticals Ltd', count: 7 },
    { name: 'Unison Pharmaceuticals Pvt Ltd', count: 7 },
    { name: 'Cadila Pharmaceuticals Ltd', count: 6 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://real-time-amazon-data.p.rapidapi.com/search', {
          params: {
            query: 'medicine',
            page: 1,
            country: 'IN',
            sort_by: 'RELEVANCE',
            product_condition: 'ALL',
            is_prime: false,
            deals_and_discounts: 'NONE'
          },
          headers: {
            'x-rapidapi-key': '163a85a5c0mshfa2fb48df7c4495p17bec0jsn8e95b5e973be',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
          }
        });
        const products: ProductData[] = response.data.data.products;
        setData(products);
        console.log(products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function handleSearch() {
      const fetchData = async () => {
        try {
            const a=searchQuery.length>0?searchQuery:'medicine'
          console.log(searchQuery);
          const response = await axios.get('https://real-time-amazon-data.p.rapidapi.com/search', {
            params: {
              query: a,
              page: 1,
              country: 'IN',
              sort_by: 'RELEVANCE',
              product_condition: 'ALL',
              is_prime: false,
              deals_and_discounts: 'NONE'
            },
            headers: {
              // 'x-rapidapi-key': '5a4825e11fmshaa4bd2e72aefccbp129097jsn16e2f89f24b5',
              'x-rapidapi-key': '20e70a3fd9mshd4797d51be8059ap18260cjsn9a770478e480',
              'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
          });
          const products = response.data.data.products;
          setData(products);
          console.log(products);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
  }

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header
        className={`bg-sky-500 text-white fixed w-full z-50 transition-transform duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center transform hover:scale-105 transition-transform">
              <i className="fas fa-clinic-medical text-2xl mr-2"></i>
              <span className="text-xl font-semibold">GrandPharma</span>
            </div>
            <div className="flex-1 max-w-4xl mx-8">
              <div className="flex bg-white rounded-lg transform transition-all hover:shadow-lg">
                <div className="flex items-center px-3 border-r border-gray-200 cursor-pointer hover:bg-gray-50">
                  <span className="text-gray-700 text-sm whitespace-nowrap">Deliver to 110002</span>
                  <i className="fas fa-chevron-down ml-2 text-gray-500"></i>
                </div>
                <input
                  type="text"
                  className="text-black flex-1 px-4 py-2 text-sm border-none rounded-r-lg focus:outline-none"
                  placeholder="Search for medicine & wellness products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="px-4 text-sky-500 hover:text-sky-600 transition-colors" onClick={handleSearch}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
            <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
              <button className="flex items-center text-sm hover:bg-sky-600 px-4 py-2 rounded-lg transition-colors">
                <i className="fas fa-shopping-cart mr-1"></i>
                Cart
                {cartCount > 0 && (
                  <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
          <nav className="flex items-center space-x-8 py-3">
            {['Medicine', 'Wellness', 'Beauty', 'Health Corner'].map((item, index) => (
              <div key={index} className="flex items-center text-sm cursor-pointer hover:text-sky-200 transition-colors">
                <i className={`fas fa-${
                  item === 'Medicine' ? 'pills' :
                  item === 'Wellness' ? 'spa' :
                  item === 'Beauty' ? 'heart' : 'book-medical'
                } mr-2`}></i>
                {item}
              </div>
            ))}
          </nav>
        </div>
      </header>
      <div className="h-32"></div>
      <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={8}
              loop={true}
              speed={2000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false
              }}
              className="!overflow-visible py-3"
            >
              {[...categories, ...categories].map((category, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <button className="text-gray-600 text-sm whitespace-nowrap hover:text-sky-500 transition-colors transform hover:scale-105">
                    {category}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-6">
        <div className="flex">
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4 mb-4 transform transition-all hover:shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Brands</h3>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      placeholder="Search..."
                    />
                    <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Manufacturers</h3>
                  <div className="space-y-2">
                    {manufacturers.map((manufacturer, index) => (
                      <label key={index} className="flex items-center text-sm cursor-pointer group">
                        <input type="checkbox" className="mr-2 accent-sky-500" />
                        <span className="group-hover:text-sky-500 transition-colors">
                          {manufacturer.name} ({manufacturer.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 ml-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold">Featured Products</h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                {['Popularity', 'High to Low', 'Low to High', 'Discount'].map((item, index) => (
                  <button
                    key={index}
                    className="text-sm text-gray-600 hover:text-sky-500 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* {extendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all hover:shadow-lg hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transform transition-transform hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {product.discount}
                    </span>
                    <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-sky-500 mb-1">{product.category}</div>
                    <h3 className="font-medium text-gray-800 mb-1 hover:text-sky-500 transition-colors">
                      {product.name}
                    </h3>
                    <div className="text-sm text-gray-500 mb-2">{product.manufacturer}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline">
                        <span className="text-lg font-semibold">₹{product.price}</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">MRP ₹{product.mrp}</span>
                      </div>
                      <button
                        onClick={handleAddToCart}
                        className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap text-sm"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              ))} */}
                {data.length > 0 && (data.map((product) => (
                <div
                  key={product.asin}
                  className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all hover:shadow-lg hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={product?.product_photo }
                      alt={product?.product_title }
                      className="w-full h-48 object-cover transform transition-transform hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    </span>
                    <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-sky-500 mb-1">{product.category}</div>
                    <h3 className="font-medium text-gray-800 mb-1 hover:text-sky-500 transition-colors">
                      {product.product_title}
                    </h3>
                    {/* <div className="text-sm text-gray-500 mb-2">{product.manufacturer}</div> */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline">
                        <span className="text-lg font-semibold">{product.product_price}</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">USD {product.product_price}</span>
                      </div>
                      <button
                        onClick={handleAddToCart}
                        className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap text-sm"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              )))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;