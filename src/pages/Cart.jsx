import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import styles from "./styles/cartStyles.module.css";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import styles1 from "./styles/Style.module.css";
import { useState } from "react";
function Cart() {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [giftState, setGiftState] = useState("");
  const [promo, setPromo] = useState(0);

  const handleNavigate = () => {
    navigate("/");
  };
  const handleDelhivery = () => {
    navigate("/guestCheckout");
  };
  const addition = (acc, curr) => {
    return acc + curr.price * curr.quantity;
  };

const getcoupon=()=>{
  let y=localStorage.getItem("coupon")
  alert(`Copied coupon is ${y} `)
}

  const total = cart.reduce(addition, 0);
  localStorage.setItem("total", total);
  const tax = (total * (18 / 100)).toFixed(2);
  const discount = (total * (Number(promo) / 100)).toFixed(2);
  // console.log(giftState);
  localStorage.setItem("discount", promo);
  const handleGiftCard = () => {
    if (giftState === "GJ1499"||giftState === "GJMMIL"||giftState === "GJNRGG"||giftState === "GJ699"||giftState === "GJ1099"||giftState === "GJGJ1999"||giftState === "GJ2499"||giftState === "SUGARNEW") {
      setPromo(15);
    }
  };
  console.log(promo);
  if (cart.length === 0) {
    return (
      <div>
        <div style={{ display: "flex", padding: "0px 0px 0px 100px" }}>
          <img
            style={{ marginTop: "3px" }}
            src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
            id={styles1.e1}
            alt="no"
            onClick={() => navigate("/")}
          />
          <p> / Cart</p>
        </div>

        <div className={styles.nothingInCart}>
          <img
            className={styles.nothingInCartIMG}
            src="https://in.sugarcosmetics.com/ic_empty_cart.png"
            alt=""
          />
          <div className={styles.ptag_div}>
            <p className={styles.ptag_div_p}>
              <i>Hey! It's lonely here.</i>
            </p>
            <p className={styles.ptag_div_p}>
              <i>Your bag seems to have no company.</i>
            </p>
            <p className={styles.ptag_div_p}>
              <i>Why not add some products?</i>
            </p>
          </div>
          <button onClick={handleNavigate} className={styles.shopnowBTN}>
            SHOP NOW
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div style={{ display: "flex", padding: "30px 0px 0px 60px" }}>
        <img
          style={{ marginTop: "3px" }}
          src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
          id={styles1.e1}
          alt="no"
          onClick={() => navigate("/")}
        />
        <p> / Cart</p>
      </div>
      <div className={styles.universal}>
        <div>
          <div className={styles.cartContainer}>
            <div className={styles.orderSummary}>
              <div className={styles.orderSummaryInner1}>
                <div className={styles.orderSummaryInner1_div}>
                  <p className={styles.orderSummaryInner1_p}>
                    <GrCart />
                    {"   "}
                    Order Summary
                  </p>
                </div>
              </div>
              <div className={styles.orderSummaryInner2}>
                <p className={styles.orderSummaryInner2_p}>
                  Cart Total : Rs. {total}.00
                </p>
              </div>
            </div>
            <div className={styles.outer_div}>
              {cart.map((item) => {
                return (
                  <div className={styles.inner_div} key={item.id}>
                    <div>
                      <img
                        className={styles.image}
                        src={item.src || item.image}
                        alt=""
                      />
                    </div>
                    <h6 className={styles.nametag}>{item.name}</h6>
                    <div className={styles.partOffun}>
                      <div>
                        <button
                          className={styles.deleteBtn}
                          onClick={() =>
                            dispatch({ type: "REMOVE", payload: item })
                          }
                        >
                          <MdDelete />
                        </button>
                      </div>
                      <div className={styles.btn_div}>
                        <button
                          className={styles.btn}
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
                          className={styles.btn}
                          onClick={() =>
                            dispatch({ type: "INCREASE", payload: item })
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className={styles.findAmount}>
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
            <div className={styles.cartTotalBox}>
              <div className={styles.offerSection}>
                <img
                  className={styles.offerSectionIMG}
                  src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg"
                  alt=""
                />
                <p className={styles.offerSection_p}>
                  Offers and Price Details
                </p>
              </div>
              <div className={styles.offerPrice_div}>
                <select
                  className={styles.selectPromo}
                  onChange={(e) => setPromo(e.target.value)}
                >
                  <option value="0">
                    Available Offers/Promos for you! (Click to Expand)
                  </option>
                  <option value="5">5% Discount Applied</option>
                  <option value="8">8% Discount Applied</option>
                  <option value="10">10% Discount Applied</option>
                </select>
              </div>
              <div className={styles.applyPromo}>
                <img
                  className={styles.applyPromoIMG}
                  src="https://in.sugarcosmetics.com/desc-images/GiftCard.svg"
                  alt=""
                />
                <p className={styles.applyPromo_P}>Gift Card/Discount Code</p>
                <input
                  className={styles.applyPromoInput}
                  type="text"
                  placeholder="Enter Promo Code"
                  onChange={(e) => setGiftState(e.target.value)}
                />
                <button
                  onClick={handleGiftCard}
                  className={styles.applyPromoBtn}
                >
                  Apply
                </button>
                <button
                  onClick={handleGiftCard}
                  className={styles.applyPromoBtn}
                  style={{marginLeft:"15px",width:"200px"}}
                  onClick={getcoupon}
                >
                  View copied coupon
                </button>
              </div>
              <div className={styles.priceDetails}>
                <img
                  className={styles.priceDetailsIMG}
                  src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
                  alt=""
                />
                <p className={styles.priceDetails_P}>Price Details</p>
              </div>
              <div>
                <div className={styles.cartPriceDetails}>
                  <img
                    className={styles.cartPriceDetailsIMG}
                    src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg"
                    alt=""
                  />
                  <p className={styles.cartPriceDetails_p}>Cart Sub Total:</p>
                  <p>₹ {total}.00</p>
                </div>
                <div className={styles.cartPriceDetails}>
                  <img
                    className={styles.cartPriceDetailsIMG}
                    src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg"
                    alt=""
                  />
                  <p className={styles.cartPriceDetails_p}>Shipping Cost:</p>
                  <p>₹ 0.00</p>
                </div>
                <div className={styles.cartPriceDetails}>
                  <img
                    className={styles.cartPriceDetailsIMG}
                    src="https://in.sugarcosmetics.com/desc-images/Discount.svg"
                    alt=""
                  />
                  <p className={styles.cartPriceDetails_p}>Discount Applied:</p>
                  <p>₹ {discount}</p>
                </div>
                <div className={styles.cartPriceDetails}>
                  <img
                    className={styles.cartPriceDetailsIMG}
                    src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg"
                    alt=""
                  />
                  <p className={styles.cartPriceDetails_p}>Amount Payable:</p>
                  <p>₹ {total - discount}.00</p>
                </div>
                <i className={styles.tax}>Including ₹{tax} in taxes</i>
                <div className={styles.delhivery}>
                  <button className={styles.continueShop} onClick={()=>navigate("/")}>
                    <span>{"<"}</span> Continue Shoping
                  </button>
                  <button
                    onClick={handleDelhivery}
                    className={styles.delhiveryBTN}
                  >
                    Delivery Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {total > 0 && <h2>Total: {total}</h2>} */}
      </div>
    </div>
  );
}

export default Cart;
