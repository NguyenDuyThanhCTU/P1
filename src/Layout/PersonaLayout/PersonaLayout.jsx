import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hotline from "./PopUp/Hotline";
import OnTop from "./PopUp/OnTop";
import Fetch from "../../components/Item/Fetch";
import { useData } from "../../Context/DataProviders";
import { Helmet } from "react-helmet";

const PersonaLayout = ({ children }) => {
  const { TradeMarkData } = useData();
  return (
    <>
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet>
      <div className="font-OpenSans bg-[#e8edef] relative ">
        <Fetch />
        <div className="z-50 relative">
          <Header />
        </div>
        <main>{children} </main>
        <div className="flex  justify-center">
          <Footer />
        </div>
        <div className="z-40 fixed">
          <Hotline />
        </div>
        <div className="d:hidden p:block">
          <OnTop />
        </div>
      </div>
    </>
  );
};

export default PersonaLayout;
