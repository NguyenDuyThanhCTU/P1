import React, { createContext, useContext, useState } from "react";
import { useGetDocument } from "../Config/Services/Firebase/FireStoreDB";

export const DataContext = createContext();

export const DataProviders = ({ children }) => {
  // Default
  const [Gmail, setGmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Location, setLocation] = useState("");
  const [Phone, setPhone] = useState("");

  const [Banner, setBanner] = useState([]);

  const [SocialMedia, setSocialMedia] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Logo, setLogo] = useState("");
  const [Ico, setIco] = useState("");
  const [Websitename, setWebsiteName] = useState("");

  // Custom

  const [Advertisement, setAdvertisement] = useState([]);
  const [NewsPosts, setNewsPosts] = useState([]);

  const [TypePost, setTypePost] = useState([]);
  const [Slides, setSlides] = useState([]);

  const [userName, setUserName] = useState();
  const [Academic, setAcademic] = useState();
  const [Work, setWork] = useState();
  const [YearOfBirth, setYearOfBirth] = useState();
  const [StartJob, setStartJob] = useState();
  const [Avatar, setAvatar] = useState();

  const [nameAdmin, setNameAdmin] = useState();
  const [avatarAdmin, setAvatarAdmin] = useState();

  const accounts = useGetDocument("accounts");
  const website = useGetDocument("website");

  return (
    <DataContext.Provider
      value={{
        website,
        accounts,
        nameAdmin,
        setNameAdmin,
        avatarAdmin,
        setAvatarAdmin,

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

        Phone,
        setPhone,
        Gmail,
        setGmail,
        Location,
        setLocation,
        Address,
        setAddress,

        Banner,
        setBanner,
        Advertisement,
        setAdvertisement,

        SocialMedia,
        setSocialMedia,

        Logo,
        setLogo,
        Websitename,
        setWebsiteName,
        Ico,
        setIco,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
