import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./styles/Style.module.css"

const PersonalInfo = () => {
   let y= JSON.parse(localStorage.getItem("person"))||{}
   useEffect(() => {
    y= JSON.parse(localStorage.getItem("person"))||{}
   }, [])
//    console.log(y)
const navigate=useNavigate()
   
  return (
    <div style={{marginLeft:"30px"}}>
    <div style={{display:"flex",marginTop:"30px",}}><img style={{marginTop:"3px"}} src='https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg' id={styles.e1} alt="no" onClick={()=>navigate("/")}/><p> / Personal Info</p></div>  
     <div style={{width:"500px",border:"1px solid", borderRadius:"10px",marginTop:"30px",paddingTop:"30px",paddingLeft:"20px"}}>
                <h3>{y.name}</h3>
                <p>{y.phone}</p>
                <p>{y.email}</p>
                <p>{y.flat},{y.apartment}, {y.city}, {y.state}</p>
    </div>
    </div>
   
  )
}

export default PersonalInfo