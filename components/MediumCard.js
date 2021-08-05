import Image from "next/image";

function MediumCard({ data }) {
  const { img, title } = data;
  return (
    <div className="cursor-pointer hover:scale-105 transform transition ease-out duration-300">
      <div className="relative h-80 w-80">
        <Image layout="fill" src={img} className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
