import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
          <Grid item xs={6}>
            <div className='flex cursor-pointer'>
              <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/blazer/m/k/z/-original-imaggnd3w7kvxgmk.jpeg?q=70" alt="" />
              <div className='ml-5 space-y-2'>
                <p className='text-left'>Men Solid Single Breasted Formal Blazer  (Blue)</p>
                <p className='opacity-50 text-xs font-semibold text-left'>Size: M</p>
                <p className='opacity-50 text-xs font-semibold text-left'>Color: Medium Blue</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <p>₹2,239</p>
          </Grid>
          <Grid item xs={4} className='text-left'>
            {true && <div> <p>
              <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2
              text-sm'/>
              <span>
                Delivered On September 08
              </span>
            </p>
            <p className=' text-xs'>
              Your Item has Been Delivered</p>
            </div>}
            {false && <p>
              <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2
              text-sm'/>
              <span>
                Expected Delivery On September 08
              </span>
            </p>}
          </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard