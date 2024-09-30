import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <div className="container flex flex-col gap-10 my-10">
      {services.map((service, index) => (
        <Link
          href={`/services/${service.id}`}
          className="flex gap-20 cursor-pointer p-4 rounded-lg hover:bg-slate-200 ease-linear duration-300"
          key={index}
        >
          <div className="w-2/5 h-48 relative">
            <Image
              src={service.img}
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-3/5 flex flex-col gap-2">
            <div className="text-lg font-semibold">{service.title}</div>
            <div className="">{service.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesPage;
