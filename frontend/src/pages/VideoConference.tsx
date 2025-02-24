import React, { useState } from 'react';
const VideoConference: React.FC = () => {
const [showModal, setShowModal] = useState(false);
const handleOpenModal = () => {
setShowModal(true);
};
const handleCloseModal = () => {
setShowModal(false);
};
return (
<div className="min-h-screen bg-gray-50">
{/* Header */}
<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
<div className="flex items-center">
<img
src="https://public.readdy.ai/ai/img_res/17f32e8ef340ac358311f7f77826feff.jpg"
alt="GrandPharma Logo"
className="h-10 w-auto mr-3"
/>
<div>
<h1 className="text-xl font-semibold text-gray-800">GrandPharma</h1>
<p className="text-sm text-gray-500">HealthConnect Pro</p>
</div>
</div>
</div>
</header>
{/* Main Content */}
<main className="max-w-7xl mx-auto px-4 py-16 relative">
<video
  autoPlay
  muted
  loop
  className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-10"
>
  <source
    src="https://readdy.ai/api/search-video?query=abstract medical background with flowing particles and soft blue light effects, modern healthcare technology visualization&width=1920&height=1080"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
<div className="text-center">
<h2 className="text-4xl font-bold text-gray-900 mb-8">Start Your Virtual Consultation</h2>
<p className="text-xl text-gray-600 mb-12">Connect with healthcare professionals or AI assistance in seconds</p>
<button
onClick={handleOpenModal}
className="!rounded-button bg-blue-600 text-white px-8 py-4 text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg whitespace-nowrap"
>
Start Video Call
</button>
</div>
{/* Background Image */}
<div className="mt-16">
<img
src="https://public.readdy.ai/ai/img_res/f696f92a2baa66944d24f798a7ac9a59.jpg"
alt="Modern Healthcare Environment"
className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
/>
</div>
</main>
{/* Modal */}
{showModal && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
<div className="bg-white rounded-2xl p-8 max-w-6xl w-full relative">
<button
onClick={handleCloseModal}
className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
>
<i className="fas fa-times text-xl"></i>
</button>
<h3 className="text-2xl font-bold text-center mb-8">Choose Your Consultation Type</h3>
<div className="grid md:grid-cols-2 gap-8">
{/* AI Option */}
<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
<div className="h-48 mb-4 overflow-hidden rounded-lg">
<img
src="https://public.readdy.ai/ai/img_res/097ab5c6032c370d7dc95622890aef03.jpg"
alt="AI Consultation"
className="w-full h-full object-cover"
/>
</div>
<h4 className="text-xl font-semibold mb-2">AI Virtual Assistant</h4>
<p className="text-gray-600 mb-4">24/7 instant medical guidance powered by advanced AI. Get quick answers and initial assessments.</p>
<button className="!rounded-button bg-blue-600 text-white px-6 py-3 w-full font-medium hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
<i className="fas fa-robot mr-2"></i>
Start AI Consultation
</button>
</div>
{/* Doctor Option */}
<div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
<div className="h-48 mb-4 overflow-hidden rounded-lg">
<img
src="https://public.readdy.ai/ai/img_res/10d6029b4b9b8b4e71b4eb9e23835f7a.jpg"
alt="Doctor Consultation"
className="w-full h-full object-cover"
/>
</div>
<h4 className="text-xl font-semibold mb-2">Live Doctor Consultation</h4>
<p className="text-gray-600 mb-4">Connect with licensed healthcare professionals for personalized medical advice.</p>
<a href='https://nextjs-zegocloud-uikits-ashen-two.vercel.app/'>
<button className="!rounded-button bg-green-600 text-white px-6 py-3 w-full font-medium hover:bg-green-700 transition-colors duration-200 whitespace-nowrap">
<i className="fas fa-user-md mr-2"></i>
Connect with Doctor
</button>
</a>
</div>
</div>
</div>
</div>
)}
</div>
);
};
export default VideoConference