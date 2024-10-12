import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 max-h-[100vh]">
        <div className="absolute inset-0 z-[-1] bg-black opacity-70"></div>{" "}
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-[-2]"
          style={{ backgroundImage: `url('/background.jpg')` }} // Add your image URL here
          aria-hidden="true"
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 max-h-[92vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ready to watch? Search for your the video and watch
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSection