import React from "react";
import Navbar from "../components/navbar/Navbar";
import MegaMenu from "../components/MegaMenu";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ProductShowcase from "../features/ProductShowcase";
import ProductDetail from "../features/ProductDetail";

function Home() {
  return (
    <div>
        <Navbar/>
        <MegaMenu/>
        {/* <Outlet/> */}
        {/* <ProductShowcase/> */}
        <ProductDetail/>
        <Footer/>
    </div>
)}

export default Home;
