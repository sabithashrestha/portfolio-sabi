import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black/20 backdrop-blur-md sticky top-0 z-50 px-6 py-4'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold'>YourName</div>
        <div className='hidden md:flex space-x-8'>
          <a href='#home' className='hover:text-purple-400 transition'>
            Home
          </a>
          <a href='#projects' className='hover:text-purple-400 transition'>
            Projects
          </a>
          <a href='#contact' className='hover:text-purple-400 transition'>
            Contact
          </a>
        </div>
        <button className='md:hidden p-2' onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden flex flex-col space-y-4 mt-2 px-2'>
          <a href='#home' className='hover:text-purple-400'>
            Home
          </a>
          <a href='#projects' className='hover:text-purple-400'>
            Projects
          </a>
          <a href='#contact' className='hover:text-purple-400'>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
