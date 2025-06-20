'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Contact = {
  name: string;
  profileImage: string;
  whatsappLink: string;
};

const contacts: Contact[] = [
  {
    name: 'Alejandro Suehsner',
    profileImage: '/images/people/ale.png',
    whatsappLink: 'https://wa.link/ktpqgg',
  },
  {
    name: 'Iván Amarilla',
    profileImage: '/images/people/n.png',
    whatsappLink: 'https://wa.link/62cfao',
  },
  {
    name: 'Heriberto Lugo',
    profileImage: '/images/people/heriberto.png',
    whatsappLink: 'https://wa.link/a4sm5x',
  },
  {
    name: 'Emilio Winckler',
    profileImage: '/images/people/s.png',
    whatsappLink: 'https://wa.link/50chk0',
  },
  {
    name: 'Francisco Céspedes',
    profileImage: '/images/people/francisco.png',
    whatsappLink: 'https://wa.link/unfsew',
  },
  {
    name: 'Manuel Bobadilla',
    profileImage: '/images/people/manuel.png',
    whatsappLink: 'https://wa.link/mqmch5',
  },
];

const WhatsappContacts: React.FC = () => {
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
    <div className="fixed bottom-12 right-4 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleOpen}
          className="bg-gradient-to-tr from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 focus:outline-none flex items-center gap-2"
          aria-label="Abrir WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6-1.6a11.94 11.94 0 0 0 6 1.6c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.28-1.45l-.38-.22-3.55.95.95-3.55-.22-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.82-1.9-.92-.25-.1-.43-.14-.6.14-.18.28-.7.92-.86 1.1-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.4-1.65-1.57-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.6-1.43-.82-1.95-.22-.52-.42-.45-.6-.46h-.52c-.18 0-.46.07-.7.35-.24.28-.92.9-.92 2.2s.95 2.55 1.08 2.73c.14.18 1.87 2.85 4.55 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
          </svg>
          
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 max-sm:w-72 bg-white border border-green-500 rounded-2xl shadow-2xl animate-fadeInUp overflow-hidden">
          {/* Window Bar */}
          <div className="flex items-center justify-between bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-t-2xl">
            <span className="font-semibold text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6-1.6a11.94 11.94 0 0 0 6 1.6c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.28-1.45l-.38-.22-3.55.95.95-3.55-.22-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.82-1.9-.92-.25-.1-.43-.14-.6.14-.18.28-.7.92-.86 1.1-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.4-1.65-1.57-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.6-1.43-.82-1.95-.22-.52-.42-.45-.6-.46h-.52c-.18 0-.46.07-.7.35-.24.28-.92.9-.92 2.2s.95 2.55 1.08 2.73c.14.18 1.87 2.85 4.55 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
              </svg>
              ¡Bienvenido!
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-green-600 rounded-full w-6 h-6 flex items-center justify-center text-lg font-bold"
                title="Minimizar"
              >
                &#8211;
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(false);
                }}
                className="hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-lg font-bold"
                title="Cerrar"
              >
                &times;
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="p-5 bg-gradient-to-b from-green-50 to-white">
              {/* Mensaje de bienvenida */}
              <div className="mb-4 text-center">
                <div className="flex justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6-1.6a11.94 11.94 0 0 0 6 1.6c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.28-1.45l-.38-.22-3.55.95.95-3.55-.22-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.82-1.9-.92-.25-.1-.43-.14-.6.14-.18.28-.7.92-.86 1.1-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.4-1.65-1.57-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.6-1.43-.82-1.95-.22-.52-.42-.45-.6-.46h-.52c-.18 0-.46.07-.7.35-.24.28-.92.9-.92 2.2s.95 2.55 1.08 2.73c.14.18 1.87 2.85 4.55 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
                  </svg>
                </div>
                <h2 className="text-green-700 font-bold text-xl mb-1">¡Hola! 👋</h2>
                <p className="text-gray-700 text-base">
                  Nuestro equipo de ventas está listo para ayudarte.<br />
                  Selecciona un asesor para iniciar tu consulta por WhatsApp.
                </p>
              </div>
              {/* Lista de contactos */}
              <ul className="space-y-4">
                {contacts.map((contact, index) => (
                  <li key={index} className="flex items-center bg-white rounded-xl shadow p-2 hover:bg-green-50 transition">
                    <Image
                      src={contact.profileImage}
                      alt={contact.name}
                      width={44}
                      height={44}
                      className="rounded-full mr-3 object-cover border border-gray-300"
                    />
                    <div className="flex flex-col flex-1">
                      <span className="font-semibold text-green-800">{contact.name}</span>
                      <a
                        href={contact.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-medium hover:underline text-sm"
                      >
                        Chatear por WhatsApp
                      </a>
                    </div>
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
