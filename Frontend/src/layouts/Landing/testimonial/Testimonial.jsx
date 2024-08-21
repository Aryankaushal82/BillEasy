import React from 'react';
import HeaderTest from './components/HeaderTest';
import TestimonialCard from './components/TestimonialCard';

const Testimonial = () => {
  return (
    <div className="w-full h-auto mt-10 relative overflow-hidden bg-[#f4f7fe] rounded-t-[100px] rounded-b-[100px]">
      {/* Gradient Shapes */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 rounded-full opacity-50 blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500 via-teal-400 to-green-300 rounded-full opacity-40 blur-3xl z-0"></div>
      <div className="absolute top-1/4 left-1/2 w-[250px] h-[250px] bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 rounded-full opacity-20 blur-2xl z-0"></div>
      
      {/* Smoky Touch */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-transparent to-gray-200 opacity-20 z-0 pointer-events-none mix-blend-multiply"></div> */}

      {/* Main Content */}
      <div className="relative z-10">
        <HeaderTest />
        <main className="mx-auto flex min-w-[300px] max-w-[1160px] flex-1 items-center py-16">
          <div className="w-full">
            <article className="grid grid-cols-1 gap-y-10 px-6 md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              <TestimonialCard
                name="Daniel Clifford"
                className="purple-card md:col-span-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg text-white"
                avatarBorder="border-opacity-40 border-white border-4"
              />
              <TestimonialCard
                name="Jonathan Walters"
                className="dark bg-tg-gray-blue rounded-lg bg-gray-900 shadow-lg text-white"
                avatarBorder="border-opacity-70 border-white border-4"
              />
              <TestimonialCard
                name="Jeanette Harmon"
                className="light rounded-lg bg-white shadow-lg text-gray-900"
                avatarBorder="border-white border-4"
              />
              <TestimonialCard
                name="Patrick Abrams"
                className="dark bg-tg-dark-blue md:col-span-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg text-white"
                avatarBorder="border-indigo-500 border-4"
              />
              <TestimonialCard
                name="Kira Whittle"
                className="light md:col-start-4 md:row-span-2 md:row-start-1 rounded-lg bg-white shadow-lg text-gray-900"
                avatarBorder="border-indigo-400 border-4"
              />
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Testimonial;
