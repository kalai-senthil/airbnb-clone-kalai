import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-[50%] w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white font-bold px-10 py-4 shadow-md rounded-full my-3 hover:shadow-xl active:scale-105 transition ease-linear duration-75">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
