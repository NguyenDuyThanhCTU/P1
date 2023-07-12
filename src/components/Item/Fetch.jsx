import React, { useEffect } from "react";

import { useStateProvider } from "../../Context/StateProvider";
import { useData } from "../../Context/DataProviders";
import {
  getDocuments,
  getProducts,
} from "../../Config/Services/Firebase/FireStoreDB";

const Fetch = () => {
  const {
    setNameAdmin,
    setAvatarAdmin,

    setPhone,
    setAdvertisement,

    setLocation,
    setLogo,
    setWebsiteName,
    setProducts,
    setGmail,
    setAddress,
    setIco,
    setSocialMedia,
    setTypePost,
    setSlides,
    setUserName,
    setAcademic,
    setWork,
    setYearOfBirth,
    setStartJob,
    setAvatar,
  } = useData();

  const { isRefetch, setIsRefetch } = useStateProvider();

  useEffect(() => {
    setIsRefetch(1);
  }, []);

  useEffect(() => {
    if (isRefetch != "") {
      setIsRefetch("");
    }
    getDocuments("website").then((data) => {
      //Contact
      setPhone(data[0].phone);
      setGmail(data[0].gmail);
      setLocation(data[0].location);
      setAddress(data[0].address);
      //Slide
      setAdvertisement(data[2].advertisement);
      //Information
      setUserName(data[1].username);
      setAcademic(data[1].academic);
      setWork(data[1].work);
      setYearOfBirth(data[1].yearOfBirth);
      setStartJob(data[1].startJob);
      setAvatar(data[1].avatar);
      //SocialMedia
      setSocialMedia(data[3].Data);
      //Trademark
      setLogo(data[4].websiteLogo);
      setWebsiteName(data[4].websiteName);
      setIco(data[4].websiteIco);
    });

    getDocuments("accounts").then((data) => {
      setNameAdmin(data[0].displayName);
      setAvatarAdmin(data[0].photoURL);
    });

    getDocuments("slide").then((data) => {
      setSlides(data.reverse());
    });

    getProducts("posts").then((data) => {
      setProducts(data.reverse());
    });

    getProducts("posttype").then((data) => {
      setTypePost(data.reverse());
    });
  }, [isRefetch]);
  return <></>;
};

export default Fetch;
