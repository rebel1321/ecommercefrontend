import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md ">
      <div className="flex items-center">
        <div className="w-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/e/k/6/xl-ocb-pink-dd-xl-gosriki-original-imah4mfvu4b3eevx.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Women Cotton Blend Kurti Pant Dupatta Set
          </p>
          <p className="opacity-70 text-left">Size: XL,</p>
          <p className="opacity-70 mt-2 text-left">Seller:GoSriKi</p>
          <div className="flex space-x-5 items-center  text-gray-900 pt-6">
            <p className="opacity-50 line-through">₹1499</p>
            <p className="font-semibold">₹399</p>
            <p className="text-green-600 font-semibold">73% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4 text-left w-full">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm flex items-center justify-center">
            1
          </span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
