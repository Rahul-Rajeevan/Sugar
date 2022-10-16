import React, { useContext, useEffect, useState } from 'react'
import { Box } from '../context/context';
import styles from './styles/Style.module.css'
import img1 from "./pic/star_filled.png"
import { useDispatch, useSelector } from 'react-redux';
import img2 from './pic/imq1.gif'
import img3 from "./pic/filterIcon.png"
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";

const Component = ({list,filter_list}) => {
  const [sortval, setsortval] = useState(0);
  const dispatch = useDispatch();

  const handle1 = (e) => {
    setsortval(e.target.value);
  };

  const handle2 = (e) => {
    setsortval(e.target.value);
  };

  const time = (l) => {
    if (sortval === "3")
      l.sort(function (a, b) {
        return a.price - b.price;
      });
    else if (sortval === "2")
      l.sort(function (a, b) {
        return b.price - a.price;
      });
    else if (sortval === "1") {
      l.sort(function (a, b) {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) return -1;
        if (fa > fb) return 1;

        return 0;
      });
    }
  };

const {cart,fav}=useSelector(state=>state)




  const thelove = (e) => {
    let tempCart = [];
    tempCart=fav.filter((item) => item.id === e.id);
    if (tempCart.length===0) {
      dispatch({ type: "ADD_TO_FAV", payload: e })     
}
  };

const addCart=(e)=>{
      let tempCart = [];
      tempCart=cart.filter((item) => item.id === e.id);
      if (tempCart.length===0) {
        dispatch({ type: "ADD_TO_CART", payload: e })     
}
}
useEffect(()=>{
console.log("cart",cart)
console.log("fav",fav)
},[cart,sortval])

  const navigate= useNavigate();


  return (
    <div>
    <div>
      <img className={styles.q10} src={img2} alt='no'></img>
    <img className={styles.q9} src='https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg' alt='no'/>
    <img className={styles.q10} src={img2} alt='no'></img>
    </div>
    <div className={styles.q3}>
    <div className={styles.q4}>
        <div>
        <div style={{display:"flex"}}><img onClick={()=>navigate("/")} style={{marginTop:"3px"}} src='https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg' id={styles.e1} alt="no"/><p> / Component</p></div>
          <br></br>
          <div>Component - 16 items</div>
        </div>
        <div className={styles.q5}>
        <div style={{marginLeft:"-100px"}}>
              <select style={{border:"0px"}} onChange={handle1}>
                <option>Filter by</option>
                {filter_list.map(e=><option value={e}>{e}</option>)}
              </select>
            </div>
          <div>
            <select onChange={handle2}>
              <option>Sort by</option>
              <option value="1">Name</option>
              <option value="2">Price - High to Low</option>
              <option value="3">Price - Low to High</option>
            </select>
          </div>
        </div>
    </div>
    <br/>
      <div className={styles.q1}>
        {list.map((e) => {
          e.quantity = 1;
          return (
            <div className={styles.q6} key={e.id}>
              <div className={styles.q2}>
                {" "}
                <img src={e.src} alt="no" /> <p>{e.name}</p> <p>Rs:{e.price}</p>{" "}
                <div className={styles.q8}>
                  {" "}
                  <img src={img1} alt="no" id={styles.e1} /> <p>{e.rating}</p>{" "}
                  <img
                    id={styles.e1}
                    src={
                      !e.love
                        ? "https://th.bing.com/th/id/R.5365673f66386551fa6df965535bcfa1?rik=UzbBo%2bjcduyTuQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTn%2fXnM%2fKTnXnMAgc.png&ehk=vhGmsnENrQL2IH%2f9jIOSj8tJvVOxXNRhYqiiQMzUQGw%3d&risl=&pid=ImgRaw&r=0"
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                    }
                    alt="no"
                    onClick={() => thelove(e)}
                  />
                </div>
                <div
                  className={styles.q7}
                  onClick={() => addCart(e)}
                >
                  ADD TO CART{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
     <Footer/>
    </div>
  );
};

export default Component;
