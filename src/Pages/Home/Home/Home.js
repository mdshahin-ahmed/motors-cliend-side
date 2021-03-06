import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Headers from "../../Shared/Headers/Headers";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import HomeProducts from "../HomeProducts/HomeProducts";
import MyChoose from "../MyChoose/MyChoose";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Headers></Headers>
      <Banner></Banner>
      <MyChoose></MyChoose>
      <HomeProducts></HomeProducts>
      <Gallery></Gallery>
      <Services></Services>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
