import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contato</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          <div className="flex-1 md:w-1/2">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Me contate</h3>
            <p>Estou aberto a discutir projetos de desenvolvimento web ou oportunidades de parceria.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:youremail@example.com" className='hover:underline'>
                pedrogutierreh@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>(11) 98943-2389</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
