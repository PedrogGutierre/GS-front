import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-4 flex justify-between items-center"> {/* Alterado de py-4 para py-3 */}
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide transform transition-transform duration-300 hover:scale-110 hover:text-blue-400">
          Pedro Gutierre
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition duration-300">
            Sobre mim
          </a>
          <a href="#service" className="hover:text-blue-400 transition duration-300">
            Serviços
          </a>
          <a href="#project" className="hover:text-blue-400 transition duration-300">
            Projetos
          </a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="focus:outline-none p-2 rounded-md hover:bg-gray-700 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-gray-800 text-white px-8 py-4 space-y-4"
      >
        <a href="#home" className="block hover:text-blue-400 transition duration-300">
          Home
        </a>
        <a href="#about" className="block hover:text-blue-400 transition duration-300">
          Sobre mim
        </a>
        <a href="#service" className="block hover:text-blue-400 transition duration-300">
          Serviços
        </a>
        <a href="#project" className="block hover:text-blue-400 transition duration-300">
          Projetos
        </a>
        <a href="#contact" className="block hover:text-blue-400 transition duration-300">
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
