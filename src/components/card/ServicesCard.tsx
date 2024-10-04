import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const ServicesCard = () => {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8 justify-center">
      {services.map((service, index) => (
        <Link
          href={`/services/${service.id}`}
          className="w-80 xl:w-64 flex flex-col gap-5 p-3 border hover:border-gray-400 rounded-lg"
          key={index}
        >
          <section className="h-36 xl:h-52 w-full relative rounded-lg">
            <Image src={service.img} alt="" fill className="object-cover" />
          </section>
          <div className="flex flex-col gap-3 text-sm">
            <h2 className="font-semibold text-base">{service.title}</h2>
            <p className="">{service.desc.slice(0, 120)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesCard;
