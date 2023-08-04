import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import ShowReview from "../ShowReview/ShowReview";
import Uses from "../Uses/Uses";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Products />
      <ShowReview />
      <Uses />
      <Contact />
      <Footer></Footer>
    </div>
  );
};

export default Home;
