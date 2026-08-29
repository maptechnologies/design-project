"use client";

import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="relative w-full bg-white py-16 sm:py-24">
      {/* Vertical "Let's Get Started" tab */}
      <div className="absolute left-0 top-24 hidden md:flex">
        
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get In Touch With Us
          </h2>
          <p className="mt-4 text-gray-500">
            Our friendly call center representatives are always available
            round the clock for any guidance
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Left: Let's Talk */}
          <div>
            <h3 className="text-4xl font-semibold text-[#60d2ee]">
              Let&apos;s Talk.
            </h3>

            <div className="mt-6 flex items-center gap-3">
              <Phone className="text-[#60d2ee]" size={28} />
              <div>
                <p className="text-sm font-semibold tracking-wide text-gray-500">
                  CALL US AT
                </p>
                <a
                  href="tel:+13135129347"
                  className="text-lg font-bold text-[#60d2ee] hover:underline"
                >
                  (313) 512-9347
                </a>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <p className="text-gray-500 leading-relaxed">
                We are available on live chat! Just ping us and we will take
                care of it all.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <MessageCircle
                className="fill-[#60d2ee] text-[#60d2ee]"
                size={28}
              />
              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500">
                  LET&apos;S CHAT NOW
                </p>
                <button
                  type="button"
                  className="text-lg font-bold text-[#60d2ee] hover:underline"
                >
                  LIVE CHAT
                </button>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form className="md:col-span-2 space-y-4">
            <input
              type="text"
              placeholder="First Name *"
              required
              className="w-full border border-gray-300 px-4 py-3.5 text-gray-700 placeholder-gray-400 outline-none focus:border-cyan-400"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number*"
                required
                className="w-full border border-gray-300 px-4 py-3.5 text-gray-700 placeholder-gray-400 outline-none focus:border-cyan-400"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full border border-gray-300 px-4 py-3.5 text-gray-700 placeholder-gray-400 outline-none focus:border-cyan-400"
              />
            </div>

            <textarea
              placeholder="Requirement *"
              required
              rows={4}
              className="w-full resize-none border border-gray-300 px-4 py-3.5 text-gray-700 placeholder-gray-400 outline-none focus:border-cyan-400"
            />

            {/* Consent checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="sms-consent"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-cyan-400"
              />
              <label
                htmlFor="sms-consent"
                className="text-xs text-black leading-relaxed"
              >
                I agree to receive SMS/text messages from Bloops Designs.
                Message and data rates may apply. Message frequency varies.
                Reply STOP to opt out. Reply HELP for more information.
                Consent is not a condition of purchase.
              </label>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              By submitting this form, I agree to receive recurring SMS/text
              messages from Bloops Designs regarding my account, services,
              promotions, and/or other requested information. Message and
              data rates may apply. Message frequency varies. Reply STOP to
              opt out. Reply HELP for more information. Consent is not a
              condition of purchase. By providing my phone number and
              submitting this form, I confirm that I am authorized to provide
              this number and consent to receive SMS messages from Bloops
              Designs.
            </p>

            <div className="pt-2">
              <button
                type="submit"
                className="rounded-full border-2 border-[#0092e3] px-10 py-3 font-bold text-gray-900 transition-colors hover:bg-cyan-400 hover:text-white"
              >
                SEND NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}