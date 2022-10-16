import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./styles/Style.module.css"
const Orders = () => {
   const navigate= useNavigate()
  return (
    <div>
    <div style={{display:"flex",marginTop:"30px",marginLeft:"30px"}}><img style={{marginTop:"3px"}} src='https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg' id={styles.e1} alt="no" onClick={()=>navigate("/")}/><p> / Personal Info</p></div>
    <div style={{width:"30%",margin:"auto",marginTop:"100px"}}>
        <h1>No previous orders</h1>
        <img src='https://in.sugarcosmetics.com/ic_empty_order.png' alt="no"/>
    </div>
    </div>
  )
}

export default Orders