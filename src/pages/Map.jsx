import React from "react";
import styles from "./styles/Style.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Map = () => {
  const navigate = useNavigate();
  const name = useRef("");
  const company = useRef("");
  const phone = useRef("");
  const flat = useRef("");
  const email = useRef("");
  const apartment = useRef("");
  const pin = useRef("");
  const state = useRef("");
  const city = useRef("");
  const country = useRef("");
  let obj = {
    name: "User",
    company: "",
    phone: "",
    flat: "",
    email: "",
    apartment: "",
    pin: "",
    state: "",
    city: "",
    country: "",
  };

  const handle = () => {
    obj = {
      name: name.current.value,
      company: company.current.value,
      phone: phone.current.value,
      flat: flat.current.value,
      email: email.current.value,
      apartment: apartment.current.value,
      pin: pin.current.value,
      state: state.current.value,
      city: city.current.value,
      country: country.current.value,
    };
    localStorage.setItem("person", JSON.stringify(obj));
    navigate("/checkout")
  };

  return (
    <div>
      <div
        style={{
          width: "80%",
          height: "420px",
          backgroundColor: "#f6e1e9",
          margin: "auto",
          padding: "20px 0px 0px 0px",
        }}
      >
        {/* <div
          style={{
            width: "30%",
            height: "45px",
            backgroundColor: "white",
            margin: "auto",
            border: "2px solid",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div onClick={()=>navigate("")}>Login/Sign Up</div>
          <img
            style={{ height: "30px", width: "30px", marginTop: "5px" }}
            src="https://in.sugarcosmetics.com/guestCheckout/forwardbutton.svg"
            alt="no"
          />
        </div> */}
        {/* <p style={{ backgroundColor: "#f6e1e9",textAlign:"center" }}>OR</p> */}
        <p style={{ backgroundColor: "#f6e1e9", textAlign:"center", fontWeight:"bold" }}>Register</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "75%",
            margin: "auto",
            backgroundColor: "#f6e1e9",
          }}
        >
          <div className={styles.a1}>
            <input placeholder="Full Name" name="name" ref={name} />
            <input
              placeholder="Company(Optional)"
              name="company"
              ref={company}
            />
            <input placeholder="Phone Number" name="phone" ref={phone} />
          </div>
          <div className={styles.a2}>
            <input placeholder="Flat Number" name="flat" ref={flat} />
            <input placeholder="Email Id" name="email" ref={email} />
          </div>
          <div className={styles.a2}>
            <input
              placeholder="Apartment Address"
              name="apartment"
              ref={apartment}
            />
            <input placeholder="Pincode" name="pin" ref={pin} />
          </div>
          <div className={styles.a1}>
            <input placeholder="State" name="state" ref={state} />
            <input placeholder="City" name="city" ref={city} />
            <input placeholder="Country" name="country" ref={country} />
          </div>
        </div>
        <div className={styles.a3}>
          <button
            onClick={() => navigate("/cart")}
            style={{ backgroundColor: "#212529", color: "white" }}
          >
            Cancel
          </button>
          <button
            style={{ backgroundColor: "#fc2779", color: "white" }}
            onClick={handle}
          >
            Save and use this address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
