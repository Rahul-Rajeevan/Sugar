import React from 'react'
import { useContext } from 'react'
import { Box } from '../../context/context'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Styles from "../../pages/styles/Style.module.css";
import Style from "./Add.module.css"
import { Box1 } from '../../context/prop.context';
const Addsss = () => {
    const {addsss}=useContext(Box)
    const {properties1}=useContext(Box1)
  return (
    <div>
            <p className={Style.Refer}>SKINCARE BASICS</p>
        <Slide id={Style.na} {...properties1}>
        {addsss.map((el) => (
          <div className="each-slide" id={Style.w1} key={el.id}>
                <div className={Styles.q2} id={Style.t}>
                   <img src={el.image}/>
                   <p className={Style.h1}>{el.name}</p>
                   <div className={Style.ad}>
                   <p className={Style.pr}>₹ {el.price}</p>
                   </div>
                   <button className={Style.btns}>ADD TO CART</button>
                </div>
            </div>
        ))}
      </Slide>
    </div>
  )
}

export default Addsss