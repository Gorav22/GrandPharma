import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
 import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

const Product: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation] = useState('110002');
  const [cartCount, setCartCount] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [amazonData, setAmazonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = [
    'Covid Essentials', 'Diabetes', 'Cardiac Care', 'Stomach Care', 'Ayurvedic',
    'Homeopathy', 'Fitness', 'Mom & Baby', 'Devices', 'Surgicals',
    'Sexual Wellness', 'Treatments', 'Skin Care', 'Personal Care'
  ];

  const products = [
    {
      id: 1,
      name: 'FEVERSOL MF Suspension 60ml',
      manufacturer: 'Mkt: Medico Labs Ltd',
      price: 51.75,
      mrp: 57.50,
      discount: '10% OFF',
      category: 'Pain relief'
    },
    {
      id: 2,
      name: 'FEVERSOL TH 4 Tablet 10s',
      manufacturer: 'Mkt: Medico Labs Ltd',
      price: 166.94,
      mrp: 189.70,
      discount: '12% OFF',
      category: 'Pain relief'
    },
    {
      id: 3,
      name: 'FEVERSOL MF JUNIOR Oral Suspension 60ml',
      manufacturer: 'Mkt: Medico Labs Ltd',
      price: 54.90,
      mrp: 61.00,
      discount: '10% OFF',
      category: 'Pain relief'
    },
    {
      id: 4,
      name: 'Lanol ER 650mg Tablet 10S',
      manufacturer: 'Mkt: Hetero Healthcare Limited',
      price: 20.16,
      mrp: 22.40,
      discount: '10% OFF',
      category: 'Pain relief'
    }
  ];

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

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const fetchAmazonData = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://real-time-amazon-data.p.rapidapi.com/search', {
        params: {
          query: query,
          page: 1,
          country: 'US',
          sort_by: 'RELEVANCE',
          product_condition: 'ALL',
          is_prime: false,
          deals_and_discounts: 'NONE'
        },
        headers: {
          'x-rapidapi-key': '5a4825e11fmshaa4bd2e72aefccbp129097jsn16e2f89f24b5',
          'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
      });
      setAmazonData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query) {
      fetchAmazonData(query);
    } else {
      setAmazonData(null);
    }
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
                  <span className="text-gray-700 text-sm whitespace-nowrap">Deliver to {selectedLocation}</span>
                  <i className="fas fa-chevron-down ml-2 text-gray-500"></i>
                </div>
                <input
                  type="text"
                  className="flex-1 px-4 py-2 text-sm border-none rounded-r-lg focus:outline-none"
                  placeholder="Search for medicine & wellness products..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <button className="px-4 text-sky-500 hover:text-sky-600 transition-colors">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-sm hover:bg-sky-600 px-4 py-2 rounded-lg transition-colors">
                <i className="fas fa-user-plus mr-1"></i>
                Sign Up
              </button>
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
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {amazonData ? (
              <div>
                <h2 className="text-lg font-semibold mb-4">Amazon Search Results</h2>
                <pre>{JSON.stringify(amazonData, null, 2)}</pre>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all hover:shadow-lg hover:scale-102"
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
                          className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-all transform hover:scale-102 active:scale-98 !rounded-button whitespace-nowrap text-sm"
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;