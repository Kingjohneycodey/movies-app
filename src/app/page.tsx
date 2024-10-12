"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Movies from "@/components/Movies";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Movies", href: "#" },
  { name: "Series", href: "#" },
  { name: "Contact Us", href: "#" },
];


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to toggle header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="bg-white">
        <header className={`fixed left-0 inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
              <div className="flex">
              <h2 className="text-red-600 text-3xl lg:text-4xl font-bold">MoviesFlix</h2>
              </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 ${isScrolled ? "text-black" :"text-white"}`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <h2 className="text-red-600 text-3xl font-bold">MoviesFlix</h2>
             
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Search
              </button>

            </div>
          </div>
        </div>
      </div>


      <Movies />

      <footer className="bg-black text-gray-400 py-10 mt-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="mb-6 md:mb-0">
      <h2 className="text-red-600 text-3xl lg:text-4xl font-bold">MoviesFlix</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col mb-4 md:mb-0 md:mr-6">
          <a href="#" className="hover:text-white">FAQ</a>
          <a href="#" className="hover:text-white">Investor Relations</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Speed Test</a>
        </div>
        <div className="flex flex-col mb-4 md:mb-0 md:mr-6">
          <a href="#" className="hover:text-white">Help Center</a>
          <a href="#" className="hover:text-white">Jobs</a>
          <a href="#" className="hover:text-white">Cookie Preferences</a>
          <a href="#" className="hover:text-white">Legal Notices</a>
        </div>
        <div className="flex flex-col mb-4 md:mb-0">
          <a href="#" className="hover:text-white">Account</a>
          <a href="#" className="hover:text-white">Ways to Watch</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Corporate Information</a>
        </div>
      </div>
    </div>
    <div className="mt-8">
      <p className="text-sm">© 2024 MoviesFlix, Inc. All rights reserved.</p>
    </div>
  </div>
</footer>



     
     
         </div>
  );
}
