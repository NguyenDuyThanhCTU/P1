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

    setProducts,

    setSocialMedia,
    setTypePost,
    setSlides,
    setUserName,
    setAcademic,
    setWork,
    setYearOfBirth,
    setStartJob,
    setAvatar,
    setContactData,
    setTradeMarkData,
    setHeaderAdmin,
    setAccounts,
    setUsers,
    accounts,
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
      data.forEach((items) => {
        if (items.id === "Contact") {
          setContactData(data);
        } else if (items.id === "Trademark") {
          setTradeMarkData(data);
        } else if (items.id === "SocialMedia") {
          setSocialMedia(data.Data);
        }
      });
      //Contact

      //Slide

      //Information
      // setUserName(data[1].username);
      // setAcademic(data[1].academic);
      // setWork(data[1].work);
      // setYearOfBirth(data[1].yearOfBirth);
      // setStartJob(data[1].startJob);
      // setAvatar(data[1].avatar);
      //SocialMedia

      //Trademark
    });

    getDocuments("accounts").then((data) => {
      setAccounts(data[0]);
    });

    getDocuments("users").then((data) => {
      setUsers(data);
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
