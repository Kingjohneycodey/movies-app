import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-10">
<div className="container mx-auto px-4">
  <div className="flex flex-col md:flex-row md:justify-between">
    <div className="mb-6 md:mb-0">
      <h2 className="text-red-600 text-3xl lg:text-4xl font-bold">
        MoviesFlix
      </h2>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col mb-4 md:mb-0 md:mr-6">
        <a href="#" className="hover:text-white">
          FAQ
        </a>
        <a href="#" className="hover:text-white">
          Investor Relations
        </a>
        <a href="#" className="hover:text-white">
          Privacy
        </a>
        <a href="#" className="hover:text-white">
          Speed Test
        </a>
      </div>
      <div className="flex flex-col mb-4 md:mb-0 md:mr-6">
        <a href="#" className="hover:text-white">
          Help Center
        </a>
        <a href="#" className="hover:text-white">
          Jobs
        </a>
        <a href="#" className="hover:text-white">
          Cookie Preferences
        </a>
        <a href="#" className="hover:text-white">
          Legal Notices
        </a>
      </div>
      <div className="flex flex-col mb-4 md:mb-0">
        <a href="#" className="hover:text-white">
          Account
        </a>
        <a href="#" className="hover:text-white">
          Ways to Watch
        </a>
        <a href="#" className="hover:text-white">
          Terms of Use
        </a>
        <a href="#" className="hover:text-white">
          Corporate Information
        </a>
      </div>
    </div>
  </div>
  <div className="mt-8 md:flex justify-between text-center">
    
    <p>Developed by <a href="https://kingjohney.vercel.app" className="text-red-500 font-bold"> King Johney ❤️ </a> </p>
    <p className="text-sm mt-4 md:m-0">
      © 2024 MoviesFlix.
    </p>
  </div>
</div>
</footer>
  )
}

export default Footer