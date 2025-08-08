'use client';

import { useState } from 'react';

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "James Rules",
      date: "2025-07-31",
      initial: "J",
      initialBg: "bg-red-500",
      rating: 5,
      text: "Excellent work! Hired for tile backsplash and it looks so homey and nice now. They knew what they were doing. And they were very knowledgeable with tile.",
      fullText: "Excellent work! Hired for tile backsplash and it looks so homey and nice now. They knew what they were doing. And they were very knowledgeable with tile."
    },
    {
      name: "Dzanan Porca",
      date: "2025-07-15", 
      initial: "D",
      initialBg: "bg-green-600",
      rating: 5,
      text: "Great company! I'm GC, and I've worked with Sergey (Strong Tile LLC) for over 10 years. Thank you.",
      fullText: "Great company! I'm GC, and I've worked with Sergey (Strong Tile LLC) for over 10 years. Thank you."
    },
    {
      name: "Julie B",
      date: "2025-06-29",
      initial: "J",
      initialBg: "bg-blue-500",
      rating: 5,
      text: "Another great experience with Strong Tile! Sergei was able to come out and complete a tile renovation. My previous shower panel had failed due to manufacturing problems...",
      fullText: "Another great experience with Strong Tile! Sergei was able to come out and complete a tile renovation. My previous shower panel had failed due to manufacturing problems and I decided it was time to replace the showerhead. There was holes in the original tile due to the shower panel hanging cleats. Sergei seamlessly removed the damaged tile and replaced it. His craftsmanship is phenomenal and his prices can't be beat!"
    },
    {
      name: "Ronald harvey",
      date: "2025-06-24",
      initial: "R",
      initialBg: "bg-purple-500",
      rating: 5,
      text: "Best tile work in Washington! Great communication, scheduling, pricing, and attention to detail. Highly recommended!",
      fullText: "Best tile work in Washington! Great communication, scheduling, pricing, and attention to detail. Highly recommended!"
    },
    {
      name: "Rick H",
      date: "2025-06-23",
      initial: "R",
      initialBg: "bg-orange-500",
      rating: 5,
      text: "Great work on my shower tile and very nice niche. Thanks !",
      fullText: "Great work on my shower tile and very nice niche. Thanks !"
    },
    {
      name: "Carl Gann",
      date: "2025-06-07",
      initial: "C",
      initialBg: "bg-teal-500",
      rating: 5,
      text: "I had a water leak in my home. I called Sergey. He promptly came and fixed the problem. I can recommend him for his good work.",
      fullText: "I had a water leak in my home. I called Sergey. He promptly came and fixed the problem. I can recommend him for his good work."
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % Math.max(1, reviews.length - 2));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + Math.max(1, reviews.length - 2)) % Math.max(1, reviews.length - 2));
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            REVIEWS FROM OUR FLOORING CLIENTS
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Side - Overall Rating */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <div className="bg-gray-50 rounded-lg p-8 lg:w-80">
              <div className="mb-4">
                <div className="text-4xl font-bold text-gray-900 mb-2">EXCELLENT</div>
                <div className="flex justify-center lg:justify-start mb-2">
                  <StarRating rating={5} />
                </div>
                <div className="text-gray-600 mb-4">Based on <strong>82 reviews</strong></div>
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-2xl font-bold text-gray-700">Google</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Review Carousel */}
          <div className="flex-1 relative">
            <div className="flex items-center">
              {/* Previous Button */}
              <button
                onClick={prevReview}
                className="flex-shrink-0 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors mr-4"
                aria-label="Previous review"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Review Cards */}
              <div className="flex-1 overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentReview * 33.333}%)` }}
                >
                  {reviews.map((review, index) => (
                    <div key={index} className="w-1/3 flex-shrink-0 px-2">
                      <div className="bg-gray-50 rounded-lg p-6 h-full">
                        <div className="flex items-center mb-4">
                          <div className={`w-10 h-10 ${review.initialBg} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                            {review.initial}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">{review.name}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                          <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                        </div>
                        
                        <div className="mb-3">
                          <StarRating rating={review.rating} />
                        </div>
                        
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          {review.text}
                        </p>
                        
                        {review.text !== review.fullText && (
                          <button className="text-blue-600 text-sm hover:text-blue-800 transition-colors">
                            Read more
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextReview}
                className="flex-shrink-0 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-4"
                aria-label="Next review"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Trustindex Badge */}
            <div className="flex justify-center mt-6">
              <div className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium">
                Verified by Trustindex ⓘ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 