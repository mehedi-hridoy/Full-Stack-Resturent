import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import AboutMessage from "../Category/AboutMessage";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonials/Testimonial";
import ChefRecomendatino from "../ChefRecomendation/ChefRecomendatino";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <AboutMessage></AboutMessage>
      <PopularMenu></PopularMenu>
      <ChefRecomendatino></ChefRecomendatino>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
