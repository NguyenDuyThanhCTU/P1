import React from "react";
import { useData } from "../../../../Context/DataProviders";
import { Button, Result } from "antd";

const Preview = ({ isSort }) => {
  const { TradeMarkData, ContactData } = useData();
  return (
    <div>
      <div className="p-4 flex flex-col items-center">
        {isSort?.length > 0 ? (
          <div>
            <img src={isSort[0]?.image} alt="car" className="object-contain" />
            <div className="flex gap-24 justify-center mt-8">
              <div className="text-[#333333]  font-NunitoSans text-center">
                <h3 className="text-[26px]">{isSort[0]?.battery}</h3>
                <span className="text-[14px]">Dung lượng pin</span>
              </div>
              <div className="text-[#333333]  font-NunitoSans text-center">
                <h3 className="text-[26px]">{isSort[0]?.carsize}</h3>
                <span className="text-[14px]">
                  Kích thước (mm) Dài x Rộng x Cao
                </span>
              </div>
              <div className="text-[#333333]  font-NunitoSans text-center">
                <h3 className="text-[26px]">{isSort[0]?.seater}</h3>
                <span className="text-[14px]">Số chỗ ngồi</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen flex items-center">
            <Result
              status="404"
              title="Không tìm thấy sản phẩm bạn yêu cầu"
              subTitle={`Mã lỗi 404, vui lòng liên hệ hotline ${ContactData.phone} để được tư vấn miễn phí`}
              extra={[
                <Button
                  type="default"
                  key="console"
                  href={`tel:${ContactData.phone}`}
                  target="_blank"
                >
                  Liên hệ tư vấn
                </Button>,
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
