import { services } from "@/lib/data";
import Image from "next/image";

const SingleService = ({ params }: { params: { slug: string } }) => {
  const service = services.find((service) => service.id.toString() === params.slug);

  if (!service) return null;

  return (
    <div className="container min-h-[calc(100vh-160px)] flex flex-col gap-10 justify-center items-center my-10 px-4">
      <div className="w-full md:w-3/5 h-60 relative">
        <Image
          src={service.img}
          alt=""
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="md:w-3/5 flex flex-col gap-4 text-justify md:text-center">
        <div className="text-xl md:text-3xl font-semibold">{service.title}</div>
        <div className="">{service.desc}</div>
      </div>
    </div>
  );
};

export default SingleService;
