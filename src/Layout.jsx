import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <hr className="w-[50%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
      <Footer />
    </>
  );
}
