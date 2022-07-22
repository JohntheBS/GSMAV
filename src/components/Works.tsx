import React from "react";
import pic1 from "../Images/pic1 (1).jpg";
import pic2 from "../Images/pic1 (2).jpg";
import pic3 from "../Images/pic1 (3).jpg";
import pic4 from "../Images/pic1 (4).jpg";
import pic5 from "../Images/pic1 (5).jpg";

const Works = () => {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-4 gap-2 p-2 max-h-[30rem]">
        <div className="col-span-2 row-span-4 bg-red-500"><img src={pic1} className='w-full h-full object-cover object-center' alt="pic1" /></div>
        <div className="col-span-2 row-span-2 bg-red-500"><img src={pic2} className='w-full h-full object-cover object-center' alt="pic1" /></div>
        <div className="row-span-1 col-span-1 bg-red-500"><img src={pic3} className='w-full h-full object-cover object-center' alt="pic1" /></div>
        <div className="col-span-1 row-span-2 bg-red-500"><img src={pic4} className='w-full h-full object-cover object-center' alt="pic1" /></div>
        <div className="col-span-1 bg-red-500"><img src={pic5} className='w-full h-full object-cover object-center' alt="pic1" /></div>
      </div>
    </div>
  );
};

export default Works;
