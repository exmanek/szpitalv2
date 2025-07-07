"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaUserNurse,
  FaSyringe,
  FaXRay,
  FaHeart,
  FaBrain,
  FaProcedures,
  FaBaby,
  FaBriefcaseMedical,
  FaClinicMedical,
} from "react-icons/fa";

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-blue-800"
      >
        Nasze Usługi
      </motion.h1>

      <motion.section
        className="mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-gray-700 text-lg mb-6">
          Oferujemy kompleksową opiekę medyczną w wielu dziedzinach, zapewniając pacjentom bezpieczeństwo, komfort i najnowsze metody leczenia. Nasz zespół specjalistów działa z pasją i zaangażowaniem, dbając o zdrowie każdego pacjenta.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ServiceCard icon={<FaStethoscope />} title="Konsultacje specjalistyczne" description="Indywidualna diagnostyka i leczenie w różnych dziedzinach medycyny." />
          <ServiceCard icon={<FaSyringe />} title="Szczepienia" description="Bezpieczne i aktualne szczepienia dla dzieci i dorosłych." />
          <ServiceCard icon={<FaXRay />} title="Diagnostyka obrazowa" description="RTG, USG, tomografia i rezonans magnetyczny." />
          <ServiceCard icon={<FaHeart />} title="Opieka kardiologiczna" description="Diagnostyka i leczenie chorób serca i układu krążenia." />
          <ServiceCard icon={<FaBrain />} title="Neurologia" description="Nowoczesna opieka nad pacjentami z zaburzeniami neurologicznymi." />
          <ServiceCard icon={<FaProcedures />} title="Hospitalizacja" description="Profesjonalna opieka w komfortowych warunkach stacjonarnych." />
          <ServiceCard icon={<FaBaby />} title="Opieka okołoporodowa" description="Ginekologia i położnictwo — kompleksowa opieka nad kobietami w ciąży." />
          <ServiceCard icon={<FaBriefcaseMedical />} title="Chirurgia ogólna" description="Zabiegi planowe i nagłe wykonywane przez doświadczonych chirurgów." />
          <ServiceCard icon={<FaClinicMedical />} title="Rehabilitacja" description="Indywidualne programy terapii dla powrotu do sprawności." />
        </div>
      </motion.section>
    </main>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02]">
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
