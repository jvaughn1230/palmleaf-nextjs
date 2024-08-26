import React from "react";
import { CategoryDirectoryItemType } from "@/types/types";
import { useRouter } from "next/navigation";

interface DirectoryItemProps {
  category: CategoryDirectoryItemType;
}

const DirectoryItem: React.FC<DirectoryItemProps> = ({ category }) => {
  const router = useRouter();
  const { imageUrl, title, route } = category;

  const onNavigateHandler = () => {
    router.push(route);
  };

  return (
    <div
      onClick={onNavigateHandler}
      className="min-w-[30%] h-60 flex flex-auto items-center justify-center border-2 border-solid border-black mt-0   hover:cursor-pointer md:min-w-[33%] md:max-w-1/3 md:max-w-[50%]"
    >
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className=" h-[90px] py-0 px-[1.5625rem] flex flex-col items-center justify-center border-2 border-solid border-black bg-white opacity-[0.7] absolute">
        <h2 className="my-0 mx-[6px] uppercase">{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
