import React from 'react'

const PaymentPartner = () => {
  const payDatas = [
    { img: "https://images.seeklogo.com/logo-png/35/1/nagad-logo-png_seeklogo-355240.png" },
    { img: "https://freelogopng.com/images/all_img/1656227518bkash-logo-png.png" },
    { img: "https://i.ibb.co/w6qBJg7/express-1.png" },
    { img: "https://i.ibb.co/vJVTqMS/transfer-1.png" },
    { img: "https://i.ibb.co/P9SDmVY/apple-Pay-1.png" },
    { img: "https://i.ibb.co/B6MTvxZ/card-Mechine-1.png" },
    { img: "https://i.ibb.co/St0P31V/visa-1.png" },
    { img: "https://i.ibb.co/QDvS57s/MCard-1.png" },
    { img: "https://www.zichtrekeningen-vergelijken.be/images/hello-bank-visa.png" },
    { img: "https://i.ibb.co/PjH4W1n/c-Card-1.png" },
    { img: "https://i.ibb.co/qC9yBP8/GPay-1.png" },
    { img: "https://i.ibb.co/XC8y7T9/samsung-Pay-1.png" },
  ]

  return (
    <div className='bg-primary shadow-2xl py-4 '>

      <div className='grid lg:grid-cols-12 md:grid-cols-4 '>
        {
          payDatas?.map(payData =>(
            <div className="bg-primary w-16 h-12 border flex shadow-md ">
              <img src={payData?.img} alt="img" className='' />
            </div>
          )
            
          )
        }
      </div>
    </div>
  )
}

export default PaymentPartner
