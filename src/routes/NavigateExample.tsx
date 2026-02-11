import React from "react";
import { Navigate, useNavigate } from "react-router";

const NavigateExample = () => {
  const isLoggedIn = true;

  const navigate = useNavigate();

  const proceedPayment = () => {
    if (isLoggedIn) {
      //proceed to payment
      console.log("proceeding to payment");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      NavigateExample
      <br />
      {/* {isLoggedIn ? "Welcome back!" : <Navigate to="/" />} */}
      <button onClick={proceedPayment}>Proceed to Payment</button>
    </div>
  );
};

export default NavigateExample;
