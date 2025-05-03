'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Contact = {
  name: string;
  profileImage: string;
  whatsappLink: string;
};

interface WhatsappContactsProps {
  contacts: Contact[];
}

const WhatsappContacts: React.FC<WhatsappContactsProps> = ({ contacts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
        setIsMinimized(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleOpen}
          className="bg-gradient-to-tr from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 focus:outline-none"
          aria-label="Abrir WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6-1.6a11.94 11.94 0 0 0 6 1.6c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.28-1.45l-.38-.22-3.55.95.95-3.55-.22-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.82-1.9-.92-.25-.1-.43-.14-.6.14-.18.28-.7.92-.86 1.1-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.4-1.65-1.57-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.6-1.43-.82-1.95-.22-.52-.42-.45-.6-.46h-.52c-.18 0-.46.07-.7.35-.24.28-.92.9-.92 2.2s.95 2.55 1.08 2.73c.14.18 1.87 2.85 4.55 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 max-sm:w-72 bg-white border border-green-500 rounded-xl shadow-xl animate-fadeInUp">
          {/* Window Bar */}
          <div className="flex items-center justify-between bg-green-500 text-white px-4 py-2 rounded-t-xl">
            <span className="font-semibold">Contactos por WhatsApp</span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-green-600 rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold"
                title="Minimizar"
              >
                &#8211;
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(false);
                }}
                className="hover:bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                title="Cerrar"
              >
                &times;
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="p-4 max-h-80 overflow-y-auto">
              <ul className="space-y-4">
                {contacts.map((contact, index) => (
                  <li key={index} className="flex items-center">
                    <Image
                      src={contact.profileImage}
                      alt={contact.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3 object-cover border border-gray-300"
                    />
                    <a
                      href={contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      {contact.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WhatsappContacts;
