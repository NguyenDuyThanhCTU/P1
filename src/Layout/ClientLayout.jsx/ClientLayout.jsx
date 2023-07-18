import React from "react";
import Header from "./Section/Header";
import OnTop from "./Section/OnTop";
import Hotline from "./Section/Hotline";
import Footer from "./Section/Footer";
import Copyright from "./Section/Copyright";
import { useData } from "../../Context/DataProviders";
import { Helmet } from "react-helmet";
import Loading from "../../components/Item/Loading";

const ClientLayout = ({ children }) => {
  const { TradeMarkData } = useData();

  return (
    <>
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet>
      <Loading />
      <div className="flex flex-col">
        <Header />
        {children}
        <OnTop />
        <Hotline />
        <Footer />
        <div>
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
