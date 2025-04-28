import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Logo from "./Logo";
import InstagramIcon from "../../src/assets/instagram.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lgt-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Logo variant="white" className="mb-4" />
            <p className="mt-4 text-gray-300">
              Professional low voltage solutions for residential, commercial,
              and industrial clients. Your trusted partner for all technical
              needs.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.instagram.com/lgtechnical/"
                className="text-white hover:text-lgt-orange transition-colors"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="filter invert"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/low-voltage"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Low Voltage Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/services/security"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Security Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/services/access-control"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Access Control
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cabling"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Cabling & Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/services/smart-building"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Smart Building Integration
                </Link>
              </li>
              <li>
                <Link
                  to="/services/handyman"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  Handyman Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-lgt-orange" />
                <div>
                  <p className="text-gray-300">(347) 595-4221</p>
                  <p className="text-gray-300">+1 (929) 743-2705</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-lgt-orange" />
                <a
                  href="mailto:LGTechnical608@gmail.com"
                  className="text-gray-300 hover:text-lgt-orange transition-colors"
                >
                  LGTechnical608@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-lgt-orange" />
                <div>
                  <p className="text-gray-300">Monday - Friday: 8am - 6pm</p>
                  <p className="text-gray-300">Saturday: 9am - 2pm</p>
                </div>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-lgt-orange" />
                <span className="text-gray-300">
                  Service areas throughout NY metro area
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} LGT (Let's Get Technical). All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
