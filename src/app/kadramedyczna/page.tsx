"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";

interface StaffMember {
  name: string;
  title: string;
  image: string;
  description: string;
}

const staff: StaffMember[] = [
  {
    name: "dr n. med. Anna Nowak",
    title: "Ordynator Oddziału Chirurgii",
    image: "/staff/anna-nowak.jpg",
    description:
      "Specjalistka chirurgii ogólnej z ponad 20-letnim doświadczeniem. Uczestniczka licznych konferencji naukowych.",
  },
  {
    name: "lek. Tomasz Kowalski",
    title: "Pediatra",
    image: "/staff/tomasz-kowalski.jpg",
    description:
      "Zajmuje się opieką nad najmłodszymi pacjentami, specjalizuje się w chorobach zakaźnych wieku dziecięcego.",
  },
  {
    name: "mgr Elżbieta Wiśniewska",
    title: "Pielęgniarka Oddziałowa",
    image: "/staff/elzbieta-wisniewska.jpg",
    description:
      "Koordynuje pracę personelu pielęgniarskiego. Posiada wieloletnie doświadczenie w opiece szpitalnej.",
  },
  {
    name: "dr hab. Michał Zawadzki",
    title: "Kardiolog",
    image: "/staff/michal-zawadzki.jpg",
    description:
      "Ekspert w diagnostyce chorób serca. Prowadzi badania naukowe nad prewencją chorób wieńcowych.",
  },
  {
    name: "lek. Karolina Zielińska",
    title: "Ginekolog",
    image: "/staff/karolina-zielinska.jpg",
    description:
      "Specjalistka w zakresie ginekologii i położnictwa. Opiekuje się kobietami na każdym etapie życia.",
  },
  {
    name: "dr Piotr Maj",
    title: "Ortopeda",
    image: "/staff/piotr-maj.jpg",
    description:
      "Zajmuje się diagnostyką i leczeniem urazów narządu ruchu. Pracuje z pacjentami sportowymi.",
  },
  {
    name: "mgr Monika Baran",
    title: "Fizjoterapeutka",
    image: "/staff/monika-baran.jpg",
    description:
      "Pomaga pacjentom wracać do sprawności po urazach i operacjach. Specjalistka rehabilitacji neurologicznej.",
  },
  {
    name: "dr n. med. Jakub Wrona",
    title: "Anestezjolog",
    image: "/staff/jakub-wrona.jpg",
    description:
      "Odpowiada za bezpieczeństwo pacjentów podczas zabiegów operacyjnych. Ekspert w leczeniu bólu.",
  },
  {
    name: "lek. Joanna Lis",
    title: "Dermatolog",
    image: "/staff/joanna-lis.jpg",
    description:
      "Specjalizuje się w diagnostyce chorób skóry, prowadzi również zabiegi z zakresu dermatologii estetycznej.",
  },
  {
    name: "mgr Paweł Dąbrowski",
    title: "Ratownik Medyczny",
    image: "/staff/pawel-dabrowski.jpg",
    description:
      "Pierwsza linia pomocy w stanach zagrożenia życia. Szybko reaguje i współpracuje z zespołami lekarskimi.",
  },
];


export default function MedicalStaffPage() {
  return (
    <div className="min-h-screen bg-gray-100">
    <nav className="bg-white shadow-sm py-4">
      <Navbar />
    </nav>
    <main className="max-w-6xl mx-auto px-4 py-10">
      <motion.h1
        className="text-4xl font-bold text-blue-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Kadra Medyczna
      </motion.h1>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {staff.map((member, index) => (
          <motion.div
            key={member.name}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative w-full h-64">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-700 font-medium mb-2">{member.title}</p>
              <p className="text-gray-700 text-sm">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
    </div>
  );
}
