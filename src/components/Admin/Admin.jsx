import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthProviders";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";

import Sidebar from "./Sidebar/Sidebar";
import { RxCrossCircled } from "react-icons/rx";
import { FaList } from "react-icons/fa";

import { useStateProvider } from "../../Context/StateProvider";

import Content from "../Admin/Content/Content";
import AddPost from "../Admin/Content/Post/AddPost/AddPost";
import AddType from "./Item/AddType/AddType";
import Profile from "./Header/Profile/Profile";
import AddProduct from "./Item/AddProduct/AddProduct";

const Admin = () => {
  const { verify } = useAuth();
  const { isUploadProduct } = useStateProvider();
  const [Hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!verify) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="grid grid-flow-col font-LexendDeca relative">
      <div
        className={`duration-300 absolute left-0 right-0  ${
          isUploadProduct === "" ? "h-0" : "h-[100vh]"
        }`}
      >
        {isUploadProduct === "Tin Tức Khác" ? (
          <AddPost type="Other" />
        ) : isUploadProduct === "Tin tức công ty" ? (
          <AddPost type="Company" />
        ) : isUploadProduct === "Pin xe" ? (
          <AddType type="Pin xe" />
        ) : isUploadProduct === "Màu xe" ? (
          <AddType type="Màu xe" />
        ) : isUploadProduct === "Màu mui xe" ? (
          <AddType type="Màu mui xe" />
        ) : isUploadProduct === "Kích cỡ xe" ? (
          <AddType type="Kích cỡ xe" />
        ) : isUploadProduct === "Số chổ ngồi" ? (
          <AddType type="Số chổ ngồi" />
        ) : isUploadProduct === "Dòng xe" ? (
          <AddType type="Dòng xe" />
        ) : isUploadProduct === "addProduct" ? (
          <AddProduct />
        ) : isUploadProduct === "profile" ? (
          <Profile type="Home" />
        ) : null}
      </div>

      <div
        className={`${
          Hidden ? "w-[1px] " : "w-[350px] "
        }  duration-700  relative`}
      >
        <div className="p:block d:hidden absolute -right-10 top-0 bg-none text-white text-[30px] p-2 ">
          {Hidden ? (
            <FaList
              className="bg-gray-500"
              onClick={() => setHidden(!Hidden)}
            />
          ) : (
            <RxCrossCircled onClick={() => setHidden(!Hidden)} />
          )}
        </div>
        <div className="overflow-hidden">
          <Sidebar />
        </div>
      </div>

      <div className="w-[1570px] bg-[#292929]">
        <Header />
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Admin;
