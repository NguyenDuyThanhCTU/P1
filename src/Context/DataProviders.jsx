import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProviders = ({ children }) => {
  // Default

  const [ContactData, setContactData] = useState("");
  const [TradeMarkData, setTradeMarkData] = useState("");
  const [HeaderAdmin, setHeaderAdmin] = useState();

  const [accounts, setAccounts] = useState("");

  const [Banner, setBanner] = useState([]);

  const [SocialMedia, setSocialMedia] = useState("");
  const [Products, setProducts] = useState([]);
  //use
  const [PostOther, setPostOther] = useState([]);
  const [PostCompany, setPostCompany] = useState([]);
  // Custom

  const [NewsPosts, setNewsPosts] = useState([]);

  const [TypePost, setTypePost] = useState([]);
  const [Slides, setSlides] = useState([]);

  const [userName, setUserName] = useState();
  const [Academic, setAcademic] = useState();
  const [Work, setWork] = useState();
  const [YearOfBirth, setYearOfBirth] = useState();
  const [StartJob, setStartJob] = useState();
  const [Avatar, setAvatar] = useState();

  return (
    <DataContext.Provider
      value={{
        PostOther,
        setPostOther,
        PostCompany,
        setPostCompany,
        accounts,
        setAccounts,
        setHeaderAdmin,

        HeaderAdmin,
        TradeMarkData,
        setTradeMarkData,
        ContactData,
        setContactData,

        Avatar,
        setAvatar,
        userName,
        setUserName,
        Academic,
        setAcademic,
        Work,
        setWork,
        YearOfBirth,
        setYearOfBirth,
        StartJob,
        setStartJob,

        TypePost,
        setTypePost,

        Slides,
        setSlides,

        Products,
        setProducts,
        NewsPosts,
        setNewsPosts,

        Banner,
        setBanner,

        SocialMedia,
        setSocialMedia,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
