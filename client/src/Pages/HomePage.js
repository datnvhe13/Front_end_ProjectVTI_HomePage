import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Slogan from "../Components/Slogan";
import Reason from "../Components/Reason";
import News from "../Components/News";
import Carousel from "./../Components/Carousel";
import ListCar from "../Components/ListCar";
import { getListCarAPI } from "../API/CarAPI";
import { useDispatch } from "react-redux";
import { actionFetchListCarsAPI_MDW } from "../ReduxTK/Reducer/carSliceReducer";

function HomePage(props) {
 
  const dispatchRedux = useDispatch()

  // hook
  useEffect(()=>{
    dispatchRedux(actionFetchListCarsAPI_MDW())
  }, [])


  return (
    <>
      {/* carousel */}
      <Carousel />
      {/* Slogan */}
      <Slogan />
      {/* list cars */}
      <ListCar />
      {/* more information */}
      <Reason />
      {/* news */}
      <News />
      {/*footer */}
      <Footer />
      
    </>
  );
}

export default HomePage;
