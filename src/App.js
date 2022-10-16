import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Map from "./pages/Map";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Offer from "./pages/Offer";
import Wishlist from "./pages/Wishlist";
import Stores from "./pages/Stores";
import Success from "./pages/Success";
import Orders from "./pages/Orders";
import PersonalInfo from "./pages/PersonalInfo";
import Search from "./pages/Search";
import Component from "./pages/Component";
import { Box } from "./context/context";
import { useContext } from "react";

function App() {
  const { brush_list,trend_list,skin_list } = useContext(Box);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          HOME
        </Route>
        <Route path="/makeup" element={<Component list={trend_list} filter_list={["Lipstick","Contour","Kajal","Remove"]}/>}>
          MAKEUP
        </Route>
        <Route path="/brushes" element={<Component list={brush_list} filter_list={["Eye","Face","Foundation","Remove"]}/>}>
          BRUSHES
        </Route>
        <Route path="/skincare" element={<Component list={skin_list} filter_list={["Moisturizer","Sunscreen","Mask","remove"]}/>} >
          SKINCARE
        </Route>
        <Route path="/trending" element={<Component list={trend_list} filter_list={["Lipstick","Contour","Kajal","Remove"]}/>} >
          TRENDING
        </Route>
        <Route path="/offers" element={<Offer />}>
          Offer
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/map" element={<Map />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/guestCheckout" element={<Map />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/stores" element={<Stores/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/personalinfo" element={<PersonalInfo/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
