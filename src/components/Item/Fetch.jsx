import React, { useEffect } from "react";

import { useStateProvider } from "../../Context/StateProvider";
import { useData } from "../../Context/DataProviders";
import {
  getDocuments,
  getProducts,
} from "../../Config/Services/Firebase/FireStoreDB";

const Fetch = () => {
  const {
    setProducts,

    setSocialMedia,
    setTypePost,
    setSlides,

    setContactData,
    setTradeMarkData,

    setAccounts,
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
          setContactData(items);
        } else if (items.id === "Trademark") {
          setTradeMarkData(items);
        } else if (items.id === "SocialMedia") {
          setSocialMedia(items.Data);
        }
      });
    });

    getDocuments("accounts").then((data) => {
      setAccounts(data[0]);
    });

    getDocuments("slide").then((data) => {
      setSlides(data.reverse());
    });

    getProducts("posts").then((data) => {
      data.map((items, idx) => {
        if (items.type === "Other") {
        }
      });
      setProducts(data.reverse());
    });

    // getProducts("posttype").then((data) => {
    //   setTypePost(data.reverse());
    // });
  }, [isRefetch]);
  return <></>;
};

export default Fetch;
