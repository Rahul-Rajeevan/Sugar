import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Style from "./css/Home.module.css";
import Part1 from "./Part1";
import Part2 from "./Part2";
import { useContext } from "react";
import { Box1 } from "../context/prop.context";
import { Navigate, useNavigate } from "react-router-dom";
import { Box } from "../context/context";




const Slideshow = () => {
  const navigates = useNavigate()
  const {slideImages,slideImages1} = useContext(Box)

 const {fadeProperties1,fadeProperties} = useContext(Box1)
  return (
    <div>
      <div>
        <Slide {...fadeProperties}>
          {slideImages.map((el) => (
            <div className="each-slide" key={el.id}>
              <div className={Style.img}>
                <img className={Style.img1} src={el.image} />
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <br />
      <br />
      <div>
        <Part1 />
      </div>

      <Slide {...fadeProperties1}>
        {slideImages1.map((el) => (
          <div className="each-slide"  key={el.id} >
            <div className={Style.img}>
              <img className={Style.img1} src={el.image} />
            </div>
          </div>
        ))}
      </Slide>
      <br />
      <br />
      <div>
        <Part2 />
      </div>
      
    </div>
  );
};

export default Slideshow;
