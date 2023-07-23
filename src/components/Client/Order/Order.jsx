import React, { useEffect, useState } from "react";
import Preview from "./Section/Preview";
import Payment from "./Section/Payment";
import { useData } from "../../../Context/DataProviders";

const Order = () => {
  const { productTypes, Products } = useData();
  const [isSort, setIsSort] = useState();

  const [batteryTypes, setBatteryTypes] = useState("");
  const [carTypes, setCarTypes] = useState("");
  const [carColorTypes, setCarColorTypes] = useState("");
  const [hoodColorTypes, setHoodColorTypes] = useState("");

  useEffect(() => {
    const initBatteryTypes = productTypes?.filter(
      (item) => item.type === "Pin xe"
    );

    const initcarColorTypes = productTypes?.filter(
      (item) => item.type === "Màu xe"
    );

    const initcarTypes = productTypes?.filter(
      (item) => item.type === "Dòng xe"
    );
    const inithoodColorTypes = productTypes?.filter(
      (item) => item.type === "Màu mui xe"
    );

    setBatteryTypes(initBatteryTypes[0]?.name);
    setCarTypes(initcarTypes[0]?.name);
    setCarColorTypes(initcarColorTypes[0]?.name);
    setHoodColorTypes(inithoodColorTypes[0]?.name);
  }, [productTypes]);

  useEffect(() => {
    const Sort = Products.filter(
      (item) =>
        item.battery === batteryTypes &&
        item.cartype === carTypes &&
        item.carcolor === carColorTypes &&
        item.hoodColor === hoodColorTypes
    );
    setIsSort(Sort);
  }, [batteryTypes, carTypes, carColorTypes, hoodColorTypes]);

  return (
    <div className="d:h-[894px] p:h-auto w-full flex bg-[url(https://wuling-ev.vn/Content/images/pay/bg_pay.jpg)] p:flex-col d:flex-row">
      <div className="d:flex-[77%]">
        <Preview isSort={isSort} />
      </div>
      <div className="d:flex-[23%] h-full">
        <Payment
          setBatteryTypes={setBatteryTypes}
          setCarTypes={setCarTypes}
          setCarColorTypes={setCarColorTypes}
          setHoodColorTypes={setHoodColorTypes}
          isSort={isSort}
        />
      </div>
    </div>
  );
};

export default Order;
