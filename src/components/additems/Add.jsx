import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Style from "./Add.module.css"
import { useContext } from "react";
import { Box } from "../../context/context";
import Styles from "../../pages/Style.module.css"
import { Box1 } from "../../context/prop.context";



const Add = () => {
  const {addItems}=useContext(Box)
  const {properties1} = useContext(Box1)


  return <div>
          <Slide id={Style.na} {...properties1}>
        {addItems.map((el) => (
          <div className="each-slide" id={Style.w1} key={el.id}>
                <div className={Styles.q2} id={Style.t}>
                   <img src={el.image}/>
                   <p className={Style.h1}>{el.name}</p>
                   <p className={Style.pr}>₹ {el.price}</p>
                   <button className={Style.btns}>ADD TO CART</button>
                </div>
            </div>
        ))}
      </Slide>
  </div>;
};

export default Add;
