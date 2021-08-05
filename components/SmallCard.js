import Image from "next/image";

function SmallCard({ loc }) {
  const { img, location, distance } = loc;
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-10 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div className="mx-2">
        <h2 className="text-gray-500">{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
