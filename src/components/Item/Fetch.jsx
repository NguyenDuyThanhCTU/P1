import React, { useEffect } from "react";

import { useStateProvider } from "../../Context/StateProvider";
import { useData } from "../../Context/DataProviders";
import {
  getDocuments,
  getProducts,
} from "../../Config/Services/Firebase/FireStoreDB";

const Fetch = () => {
  const {
    //Website
    setSocialMedia,
    setSlides,
    setContactData,
    setTradeMarkData,
    setAccounts,
    setPostOther,
    setPostCompany,
    //Service
    setProductType,
    setProducts,
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
      const otherItems = data.reverse().filter((item) => item.type === "Other");
      setPostOther(otherItems);

      const companyItems = data
        .reverse()
        .filter((item) => item.type !== "Other");
      setPostCompany(companyItems);
    });

    getProducts("productTypes").then((data) => {
      setProductType(data.reverse());
    });
    getProducts("products").then((data) => {
      setProducts(data.reverse());
    });
  }, [isRefetch]);
  return <></>;
};

export default Fetch;
