import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IconMapping, ProductOptionItems } from "../../../../../../Utils/item";
import { useStateProvider } from "../../../../../../Context/StateProvider";

const ListProduct = () => {
  const { setIsUploadProduct } = useStateProvider();

  return (
    <div className="w-[400px] shadow-2xl bg-[#353535]">
      <div className="p-3">
        <div className="flex justify-between items-center text-[25px] p-3 flex-col gap-3">
          <p className="uppercase  text-center w-full from-yellow-400">
            Tùy chọn sản phẩm
          </p>
          <div className="h-[400px] w-[370px] border  rounded-2xl overflow-y-scroll ">
            <div className="flex flex-col cursor-pointer">
              {ProductOptionItems.map((items, idx) => {
                let Icon = IconMapping[items.icon];

                return (
                  <div
                    className="rounded-lg mx-5 my-5  hover:bg-white bg-gray-500 group"
                    onClick={() => setIsUploadProduct(`${items.name}`)}
                  >
                    <div
                      key={idx}
                      className="flex  gap-3 items-center  justify-start ml-10 py-3 text-[25px] font-bold uppercase rounded-lg text-center hover:text-red-500 bg-none "
                    >
                      {Icon && (
                        <Icon
                          className={`border-2 rounded-full text-[30px] p-[3px] 
                          group-hover:border-red-500 
                       
                          "border-white"
                        `}
                        />
                      )}
                      <p> {items.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
