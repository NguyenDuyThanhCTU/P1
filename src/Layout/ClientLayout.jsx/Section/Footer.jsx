import { CiLocationOn, CiMail } from "react-icons/ci";
import { BiChevronDown, BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FooterContact } from "../../../Utils/temp";
import {
  FooterRoles,
  HeaderFooterItems,
  HeaderItems,
  IconMapping,
  SocialMedia,
  SocialMediaCustom,
} from "../../../Utils/item";
import { useData } from "../../../Context/DataProviders";

const Footer = () => {
  const { ContactData, SocialMedia, TradeMarkData } = useData();

  return (
    <div className="font-NunitoSans  h-auto w-full" id="Footer">
      <div className="overflow-hidden  h-[715px] relative">
        <img
          src="https://wuling-ev.vn/Content/images/bg-showroom-web.png"
          alt="image"
          className="object-bottom h-full  w-full"
        />
        <div className="bg-[rgba(0,0,0,.5)] absolute w-full h-full top-0 flex items-center justify-center ">
          <div className="text-white font-Montserrat flex flex-col items-center gap-5">
            <h3 className="text-[32px]">Hệ thống phân phối</h3>
            <div className=" border-b-2  text-[20px] w-[120%]">
              <div className="flex justify-between items-center py-2 ">
                <button className=" ">Tỉnh thành</button>
                <BiChevronDown className="text-[25px]" />
              </div>
            </div>
            <div className=" border-b-2  text-[20px] w-[120%]">
              <div className="flex justify-between items-center py-2 ">
                <button className=" ">Quận Huyện</button>
                <BiChevronDown className="text-[25px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center d:items-start d:gap-5 text-[13px] py-10 d:flex-row p:flex-col p:gap-10 p:items-center ">
        <div className="flex flex-col d:w-[400px] p:w-auto p-2">
          <div className="flex items-center h-[54px] gap-5">
            <img
              src="https://wuling-ev.vn/Content/images/logo-TMT.svg"
              alt="logo"
            />
            <img src={TradeMarkData.websiteIco} alt="logo" className="h-full" />
          </div>

          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-start gap-1">
              <CiLocationOn className="w-10 h-6  text-blue-600" />
              <p>Trụ sở chính: {ContactData.address}</p>
            </div>
            <div className="flex items-center gap-1">
              <BiPhoneCall className="text-blue-600" />
              <p>{ContactData.phone}</p>
            </div>
            <div className="flex items-center gap-1 text-blue-600">
              <CiMail className="" />
              <p>{ContactData.gmail} </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[210px] gap-4 cursor-pointer">
          {HeaderFooterItems.slice(0, 4).map((items, idx) => (
            <div key={idx} className="group">
              <h3 className=" uppercase hover:text-blue-600 ">{items.title}</h3>
              {items.content && (
                <div className="ml-4  duration-300 hidden group-hover:block">
                  {items.content.map((items, idx) => (
                    <a href={`${items.link}`}>
                      <li
                        key={idx}
                        className="text-[12px] text-[#666666] hover:underline hover:text-blue-600"
                      >
                        {items.name}
                      </li>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 uppercase ">
          {FooterRoles.map((items, idx) => (
            <div key={idx} className="hover:text-blue-600">
              <Link href={items.link}>{items.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col ">
            <h3>Kết nối với chúng tôi</h3>
            <div className="flex mt-2 gap-2">
              {SocialMediaCustom.map((items, idx) => {
                let Icon = IconMapping[items.icon];
                let Point = SocialMedia[items.id];
                return (
                  <div
                    key={idx}
                    className={`text-[15px] cursor-pointer border p-1 border-blue-600 text-blue-600 hover:scale-125 duration-300`}
                  >
                    {Icon && (
                      <a href={`https://${Point} `} target="_blank">
                        <Icon />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="shadow-2xl">
            <iframe
              src={ContactData.location}
              width="200"
              height="150"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
