import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles2 from "./styles/checkoutStyles.module.css";
import { MdDelete } from "react-icons/md";
import styles from "./styles/cartStyles.module.css";
import { Navigate, useNavigate } from "react-router-dom";
function Checkout() {
  const cart = useSelector((state) => state);
  const addition = (acc, curr) => {
    return acc + curr.price * curr.quantity;
  };
  const total = cart.reduce(addition, 0);
  const tax = (total * (18 / 100)).toFixed(2);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let person = JSON.parse(localStorage.getItem("person"));
  // console.log(person);

  let promo = localStorage.getItem("discount");
  const discount = (total * (Number(promo) / 100)).toFixed(2);
  const handlechangeAddress = () => {
    navigate("/guestCheckout");
  };
  const gotoPaymentPage = () => {
    navigate("/payments");
  };
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
              <p >Cart Sub Total:</p>
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
              <p className={styles2.box2_Inner_p} style={{fontWeight:"bold"}}>₹ {total - discount}.00</p>
            </div>
            <p className={styles2.tax} style={{paddingTop:"10px"}}>
              <i>Including ₹ {tax} in taxes</i>
            </p>
          </div>
          <div className={styles2.box1} style={{paddingTop:"30px"}}>
            <img
              className={styles2.box1_img}
              src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg"
              alt=""
            />
            <p className={styles2.textdecoration} style={{fontSize:"20px"}}>Order Summary</p>
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
        <div className={styles2.Container_2}>
          <div className={styles2.box12}>
            <img
              className={styles2.box1_img2}
              src="https://in.sugarcosmetics.com/desc-images/CustomerInformation.svg"
              alt=""
            />
            <p className={styles2.textdecoration}>Contact Information</p>
          </div>
          <div className={styles2.box13}>
            <div className={styles2.fullname}>
              <div className={styles2.fullname_inner}>
                <p className={styles2.fullname_margin}>Full Name </p>
                <b>{person.name}</b>
              </div>
              <div className={styles2.fullname_inner_ph}>
                <p className={styles2.fullname_margin}>Phone Number</p>
                <b>{person.phone}</b>
              </div>
            </div>
            <div className={styles2.box14}>
              <p className={styles2.box14_p}>Email</p>
              <b className={styles2.box14_b}>{person.email}</b>
            </div>
            <div className={styles2.box15} >
              <div className={styles2.box15_inner} >
                <p className={styles2.box15_p}>Delivery Address</p>
                <button
                  className={styles2.changeAdd}
                  onClick={handlechangeAddress}
                >
                  Change Address
                </button>
              </div>
            </div>
          </div>
          <div className={styles2.box16_outer_1}>
            <div className={styles2.box16_outer}>
              <p className={styles2.box16}>{person.name}</p>
              <p className={styles2.box16}>{person.phone}</p>
              <p className={styles2.box16}>
                {person.flat},{person.apartment}
              </p>
              <p className={styles2.box16}>
                {person.city},{person.state},{person.pin},{person.country}
              </p>
            </div>
          </div>
          <div className={styles2.last_div}>
            <button className={styles2.last_div_btn1}>
              {"< "} Offer and Pricing
            </button>
            <button
              onClick={gotoPaymentPage}
              className={styles2.last_div_btn2}
            >{`Proceed to Payment(Rs. ${total - discount}.00)`}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
