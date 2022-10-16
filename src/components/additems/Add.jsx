import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Style from "./Add.module.css";
import { useContext } from "react";
import { Box } from "../../context/context";
import Styles from "../../pages/styles/Style.module.css";
import { Box1 } from "../../context/prop.context";
import { useDispatch } from "react-redux";

const Add = () => {
  const { addItems } = useContext(Box);
  const { properties1 } = useContext(Box1);
  const dispatch = useDispatch();


  return (
    <div>
      <Slide id={Style.na} {...properties1}>
        {addItems.map((el) => {
          el.quantity = 1;
          return (
            <div className="each-slide" id={Style.w1} key={el.id}>
              <div className={Styles.q2} id={Style.t}>
                <img src={el.image} />
                <p className={Style.h1}>{el.name}</p>
                <p className={Style.pr}>₹ {el.price}</p>
                <button className={Style.btns}
                  onClick={() => dispatch({ type: "ADD_TO_CART", payload: el })}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Add;
