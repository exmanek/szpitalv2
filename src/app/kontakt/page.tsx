"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-blue-800"
      >
        Kontakt
      </motion.h1>

      <motion.section
        className="bg-white p-6 rounded-xl shadow-lg mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Skontaktuj się z nami</h2>
        <p className="text-gray-700 mb-6">Masz pytania? Napisz do nas lub zadzwoń — odpowiemy tak szybko, jak to możliwe.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl text-green-600" />
              <p className="text-gray-800 text-lg">+48 123 456 789</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl text-red-500" />
              <p className="text-gray-800 text-lg">kontakt@szpital.pl</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl text-blue-600" />
              <p className="text-gray-800 text-lg">ul. Zdrowia 12, 00-123 Warszawa</p>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
            <input
              type="email"
              placeholder="Adres e-mail"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
            <textarea
              placeholder="Twoja wiadomość"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-sm text-gray-500"
      >
        &copy; {new Date().getFullYear()} Miejski Szpital Ogólny. Wszelkie prawa zastrzeżone.
      </motion.section>
    </main>
  );
}
