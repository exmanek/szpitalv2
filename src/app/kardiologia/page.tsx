import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function KardiologiaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-red-600">Kardiologia</h1>
        <p className="text-lg text-gray-700">
          Specjalistyczna opieka nad Twoim sercem – diagnostyka, leczenie i profilaktyka chorób układu krążenia.
        </p>
        <Image
          src="/departments/kardiologia.jpg"
          alt="Kardiologia"
          width={800}
          height={400}
          className="rounded-2xl shadow-md mx-auto"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Zakres usług</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Konsultacje kardiologiczne</li>
          <li>EKG, echo serca, próby wysiłkowe</li>
          <li>Monitorowanie Holter EKG i ciśnieniowy</li>
          <li>Diagnostyka i leczenie nadciśnienia</li>
          <li>Opieka po zawale serca</li>
          <li>Prewencja chorób sercowo-naczyniowych</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dlaczego warto?</h2>
        <p className="text-gray-700">
          Nasz zespół kardiologów łączy wieloletnie doświadczenie kliniczne z nowoczesnym sprzętem diagnostycznym. Zapewniamy indywidualne podejście i kompleksową opiekę.
        </p>
      </section>

      <section className="text-center">
        <Link href="/kontakt">
          <Button className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg">
            Umów wizytę
          </Button>
        </Link>
      </section>
    </div>
  );
}
