import React, { useContext, useEffect, useState } from "react";
import { Box } from "../context/context";
import styles from "./styles/Style.module.css";
import img1 from "./pic/star_filled.png";
import { useDispatch } from "react-redux";
import img2 from "./pic/imq2.jpg"
import img3 from "./pic/filterIcon.png"
import { useNavigate } from "react-router-dom";
import Offer from "./Offer";
import Footer from "../components/Footer";
const Search = () => {
  const { search,bigarr } = useContext(Box);
  const [love, setlove] = useState(false);
  const dispatch = useDispatch();
  const [list, setlist] = useState([])


useEffect(() => {
let g=search.split(" ")
let newbigarr;
if(g.length>0)
  newbigarr=bigarr.filter(e=>e.name.toLowerCase().includes(g[0]))
  else
{
  let h=bigarr.filter(e=>e.name.toLowerCase().includes(g[0]))
  console.log(h);
  newbigarr=h.filter(e=>e.name.toLowerCase().includes(g[1]))
}
  setlist(newbigarr)
  
}, [search])




  
  



  const navigate= useNavigate();

  

  return (
    <div>
      <div>
        <img className={styles.q11} src={img2} alt="no" />
      </div>

      <div className={styles.q3}>
        <div className={styles.q4}>
          <div>
          <div style={{display:"flex"}}><img style={{marginTop:"3px"}} src='https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg' id={styles.e1} alt="no" onClick={()=>navigate("/")}/><p> / Search</p></div>
          <br></br>
          </div>
          <div className={styles.q5}>
         
          </div>
        </div>
        <br />
        <div className={styles.q1}>
          {list.map((e) => {
            e.quantity = 1;
            return (
              <div className={styles.q6} key={e.id}>
                <div className={styles.q2} >
                  {" "}
                  <img src={e.src} alt="no" />{" "}
                  <p className={styles.name}>{e.name}</p>{" "}
                  <p className={styles.price}>₹ {e.price}</p>{" "}
                  <div className={styles.q8}>
                    {" "}
                    <img src={img1} alt="no" id={styles.e1} />{" "}
                    <p className={styles.rating}>{e.rating}</p>{" "}
                  </div>
                  <div
                    className={styles.q7}
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: e })
                    }
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

export default Search;
