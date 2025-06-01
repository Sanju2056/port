"use client";
import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

const FooterContactForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out!");
    setEmail("");
  };

  return (
    <div className="w-full  text-white py-14 ">
      <div className="  flex flex-col md:flex-row   gap-12">
        {/* Message */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-2xl text-[#2e2e2e] font-semibold">Let's stay connected</h3>
          <p className="text-gray-400">Drop your email and I’ll get back to you!</p>
        </div>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full md:w-auto max-w-md gap-2 items-center"
        >
          <div className="relative w-full">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-md  text-[#2E2E2E] placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
                className="bg-black text-white px-8 text-semibold flex items-center justify-center py-2.5 rounded hover:bg-gray-800 transition"
          >
            <Send size={18} />
            <span className="hidden sm:inline">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterContactForm;
