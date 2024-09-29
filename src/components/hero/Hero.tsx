import Image from "next/image";

const Hero = () => {
  return (
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row gap-x-8 gap-y-16 items-center px-4 py-6 md:py-16 ">
          {/* TEXT SECTION */}
          <div className="mx-auto w-full md:w-1/2 text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
             Barishal Tech Support
              {/* <span className="sm:block"> Increase Conversion. </span> */}
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Best Electrical and Software Solution Provider Company
            in Bangladesh
              {/* illo tenetur fuga ducimus numquam ea! */}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-primary_1 bg-primary_2 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                View Details
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* IMAGE SECTION*/}
          <div className="h-52 md:h-96 w-full md:w-1/2 relative">
            <Image
              src={
                "https://img.freepik.com/free-photo/electrical-panel-electric-meter-circuit-breakers-electric-frequency-converter-motor-speed-controller-rework-station_627829-10704.jpg?t=st=1727460912~exp=1727464512~hmac=48acc0540cd9837e638024ba89fb002b2f71350f774abd7b4e1c63a129a28fcc&w=996"
              }
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
  );
};

export default Hero;
