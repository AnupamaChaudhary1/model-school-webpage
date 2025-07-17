
import React from 'react';
import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Model English</h3>
                <p className="text-sm text-gray-400">Boarding School</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nurturing minds and shaping futures since 2057 B.S. We are committed to providing quality education with a holistic approach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#teachers" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Teachers
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Ghorahi-10, Narayanpur, Dang, Nepal</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300">985-7863976</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">modelebs75@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <div className="space-y-2 text-gray-300">
              <p><span className="font-medium">Mon - Fri:</span> 9:00 AM - 5:00 PM</p>
              <p><span className="font-medium">Sunday:</span> 9:00 AM - 5:00 PM</p>
              <p><span className="font-medium">Saturday:</span> Closed</p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 italic">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Model English Boarding School. All rights reserved. | 
            <span className="text-blue-400"> Nurturing Minds, Shaping Futures</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
