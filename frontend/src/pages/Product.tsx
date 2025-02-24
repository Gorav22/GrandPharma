import React from 'react';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
import 'https://ai-public.creatie.ai/gen_page/tailwind-custom.css';


const Product: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <header className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center">
              </a>
              <div className="flex items-center">
                <div className="relative">
                  <select className="appearance-none bg-gray-50 border border-gray-200 rounded-l-lg py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent">
                    <option>110002</option>
                    <option>110003</option>
                  </select>
                </div>
                <div className="relative flex-1">
                  <input type="text" placeholder="Search medicines & health products..." className="w-[32rem] border-l-0 border-gray-200 rounded-r-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <i className="fas fa-search text-gray-400"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-sm font-medium !rounded-button bg-custom/10 text-custom px-4 py-2">
                <i className="fas fa-file-upload"></i>
                <span>Upload Prescription</span>
              </button>
              <button className="flex items-center space-x-2 text-sm font-medium">
                <i className="fas fa-tag text-custom"></i>
                <span>Offers</span>
              </button>
              <a href="/cart" className="flex items-center space-x-2 text-sm font-medium">
                <div className="relative">
                  <i className="fas fa-shopping-cart text-custom"></i>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
                </div>
                <span>Cart</span>
              </a>
              <button className="flex items-center space-x-2 text-sm font-medium !rounded-button bg-custom text-white px-4 py-2">
                <i className="fas fa-user"></i>
                <span>Sign In</span>
              </button>
            </div>
          </div>
          <nav className="flex items-center space-x-8 py-3 border-t">
            <a href="#" className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-custom">
              <i className="fas fa-pills"></i>
              <span>Medicine</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-custom">
              <i className="fas fa-heart"></i>
              <span>Wellness</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-custom">
              <i className="fas fa-flask"></i>
              <span>Lab Tests</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-custom">
              <i className="fas fa-spa"></i>
              <span>Beauty</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-custom">
              <i className="fas fa-book-medical"></i>
              <span>Health Corner</span>
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-8xl mx-auto px-4 py-6">
        <div className="flex items-center space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          <a href="#" className="flex-shrink-0 px-4 py-1.5 bg-custom/10 text-custom rounded-full text-sm font-medium">Covid Essentials</a>
          <a href="#" className="flex-shrink-0 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-custom/10 hover:text-custom">Diabetes</a>
          <a href="#" className="flex-shrink-0 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-custom/10 hover:text-custom">Cardiac Care</a>
          <a href="#" className="flex-shrink-0 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-custom/10 hover:text-custom">Stomach Care</a>
          <a href="#" className="flex-shrink-0 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-custom/10 hover:text-custom">Ayurvedic</a>
          <a href="#" className="flex-shrink-0 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-custom/10 hover:text-custom">Homeopathy</a>
          <a href="#" className="flex-shrink-0 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-custom/10 hover:text-custom">Fitness</a>
        </div>

        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold mb-4">Filters</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3">Brands</h4>
                  <div className="relative">
                    <input type="text" placeholder="Search brands..." className="w-full border-gray-200 rounded-lg text-sm" />
                    <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-3">Manufacturers</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-custom focus:ring-custom" />
                      <span className="ml-2 text-sm">Micro Labs Ltd (12)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-custom focus:ring-custom" />
                      <span className="ml-2 text-sm">Hetero Healthcare (8)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-custom focus:ring-custom" />
                      <span className="ml-2 text-sm">Sun Pharma (6)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Showing results for "Paracetamol"</h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="border-gray-200 rounded-lg text-sm">
                  <option>Popularity</option>
                  <option>Price: High to Low</option>
                  <option>Price: Low to High</option>
                  <option>Discount</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">10% OFF</span>
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium">Dolo MF Suspension 60ml</h3>
                  <span className="text-xs text-custom">Pain relief</span>
                  <p className="text-sm text-gray-500 mt-1">Mkt: Micro Labs Ltd</p>
                  <div className="flex items-center mt-2">
                    <span className="text-lg font-semibold">₹51.75</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">₹57.50</span>
                  </div>
                  <button className="w-full mt-4 bg-custom text-white py-2 text-sm font-medium !rounded-button">Add to Cart</button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">12% OFF</span>
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium">Dolo TH 4 Tablet 10's</h3>
                  <span className="text-xs text-custom">Pain relief</span>
                  <p className="text-sm text-gray-500 mt-1">Mkt: Micro Labs Ltd</p>
                  <div className="flex items-center mt-2">
                    <span className="text-lg font-semibold">₹166.94</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">₹189.70</span>
                  </div>
                  <button className="w-full mt-4 bg-custom text-white py-2 text-sm font-medium !rounded-button">Add to Cart</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-8xl mx-auto px-4 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Partner with us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Order Medicines</a></li>
                <li><a href="#" className="hover:text-white">Book Lab Tests</a></li>
                <li><a href="#" className="hover:text-white">Healthcare Products</a></li>
                <li><a href="#" className="hover:text-white">Health Articles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Need Help</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Browse All Medicines</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Download App</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white rounded-lg p-2">
                </a>
                <a href="#" className="bg-white rounded-lg p-2">
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Product;
