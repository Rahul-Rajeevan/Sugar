import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Styles from "../../pages/styles/Style.module.css";
import Style from "./Add.module.css";
import { useContext } from "react";
import { Box } from "../../context/context";
import { Box1 } from "../../context/prop.context";
import { useDispatch } from "react-redux";

const Addss = () => {
  const { addss, addsss } = useContext(Box);
  const { properties1 } = useContext(Box1);
  const dispatch = useDispatch();
  return (
    <div>
      <p className={Style.Refer}>GIFTING</p>
      <Slide id={Style.na} {...properties1}>
        {addss.map((el) => {
          el.quantity = 1;
          return (
            <div className="each-slide" id={Style.w1} key={el.id}>
              <div className={Styles.q2} id={Style.t}>
                <img src={el.image} />
                <p className={Style.h1}>{el.name}</p>
                <div className={Style.ad}>
                  <p className={Style.strike}>₹ {el.offer}</p>
                  <p className={Style.pr}>₹ {el.price}</p>
                  <p className={Style.red}>{el.discount}</p>
                </div>
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
      <br />
      <br />
      <p className={Style.Refer}>THIS OR THAT</p>
      <div className={Style.divs}>
        <div className={Style.divs1}>
          <img
            className={Style.divs2}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/d1b038a4-418a-4309-92b1-9aff3b4393ea.jpg"
            alt=""
          />
        </div>
        <div className={Style.divs1}>
          <img
            className={Style.divs2}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/984514b9-81c3-4e2a-922e-7b18f42ef77f.jpg"
            alt=""
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className={Style.Refer}>JUST-IN</p>
      <Slide id={Style.na} {...properties1}>
        {addsss.map((el) => {
          el.quantity = 1;
          return (
            <div className="each-slide" id={Style.w1} key={el.id}>
              <div className={Styles.q2} id={Style.t}>
                <img src={el.image} />
                <p className={Style.h1}>{el.name}</p>
                <div className={Style.ad}>
                  <p className={Style.strike}>{el.offer}</p>
                  <p className={Style.pr}>₹ {el.price}</p>
                  <p className={Style.red}>{el.discount}</p>

                </div>
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

export default Addss;
