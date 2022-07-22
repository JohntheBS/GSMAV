import { Box, Divider } from "@mantine/core";
import React from "react";
import pic from "../Images/Capture.jpg";
import { FaFacebook, FaGoogle, FaLocationArrow, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <Box component="footer" className="bg-sky-600 text-white p-5 sm:p-10">
        <div className="flex items-stretch justify-evenly flex-wrap gap-10">
          <div className="w-[250px]">
            <h1 className="text-2xl pb-5">Contact us</h1>
            <ul>
              <li>
                <a href="bnmmd" className="flex items-center gap-3">
                  <FaLocationArrow /> Yde,derrier l'hopital general
                </a>
              </li>
              <li>
                <a href="jhs" className="flex items-center gap-3">
                  <FaFacebook />
                  Global Service MAV
                </a>
              </li>
              <li>
                <a href="hgh" className="flex items-center gap-3">
                  <FaGoogle />
                  globalservicemav@gmail.com
                </a>
              </li>
              <li>
                <a href="hjd" className="flex items-center gap-3">
                  <FaPhone />
                  +237 697 569 904
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[250px]">
            <h1 className="text-2xl pb-5 ">About us</h1>
            We are a group of well trainned engineers,That aims at save guarding
            your interest by providing you with quality service at affortable
            prices
          </div>
          <div className="w-[250px]">
            <h1 className="text-2xl pb-5">Location</h1>
            <img src={pic} alt="pic" className="h-56 w-64" />
          </div>
        </div>
        <Divider color='gray' sx={{  margin: "20px" }} />
        <p className="text-center text-gray-300">
          copyright reserved Global service MAV 2019
        </p>
      </Box>
    </div>
  );
};

export default Footer;
