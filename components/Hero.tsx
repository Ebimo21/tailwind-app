import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-wrap mt-5">
            <div className="">
              <h1 className="h1 flex text-3xl w-3/4 leading-9 font-extrabold">The Worlds Largest Car Market Place</h1>

              <p className="text-base mt-5">Open cars hold the highest car sales in the world. 
                Based on ratings and reviews from real customers.
              </p>

              <button className="btn mt-5">Book a Car</button>
            </div>

            <div className="translate -translate-y-8 ">
              <Image className="w-full max-w-full  " src="/images/landing-car.png" width={"331px"} height="233px" alt="" />
            </div>
          </section>
  )
}

export default Hero
