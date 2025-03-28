import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";

function Footer() {
  return (
    <section className="relative font-Quicksand overflow-hidden py-10 bg-slate-900 border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
               
              </div>
             
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white hover:">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-slate-600 transition-colors duration-300"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
          
        </div>
        
      </div>
      <div>
                <p className="text-sm text-white ml-2">
                  &copy; Copyright 2025 by @adetia108.
                </p>
              </div>
    </section>
  );
}

export default Footer;