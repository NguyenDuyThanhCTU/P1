import React, { useEffect, useState } from "react";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HeaderItems } from "../../../Utils/item";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import DropDown from "./Item/DropDown";
import { BiUserCircle } from "react-icons/bi";
import { useData } from "../../../Context/DataProviders";

const Header = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [Hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementTop, setElementTop] = useState(95);
  const [IsTranslate, setTranslate] = useState(false);
  const targetPosition = 1;
  const { Logo } = useData();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > targetPosition) {
      setElementTop(0);
      setTranslate(true);
    } else {
      setElementTop(95);
      setTranslate(false);
    }
  }, [scrollPosition]);

  return (
    <div className="h-[126px] ">
      <div className="bg-white ">
        <div className=" bg-none h-[126px] relative  bg-white ">
          <div className=" w-full   italic text-[#1b365d] h-[92px] z-50 p:hidden d:flex justify-center">
            <div className="flex justify-between  items-center w-[1100px]">
              <div className="flex items-center gap-2">
                <Link to="/">
                  <img src={Logo} alt="img" className="w-[200px]" />
                </Link>
                <Link to="/">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/demo2512.appspot.com/o/image%2FLOGO%20PPZ%20(2).png?alt=media&token=de5efebb-1f61-425f-992d-523cf8380aec"
                    alt="img"
                    className="w-[150px]"
                  />
                </Link>
              </div>
              <div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/demo2512.appspot.com/o/image%2FOP%202%20Hinh%20Trong%20Suot%20(4).png?alt=media&token=7249569c-264b-4232-aa68-c2a387acc618
              "
                  alt="logo"
                  className="h-[92px]"
                />
              </div>
            </div>
          </div>

          <div className="p:block d:hidden w-full  h-[60px] ">
            <div className="flex justify-end  items-center">
              <img
                src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/trang-chu/prudential-logo-181x32.png"
                alt="logo"
                className="h-[32px]"
              />
              <div className="flex items-center text-[60px]">
                <BsSearch className="p-5" />
                <BsFillTelephoneFill className="p-5" />
                {Hidden ? (
                  <RxCross1
                    className="bg-redPrimmary text-white p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                ) : (
                  <MdOutlineFormatListBulleted
                    className="bg-redPrimmary text-white p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                )}
              </div>
            </div>
            <div
              className={`${
                Hidden ? "h-screen" : "h-0 "
              } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-hidden`}
            >
              {HeaderItems.map((items) => (
                <DropDown
                  content={items.Content}
                  link={items.link}
                  setHidden={setHidden}
                />
              ))}
              {/* <div className="mt-10">
                <div className="border-2 rounded-md flex gap-1 items-center justify-center py-3 mx-5 text-[18px] italic text-[#1b365d] font-semibold">
                  <BiUserCircle className="text-[25px]" />
                  <p>Đăng nhập</p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="d:flex flex-col p:hidden w-full  items-center">
            <div
              className={`fixed z-50 ${
                IsTranslate
                  ? "w-full bg-white text-black"
                  : " w-[1203px] bg-redPrimmary text-white  "
              }   duration-300 h-[69px] rounded-lg flex justify-center px-5  items-center text-normal font-semibold gap-10`}
              style={{ top: `${elementTop}px` }}
            >
              {/* <div
            className="scrollable-element h-[200px] w-[200px] bg-red-500 absolute top-[0] left-[0] transform transition-transform duration-300"
            style={{ top: `${elementTop}px` }}
          > */}
              {HeaderItems.map((items, idx) => (
                <div className="relative">
                  <Link to={items.link}>
                    <button
                      onClick={() => {
                        setIsSelected(idx);
                      }}
                    >
                      {items.Content}
                    </button>
                  </Link>
                  <div
                    className={` ${
                      isSelected === idx
                        ? IsTranslate
                          ? "w-full bg-black"
                          : "w-full bg-white"
                        : "w-0"
                    }  duration-500 h-2 rounded-3xl absolute -bottom-[23px]`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
