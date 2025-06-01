"use client";
import React, { useState } from "react";
import { Phone, MapPin, Mail as MailIcon } from "lucide-react";
import Gallery from "./Gallery";
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import FacebookImage from "../assets/Facebook.png";
import LinkedInImage from "../assets/linkedin.png";
import Image from "next/image";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/mwpbegwk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    if (res.ok) {
      setSubmitted(true);
      e.target.reset();
    }
  };

  return (
    <div className="container   flex flex-col justify-center items-center py-10 lg:py-20 px-5 md:px-10 lg:px-20">
              {/* <Gallery /> */}

      <div className="w-full    rounded-3xl   flex flex-col gap-8">
        <h1 className="text-2xl md:text-3xl font-bold font-cardo  text-black">
          CONTACT US
        </h1>
        <div className="lg:flex  md:gap-8">
          {/* Left: Get in Touch Form */}
          <div className="flex-1 bg-gray-50 rounded-xl p-6 mb-6 md:mb-0 md:mr-2 shadow-sm">
            <h2 className="font-semibold text-lg mb-4 text-black">
              GET IN TOUCH
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="md:flex md:gap-4">
                <div className="flex-1 mb-2 md:mb-0">
                  <label className="block text-xs font-semibold mb-1 text-gray-700">
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name*"
                    className="w-full border border-gray-200 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold mb-1 text-gray-700">
                    PHONE NUMBER
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone || ""}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Enter your phone number*"
                    className="w-full border border-gray-200 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-700">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email*"
                  className="w-full border border-gray-200 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-700">
                  YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter your message"
                  className="w-full border border-gray-200 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2e2e2e] hover:bg-[#000] text-white font-semibold py-2.5 rounded-md transition text-base mt-2"
              >
                SEND MESSAGE
              </button>
              {submitted && (
                <p className="text-green-600 text-center mt-2 font-cardo">
                  Thank you for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
          {/* Right: Contact Info & Business Hours */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-gray-50 rounded-xl p-6  shadow-sm mb-2">
              <h2 className="font-semibold text-lg mb-4 text-black">
                CONTACT INFORMATION
              </h2>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={18} className="text-red-500" />
                  <span>+61 0426611152</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MailIcon size={18} className="text-red-500" />
                  <span>olimuna53@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={18} className="text-red-500" />
                  <span> UNIT 301,11-17 WOODVILLE ST,HURSTVILLE NSW 2220 </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <a
                    href="https://www.linkedin.com/in/muna-oli-b0032333a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
                  >
                    <Image
                      src={LinkedInImage}
                      alt="linkedin"
                      height={40}
                      className="h-5 w-5"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1AdKB1Ezn7/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
                  >
                    <Image
                      src={FacebookImage}
                      alt="facebook"
                      height={40}
                      className="h-5 w-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="w-full mt-4 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=UNIT+301,+11-17+WOODVILLE+ST,+HURSTVILLE+NSW+2220&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
