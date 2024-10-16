import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='top-0 p-[20px] font-semibold text-black w-screen font-poppins text-lg flex h-20 items-center justify-between fixed z-50 shadow-md bg-gradient-to-b from-white to-gray-200'>
      <img src="VAISHALI TECH.png" alt="Logo" className='w-[200px] h-[50px] ml-[30px] sm:w-[150px] sm:h-[40px]' />
      
      {/* Hamburger Icon for mobile screens */}
      <div className="md:hidden cursor-pointer mr-6" onClick={handleToggle}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Navbar menu for larger screens */}
      <div className='hidden md:flex gap-10 ml-[60px]'>
        <a
          href="#webdesign"
          className="menuitem bg-transparent text-black p-2 hover:text-[#4e6185] hover:font-bold duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('webdesign')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Web-designs
        </a>

        <a
          href="#uiux"
          className="menuitem bg-transparent text-black p-2 hover:bg-[#4e6185] hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('uiux')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          UI/UX
        </a>

        <a
          href="#digitalmarketing"
          className="menuitem bg-transparent text-black p-2 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('digitalmarketing')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Digital Marketing
        </a>

        <a
          href="#aboutus"
          className="menuitem bg-transparent text-black p-2 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('aboutus')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          About Us
        </a>

        <a
          href="#caseStudy"
          className="menuitem bg-transparent text-black p-2 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('caseStudy')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Case Study
        </a>

        <a
          href="#contact"
          className="menuitem bg-transparent text-black p-2 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-end py-4">
          <a
            href="#webdesign"
            className="menuitem bg-transparent text-black p-4 hover:text-[#4e6185] hover:font-bold duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('webdesign')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false); // Close menu after click
            }}
          >
            Web-designs
          </a>

          <a
            href="#uiux"
            className="menuitem bg-transparent text-black p-4 hover:bg-[#4e6185] hover:text-white transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('uiux')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            UI/UX
          </a>

          <a
            href="#digitalmarketing"
            className="menuitem bg-transparent text-black p-4 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('digitalmarketing')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Digital Marketing
          </a>

          <a
            href="#aboutus"
            className="menuitem bg-transparent text-black p-4 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('aboutus')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            About Us
          </a>

          <a
            href="#caseStudy"
            className="menuitem bg-transparent text-black p-4 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('caseStudy')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Case Study
          </a>

          <a
            href="#contact"
            className="menuitem bg-transparent text-black p-4 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
