import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./styles/Style.module.css";
import person from './pic/person.png'
import pic1 from './pic/pic1.jpg'
import pic2 from './pic/pic2.jpg'
import pic3 from './pic/pic3.jpg'
import pic4 from './pic/pic4.jpg'
import img1 from "./pic/star_filled.png";
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Wishlist = () => {
    const navigate= useNavigate();
    const [favlist, setfavlist] = useState([])
    const dispatch = useDispatch();
   let per= localStorage.getItem("person")
  let starlist,g;
    // const dispatch=useDispatch()
  const handledelete=(val)=>{
    let p=JSON.parse(localStorage.getItem("fav"))
    let newp=p.filter(e=>e.id!==val)
    localStorage.setItem("fav",JSON.stringify(newp))
    setfavlist(JSON.parse(localStorage.getItem("fav")));

    if(val<=13)
    {starlist=JSON.parse(localStorage.getItem("list1"))
    g=1;}
    else if(val>13&&val<=33)
    {starlist=JSON.parse(localStorage.getItem("list2"))
    g=2;}
    else if(val>33&&val<=53)
    {starlist=JSON.parse(localStorage.getItem("list3"))
    g=3;}

    for(let i=0;i<starlist.length;++i)
    {
      if(starlist[i].id===val)
      starlist[i].love=!starlist[i].love
    }
    if(g===1)
    localStorage.setItem("list1",JSON.stringify(starlist))
    else if(g===2)
    localStorage.setItem("list2",JSON.stringify(starlist))
    else if(g===3)
    localStorage.setItem("list3",JSON.stringify(starlist))
  }

useEffect(() => {
  setfavlist(JSON.parse(localStorage.getItem("fav")));
}, [])

    
  return (
    <div>
        <div style={{display:"flex",marginLeft:"30px",marginTop:"30px"}}><img style={{marginTop:"3px"}} src='https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg' id={styles.e1} alt="no" onClick={()=>navigate("/")}/><p> / Account / Wishlist</p></div>
        <div style={{display:"flex",marginLeft:"30px"}}><img style={{marginTop:"3px"}} src={person} id={styles.e1} alt="no" onClick={()=>navigate("/")}/><p style={{fontWeight:"bold"}}> Hi, {per.name} !</p></div>
        <div id={styles.v1}>
            <img src={pic1} alt="no" onClick={()=>navigate("/orders")}/>
            <img src={pic2} alt="no" onClick={()=>navigate("/personalinfo")}/>
            {/* <img src={pic3} alt="no" /> */}
            {/* <img src={pic4} alt="no" /> */}
        </div>
        <div className={styles.q15}>
          {favlist.map((e) => {
            e.quantity = 1;
            return (
              <div className={styles.q6} key={e.id}>
                <div className={styles.q22}>
                <img className={styles.q23} src='https://biohack.ae/wp-content/uploads/2019/01/white-close-button-png-16.png' alt="no" style={{height:"20px", width:"20px",marginTop:"5px",marginLeft:"300px"}} onClick={()=>{handledelete(e.id)}}/>
                  {" "}
                  <img src={e.src} alt="no" />{" "}
                  <p className={styles.name}>{e.name}</p>{" "}
                  <p className={styles.price}>₹ {e.price}</p>{" "}
                  <div className={styles.q8} style={{margin:"auto"}}>
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
  )
}

export default Wishlist