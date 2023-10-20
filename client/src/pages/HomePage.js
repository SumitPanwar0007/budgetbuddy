import React from "react";
import Layout from "../components/Layout";

import { useAppContext } from "./AppContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/layout/Dashboard";

import Expense from "../components/Expense";
import Income from "../components/Income";

const HomePage = () => {
  const { activeButton} = useAppContext();

  return (
    <>
    


    <div className=" fixed sm:relative top-0 w-full  z-50  left-0">
          <Header />
        </div>
      <div className="flex flex-row w-full h-full bg-gradient-to-br from-rose-200 via-fuchsia-200 to-sky-200 backdrop-blur-xl">

      <div className="sm:w-[20vw]  h-screen mx-1 mt-1">
      <Sidebar />
      </div>

       
      <div className="translate-y-14 sm:translate-y-0 w-full flex flex-col ">
      

        <div className="sm:flex justify-start w-full ">
          <div className="content border-2 border-inherit rounded-lg m-2 w-full">
            {activeButton === "Dashboard" && <Dashboard />}
            {activeButton === "Layout" && <Layout />}
            {activeButton === "Income" && <Income />}
            {activeButton === "Expense" && <Expense />}
            
          </div>
        </div>

        <Footer />
      </div>
      </div>
    </>
  );
};

export default HomePage;
