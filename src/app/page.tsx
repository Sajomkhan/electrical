import ServicesCard from "@/components/card/ServicesCard";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HIGHLIGHT */}
      <div className="md:hidden flex flex-col bg-gray-900 text-3xl text-primary_1 font-bold text-center py-6">
        <p className="underline mb-2">Contact Us:</p>
        <p>01911977375</p>
        <p>01715324158</p>
      </div>
      {/* HERO */}
      <Hero />
      {/* SERVICES */}
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-8 p-6">
          <h1 className="text-3xl font-bold mb-3">
            Our Main Parts of Solution and Support Include:
          </h1>
          <p>
            we offer a comprehensive range of expert services tailored to meet
            the diverse needs of businesses. Our specialties include Electrical
            Control & Power Circuit Support, ensuring efficient operations
            through custom panels and PLC programming; AC Services for reliable
            cooling solutions; and CCTV Surveillance and Fire Alarm System
            Solutions for enhanced security and safety. Additionally, we provide
            IT Support for Web Development
          </p>
        </div>
        <ServicesCard />
      </div>

    </div>
  );
}
