import React from 'react'
import { useEffect } from 'react'
import styles from './styles/Style.module.css'
const Success = () => {
    let a=JSON.parse(localStorage.getItem("cartItem"))
    useEffect(() => {
        a=JSON.parse(localStorage.getItem("cartItem"))
    }, [])
    
  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h2>Payment successful! Order confirmed</h2>
        <h3>Order number:45346</h3>
        {a.map(e=>
          <div>
          <div className={styles.q200} >
                  {" "}
                  <img src={e.src} alt="no" />{" "}
                  <p className={styles.name}>{e.name}</p>{" "}
            </div>
            <hr/>
            </div>
            )}
    </div>
  )
}

export default Success