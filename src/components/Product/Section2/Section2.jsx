import React, { useEffect, useState } from "react";
import { ProductSection2 } from "../../../Utils/item";
import Card from "../../Item/Card";
import { Result } from "antd";
import { useData } from "../../../Context/DataProviders";

const Section2 = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [ListProducts, setListProducts] = useState([]);
  const { Products } = useData();

  useEffect(() => {
    const newFilteredArray = Products.filter(
      (item) =>
        item.section === "Sản phẩm bảo hiểm bổ trợ" && item.post === "Home"
    );
    setListProducts(newFilteredArray);
  }, [Products]);

  const HandleSelect = (idx, name) => {
    setIsSelected(idx);
    if (idx === 0) {
      const newFilteredArray = Products.filter(
        (item) =>
          item.section === "Sản phẩm bảo hiểm bổ trợ" && item.post === "Home"
      );
      setListProducts(newFilteredArray);
    } else {
      const newFilteredArray = Products.filter(
        (item) =>
          item.section === "Sản phẩm bảo hiểm bổ trợ" &&
          item.post === "Home" &&
          item.type === name
      );
      setListProducts(newFilteredArray);
    }
  };
  return (
    <div className="relative mb-10 ">
      <div className="">
        <div className="text-[#68737a] d:flex italic gap-4 cursor-pointer justify-center mb-10 p:grid grid-cols-3">
          {ProductSection2.map((items, idx) => (
            <div>
              <div
                className={` px-4 py-3 rounded-3xl  ${
                  isSelected === idx ? "bg-[#1b365d] text-white " : "bg-white"
                }`}
                onClick={() => HandleSelect(idx, items.name)}
              >
                {items.name}
              </div>
            </div>
          ))}
        </div>
        {ListProducts.length > 0 ? (
          <>
            <div className="d:grid grid-cols-3 gap-10 d:mx-20 p:mx-0 p:flex flex-col items-center">
              {ListProducts.map((items, idx) => (
                <Card
                  image={items.image}
                  date={items.date}
                  type={items.type}
                  title={items.title}
                  content={items.content}
                  link={items.link}
                  size="450"
                />
              ))}
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
