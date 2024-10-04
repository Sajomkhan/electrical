import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <div className="mx-auto max-w-screen-lg flex flex-col gap-10 my-10">
      <h1 className="text-center">Our Services</h1>
      {services.map((service, index) => (
        <section key={index}>
          <Link
            href={`/services/${service.id}`}
            className="flex flex-col lg:flex-row gap-x-16 cursor-pointer p-4 rounded-lg hover:bg-slate-200 ease-linear duration-300"
          >
            <div className="lg:w-2/5 h-48 relative">
              <Image
                src={service.img}
                alt=""
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="lg:w-3/5 flex flex-col gap-2 mt-6 text-justify">
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <p className="">{service.desc}</p>
            </div>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default ServicesPage;
