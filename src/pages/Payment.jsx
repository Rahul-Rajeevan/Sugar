import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles2 from "./styles/checkoutStyles.module.css";
import { MdDelete } from "react-icons/md";
import styles from "./styles/cartStyles.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const cart = useSelector((state) => state);
  // let total = localStorage.getItem("total");
  // let tax = localStorage.getItem("tax");
  const addition = (acc, curr) => {
    return acc + curr.price * curr.quantity;
  };
  const total = cart.reduce(addition, 0);
  const tax = (total * (18 / 100)).toFixed(2);
  const dispatch = useDispatch();
  let promo = localStorage.getItem("discount");
  const discount = (total * (Number(promo) / 100)).toFixed(2);
  
const navigate=useNavigate()

  const [state1, setState1] = useState();
  console.log(state1);
  return (
    <div className={styles2.container1}>
      <div className={styles2.container2}>
        <div className={styles2.container3}>
          <div className={styles2.box1}>
            <img
              className={styles2.box1_img}
              src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
              alt=""
            />

            <p className={styles2.textdecoration}>Price Details</p>
          </div>
          <div className={styles2.box2}>
            <div className={styles2.box2_Inner}>
              <img
                className={styles2.box2_Inner_img}
                src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg"
                alt=""
              />
              <p>Cart Sub Total:</p>
              <p className={styles2.box2_Inner_p}>₹ {total}.00</p>
            </div>
            <div className={styles2.box2_Inner}>
              <img
                className={styles2.box2_Inner_img}
                src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg"
                alt=""
              />
              <p className={styles2.shoping_cost}>Shipping Cost:</p>
              <p className={styles2.box2_Inner_p}>₹ {0}.00</p>
            </div>
            <div className={styles2.box2_Inner}>
              <img
                className={styles2.box2_Inner_img}
                src="https://in.sugarcosmetics.com/desc-images/Discount.svg"
                alt=""
              />
              <p>Discount Applied:</p>
              <p className={styles2.box2_Inner_p}>₹ {discount}</p>
            </div>
            <div className={styles2.box2_Inner}>
              <img
                className={styles2.box2_Inner_img}
                src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg"
                alt=""
              />
              <p>Amount Payable:</p>
              <p className={styles2.box2_Inner_p}>₹ {total - discount}.00</p>
            </div>
            <p className={styles2.tax}>
              <i>Including ₹ {tax} in taxes</i>
            </p>
          </div>
          <div className={styles2.box1}>
            <img
              className={styles2.box1_img}
              src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg"
              alt=""
            />
            <p className={styles2.textdecoration}>Order Summary</p>
          </div>
          <div>
            {cart.map((item) => {
              // item.quantity = 1;
              return (
                <div className={styles2.cartItem_div} key={item.id}>
                  <div className={styles2.cartItem_div_inner}>
                    <img
                      className={styles2.cartItem_div_inner_img}
                      src={item.src || item.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className={styles2.nametag}>{item.name}</h6>
                  </div>
                  <div className={styles.partOffun}>
                    <div>
                      <button
                        className={styles2.deleteBtn}
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: item })
                        }
                      >
                        <MdDelete />
                      </button>
                    </div>
                    <div className="btn_div">
                      <button
                        className={styles2.btn}
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch({ type: "DECREASE", payload: item });
                          } else {
                            dispatch({ type: "REMOVE", payload: item });
                          }
                        }}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className={styles2.btn}
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: item })
                        }
                      >
                        +
                      </button>
                    </div>

                    <div className={styles2.findAmount}>
                      <p>
                        {item.quantity} x {item.price} ={" "}
                        {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ height:"500px", width:"500px",marginLeft:"300px",background:"#1460f4"}}>
        <div style={{ height:"400px", width:"400px",borderRadius:"20px",margin:"auto",marginTop:"50px"}}>
        <div style={{width:"80%",margin:"auto",height:"80%",marginTop:"50px"}}>
        <br/><br/>
        <p style={{marginBottom:"-1px"}}>Card Holder Name</p>
        <input></input>
        <br/>
        <div style={{display:"flex"}}>
          <div><p style={{marginBottom:"-1px",marginTop:"15px"}}>Card Number</p>
        <input style={{width:"250px"}}></input></div>
        <div style={{marginLeft:"20px",marginTop:"15px"}}>
        <p style={{marginBottom:"-1px"}}>CVV</p>
        <input style={{width:"50px"}}></input>
        </div>
        </div>
        <p style={{marginBottom:"-1px",marginTop:"15px"}}>Expiration Date</p>
        <div style={{display:"flex",gap:"30px"}}>
        <input style={{width:"70px"}} placeholder="month"></input>
        <input style={{width:"70px"}} placeholder="year"></input>
        </div>
        
        <br></br>
        <p style={{textAlign:"center"}}>🔒 Your current info is encrypted</p>
        <button style={{background:"#1460f4", color:"white",border:"none",marginLeft:"100px"}} onClick={()=>navigate("/success")}>PROCEED →</button>
        </div>
        </div>
        </div>
        {/* <div className={styles2.Container_2} style={{ border: "1px solid " }}>
          <div className={styles2.box1} style={{ height: "20px" }}>
            <img
              className={styles2.box1_img}
              src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg"
              alt=""
            />
            <p className={styles2.textdecoration}>Payment Method</p>
          </div>
          <div className={styles2.container4}>
            <div className={styles2.container5}>
              <div>
                <p className={styles2.selectPayment}>Select a Payment Method</p>
              </div>
            </div>
            <div>
              <div>
                {state1 ? (
                  <div className={styles2.paymentUPI1}>
                    <div className={styles2.paymentUPI_inner}>
                      <img className={styles2.paymentUPI1IMG}
                        src="https://in.sugarcosmetics.com/paymentIcons/upi.svg"
                        alt=""
                      />
                      <p className={styles2.paymentUPI1_p}>
                        Instant Pay Using Other UPIs (Gpay,PhonePe,BHIM etc)
                      </p>
                      <input className={styles2.paymentUPI1_input}
                        onChange={(e) => setState1(e.target.checked)}
                        type="checkbox"
                      />
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                  </div>
                ) : (
                  <div className={styles2.paymentUPI2}>
                    <img
                      className={styles2.paymentUPI2IMG}
                      src="https://in.sugarcosmetics.com/paymentIcons/upi.svg"
                      alt=""
                    />
                    <p className={styles2.paymentUPI2_p}>
                      Instant Pay Using Other UPIs (Gpay,PhonePe,BHIM etc)
                    </p>

                    <input
                      style={{
                        width: "1.7em",
                        height: "1.7em",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        verticalAlign: "middle",
                        border: "5px solid green",
                        appearance: "none",
                        WebkitAppearance: "none",
                        outline: "none",
                        cursor: "pointer",
                      }}
                      className={styles2.paymentInput}
                      checked={state1}
                      onChange={(e) => setState1(e.target.checked)}
                      type="checkbox"
                    />
                  </div>
                )}
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Payment;
