import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Navbar.css";
import styles from "../styles/Navbar.module.css";
import stylesHp from "./css/login.module.css";
import { useState } from "react";
import { useRef } from "react";
import { Box } from "../context/context";
const Navbar = () => {
  let cat = [
    {
      id: 1,
      title: "MAKEUP",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "lip",
        b: "FACE",
        p2: "face",
        c: "EYES",
        p3: "eye",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 2,
      title: "BRUSHES",
      path: "/brushes",
      sub: {
        a: "FACE BRUSHES",
        p1: "face brush",
        b: "EYES BRUSHES",
        p2: "eye brush",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 3,
      title: "SKINCARE",
      path: "/skincare",
      sub: {
        a: "MOISTURIZERS",
        p1: "moist",
        b: "SUNSCREEN",
        p2: "suns",
        c: "SETTING MISTS",
        p3: "mist",
        d: "COFFEE CULTURE RANGE",
        p4: "coffee",
        e: "SHEET MASK COMBO",
        p5: "mask",
        f: "CITRUS GOT REAL RANGE",
        p6: "citrus",
        g: "MASKS",
        p7: "mask",
        h: "AQUAHOLIC RANGE",
        p8: "aqua",
      },
    },
    {
      id: 4,
      title: "TRENDING",
      path: "/trending",
      sub: {
        a: "SUGAR MERCH STATION",
        p1: "/",
        b: "MAKEUP KITS",
        p2: "/",
        c: "BESTSELLERS",
        p3: "/",
        d: "SUGAR SETS",
        p4: "/",
        e: "VALUE SETS",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 5,
      title: "BLOG",
      path: "/",
      sub: {
        a: "FEATURED",
        p1: "/",
        b: "MAKEUP",
        p2: "/",
        c: "SKINCARE",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
  ];

  const {setsearch } = useContext(Box);
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState(false);

  
  
  const handleClick = () => {
    // console.log(firstName);

    if (firstName.length > 4) {
      setName(true);
      localStorage.setItem("firstname", JSON.stringify(firstName));
      navigate("/");
    } else {
      alert("Your First Name Should have atleast 4 Character");
    }
  };



  const hanleClickVerify = (e) => {
    if (otp === "8455") {
      setVerify(true);
    } else {
      alert("Wrong OTP");
    }
  };

let query="";
  const handleSearch=(e)=>{
    
    query=e.target.value;
    
  }
const Search=()=>{
  setsearch(query)
  navigate("/search")
}

  // console.log(otp);
  return (


  <div className='block'>

    <div>
      <div>
        {/* upper section navbar */}
        <div className={styles.navbarSugarUpperArea}>
          <img
            className={styles.navbarSugarLogoPride}
            src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif"
            alt="pride logo sugar"
            onClick={()=>navigate("/")}
          />
          <div className={styles.navbarSugarInputSearchContainer}>
            <input
              className={styles.navbarSugarInputSearchBox}
              type="text"
              placeholder='Try "Lipstick"'
              onChange={handleSearch}
            />
            <button className={styles.navbarSugarInputSearchButton} onClick={Search}>
              Search
            </button>
          </div>
          <div className={styles.navbarIconBox}>
            <img
              className={styles.navbarLoginIcon}
              src="https://in.sugarcosmetics.com/desc-images/person.png"
              alt=""
            />
            {/* <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login/SignUp
            </button> */}
            <div className={stylesHp.loginInNav}>
              <button
                // type="button"
                // class="btn btn-primary"
                
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={stylesHp.loginInNav_button}
              >
                <p>{name ? "firstname" : "Login/SignUp"}</p>
              </button>
            </div>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <h1 className={stylesHp.login}>Login/SignUp</h1>
                  <div class="modal-header">
                    {/* <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5> */}
                    <div className={stylesHp.mobile}>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          +91
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Mobile Number"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    {/* <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button> */}
                  </div>
                  <div className={stylesHp.requestOTP}>
                    <button type="button" class="btn btn-primary">
                      Request OTP
                    </button>
                  </div>
                  <div className={stylesHp.inputOTP}>
                    <div class="input-group mb-3">
                      <input
                        onChange={(e) => setOtp(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Enter OTP"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <button
                        onClick={hanleClickVerify}
                        class="input-group-text"
                        type="button"
                        // class="btn btn-secondary"
                        // data-bs-dismiss="modal"
                        // id="basic-addon2"
                        className={verify?stylesHp.q1:null}
                      >
                        {verify ? "Verified" : "Verify OTP"}
                      </button>
                    </div>
                  </div>
                  <div className={stylesHp.form_tag_div}>
                    {/* <form> */}
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        First Name
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        name="firstName"
                        // value={data.firstName}
                        placeholder="Enter Your First Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Middle Name
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Middle Name(Optional)"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="middleName"
                        // value={data.middleName}
                        // onChange={handleOnChange}
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Last Name
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Last Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="lastName"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter Your Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="email"
                      />
                      {/* <span class="input-group-text" id="basic-addon2">
                        @gmail.com
                      </span> */}
                    </div>
                    <div className={stylesHp.form_tag}>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Password
                        </span>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Enter Your Password"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name="password"
                        />
                      </div>
                    </div>
                    <div className={stylesHp.submit}>
                      <button
                        onClick={handleClick}
                        type="submit"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Submit
                      </button>
                    </div>
                    {/* </form> */}
                  </div>
                  <div class="modal-body"></div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    {/* <button type="button" class="btn btn-primary">
                      Save changes
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.setIcons}>
            <i class="fa-solid fa-heart" style={{cursor:"pointer"}} onClick={()=>navigate("/wishlist")}></i>
            <i class="fa-solid fa-bag-shopping" style={{cursor:"pointer"}} onClick={()=>navigate("/cart")}></i>
            <img
              className={styles.setDiscountLogo}
              src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
              alt=""
              onClick={()=>navigate("/offers")}
            />
          </div>
        </div>
        {/* lower section navbar */}
      </div>

      <div className="upperBox">
        {cat.map((el) => (
          <div className="main_menu" key={el.id}>
{/* zxczxvcxxcvxcvxcvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */}
            <Link className="menu-btn" to={el.path} >
              {el.title}
            </Link>

            <div className="xyz">
              <div className="b">
                <div className="div">
                  <ul>
                    <li>
                    <p className="p" onClick={()=>{setsearch(el.sub.p1);
          navigate("/search");
          }}>{el.sub.a}</p>
                    </li>
                    <li>
                      <p className="p" onClick={()=>{setsearch(el.sub.p2);
          navigate("/search");
          }}>{el.sub.b}</p>
                    </li>
                    <li>
                    <p className="p" onClick={()=>{setsearch(el.sub.p3);
          navigate("/search");
          }}>{el.sub.c}</p>
                    </li>
                    <li>
                    <p className="p" onClick={()=>{setsearch(el.sub.p4);
          navigate("/search");
          }}>{el.sub.d}</p>
                    </li>
                    <li>
                    <p className="p" onClick={()=>{setsearch(el.sub.p4);
          navigate("/search");
          }}>{el.sub.e}</p>
                    </li>
                    <li>
                    <p className="p" onClick={()=>{setsearch(el.sub.p5);
          navigate("/search");
          }}>{el.sub.f}</p>
                    </li>
                    <li>
                    <p className="p" onClick={()=>{setsearch(el.sub.p6);
          navigate("/search");
          }}>{el.sub.g}</p>
                    </li>
                    <li>
                    <p className="p" onClick={()=>{setsearch(el.sub.p7);
          navigate("/search");
          }}>{el.sub.h}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Link className="grow" to="/offers">
          OFFERS
        </Link>
        <Link className="grow" to="/stores">
          STORES
        </Link>
      </div>
    </div>
    </div>
  );
  
};

export default Navbar;