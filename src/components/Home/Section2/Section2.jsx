import React, { useEffect, useState } from "react";

import { PersonaSection2 } from "../../../Utils/item";
import Card from "../../Item/Card";
import { useData } from "../../../Context/DataProviders";
import { Result } from "antd";

const Section2 = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [ListProducts, setListProducts] = useState([]);
  const { Products } = useData();

  useEffect(() => {
    const newFilteredArray = Products.filter(
      (item) => item.section === "Thông tin mới" && item.post === "Home"
    );
    setListProducts(newFilteredArray);
  }, [Products]);

  const HandleSelect = (idx, name) => {
    setIsSelected(idx);
    if (idx === 0) {
      const newFilteredArray = Products.filter(
        (item) => item.section === "Thông tin mới" && item.post === "Home"
      );
      setListProducts(newFilteredArray);
    } else {
      const newFilteredArray = Products.filter(
        (item) =>
          item.section === "Thông tin mới" &&
          item.post === "Home" &&
          item.type === name
      );
      setListProducts(newFilteredArray);
    }
  };

  return (
    <div className="relative  ">
      <div className="d:flex  relative p:hidden">
        <div className="flex-1"></div>
        <div className="flex-1 h-[900px] bg-grayBg"></div>
      </div>

      <div className="flex flex-col p:relative d:absolute top-16  w-full items-center gap-16">
        <div className="flex justify-between d:w-full p:w-screen p-2 pr-16 d:flex-row p:flex-col">
          <h3 className="text-content">
            <strong>Thông tin</strong> mới nhất
          </h3>
          <div className="text-[#68737a] flex italic gap-3 cursor-pointer">
            {PersonaSection2.map((items, idx) => (
              <div key={idx}>
                <div
                  className={`p:px-1 d:px-4 py-3 rounded-3xl text-center ${
                    isSelected === idx ? "bg-[#1b365d] text-white " : "bg-white"
                  }`}
                  onClick={() => HandleSelect(idx, items.name)}
                >
                  {items.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {ListProducts.length > 0 ? (
          <>
            <div className="d:grid grid-cols-3  gap-2 w-full p:flex flex-col items-center ">
              {ListProducts.slice(0, 3).map((items, idx) => (
                <>
                  <Card
                    image={items.image}
                    date={items.date}
                    type={items.type}
                    title={items.title}
                    content={items.content}
                    link={items.link}
                    size="540"
                  />
                </>
              ))}
            </div>
            <div className="font-bold bg-redPrimmary hover:scale-110 duration-300 hover:shadow-2xl  text-white w-[150px] rounded-3xl py-3 px-6 cursor-pointer">
              Xem chi tiết
            </div>
          </>
        ) : (
          <div className="bg-blue-300 w-full ">
            {" "}
            <Result
              status="404"
              title="Không tìm thấy bài viết!"
              subTitle="Không có bài viết phù hợp với yêu cầu của bạn "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section2;
