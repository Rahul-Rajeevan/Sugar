import React from "react";
import Style from "./css/Home.module.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Adds from "./additems/Adds";
import { useContext } from "react";
import { Box } from "../context/context";
import Addss from "./additems/Addss";
import { Box1 } from "../context/prop.context";
import Addsss from "./additems/Addsss";
// import ReactPlayer from 'react-player'
import girl1 from './video/1.mp4'
import girl2 from './video/2.mp4'
import girl3 from './video/3.mp4'
import girl4 from './video/4.mp4'
import girl5 from './video/5.mp4'
import girl6 from './video/6.mp4'
import girl7 from './video/7.mp4'
import girl8 from './video/8.mp4'

let arr = [
  {obj: `${girl1}`,id:1},{obj:`${girl2}`,id:2},{obj:`${girl3}`,id:3},{obj:`${girl5}`,id:4},{obj:`${girl4}`,id:5},{obj:`${girl6}`,id:6},{obj:`${girl7}`,id:7},{obj:`${girl8}`,id:8}
]

const Part2 = () => {
  const {slideImages2,slideImages3,slideImages4,sugarbeauty,imggg}= useContext(Box)
 const {properties,fadeProperties1,properties6,fadeProperties2} = useContext(Box1)
  return (
    <div>
      <p className={Style.Refer}>HOT DEALS</p>
      <Slide {...properties}>
        {slideImages2.map((el) => (
          <div className="each-slide" key={el.id}>
            <div className={Style.img2}>
              <div className={Style.box}>
                <img className={Style.img3} src={el.image} />
              </div>
            </div>
          </div>
        ))}
      </Slide>
      <br />
      <br />
      <p className={Style.Refer}>NEWLY LAUNCHED</p>
      <Slide {...fadeProperties1}>
        {slideImages3.map((el) => (
          <div className="each-slide" key={el.id}>
            <div className={Style.img}>
              <img className={Style.img1} src={el.image} />
            </div>
          </div>
        ))}
      </Slide>
      <br />
      <br />

      <p className={Style.Refer}>SUGAR STREAMING</p>
      <Slide {...fadeProperties2} id={Style.sl}>
        {arr.map((el)=>(
      <div className="each-slide" key={el.id} id={Style.ds}>
        <div>
         <video id={Style.fr}
          width="100%"
          height="100%"
          src={el.obj}
          // title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          controls
        ></video>
        </div>
      </div>
      ))}
      </Slide>
      <br/>
      <br/>
      <div>
        <Adds />
      </div>
      <br />
      <br />
      <p className={Style.Refer}>TOP PICKS OF THE WEEK</p>
      <Slide {...properties}>
        {slideImages4.map((el) => (
          <div className="each-slide" key={el.id}>
            <div className={Style.img2}>
              <div className={Style.box}>
                <img className={Style.img3} src={el.image} />
              </div>
            </div>
          </div>
        ))}
      </Slide>
      <br />
      <br />
      <Addss />
      <br />
      <br />
      <p className={Style.Refer}>SUGAR BEAUTY BLOG</p>
      <Slide {...properties}>
        {sugarbeauty.map((el) => (
          <div className="each-slide" key={el.id}>
            <div className={Style.img2}>
              <div className={Style.box}>
                <img className={Style.img3} src={el.image} />
              </div>
            </div>
          </div>
        ))}
      </Slide>
      <br />
      <br />
      <Addsss/>
      <br />
      <br />
      <p className={Style.Refer}>EXPLORE</p>
      <Slide {...properties6}>
        {imggg.map((el) => (
          <div className="each-slide" key={el.id}>
            <div className={Style.img2}>
              <div className={Style.box}>
                <img className={Style.img3} id={Style.ii} src={el.image} />
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Part2;
