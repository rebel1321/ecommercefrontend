import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate=useNavigate();
  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }
  return (
    <div>
      <div className="lg:grid grid-cols-[2fr_1fr] lg:px-16 relative gap-8">
        <div>
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4 text-left ml-2">
              Price details
            </p>
            <hr />
            <div className="space-y-3 font-semibold ml-2 mr-2">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹5996</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">₹4400</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Total Amount</span>
                <span className="text-green-600">₹1596</span>
              </div>
            </div>
            <Button
            onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5"
              sx={{
                px: "2.5rem",
                py: ".7rem",
                mt: "0.5rem",
                bgcolor: "#9155fd",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
