import React from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  Box,
  Container,
  Input,
  MantineProvider,
} from "@mantine/core";
import logo from "../Images/logo.png";
import { ImLocation } from "react-icons/im";
import { RiContactsBook2Fill } from "react-icons/ri";
import {BsSearch} from "react-icons/bs"

const Navbar = () => {
  return (
    <MantineProvider>
      <Box component="nav" className="top-0 z-40">
        <Box component="div" className="bg-white">
          <Container className="flex items-center justify-between">
            <Anchor component={Link} to="/">
              <img src={logo} alt="logo" className="h-16 w-16" />
            </Anchor>
            <Box component="div" className="gap-8 hidden sm:flex">
              <div className="flex items-center gap-1 text-sky-600">
                <ImLocation className="h-4 w-4 text-orange-500" />
                <span className="capitalize">
                  <div className="text-xs">
                    Yaounde,Derrier l'Hopital General
                  </div>
                </span>
              </div>
              <div className="flex items-center gap-1 text-sky-600">
                <RiContactsBook2Fill className="h-5 w-5 text-orange-500" />
                <span className="capitalize">
                  <div className="text-xs">+237 697 569 904/672 717 877</div>
                </span>
              </div>
            </Box>
          </Container>
        </Box>
        <Box component="div" className="bg-sky-600 text-white sticky">
          <Container className=" flex gap-10 items-center">
            <Link to="/" className="hover:scale-110 border-b-2 text-orange-500 border-orange-500 m-1 p-1 hover:text-orange-500 font-semibold transition">Home</Link>
            <Link to="services" className="hover:scale-110 hover:text-orange-500 m-0 p-1 font-semibold transition">Services</Link>
            <Link to="contact" className="hover:scale-110 hover:text-orange-500 m-0 p-1 font-semibold transition">Contact</Link>
            <Link to="about" className="hover:scale-110 hover:text-orange-500 m-0 p-1 font-semibold transition">About</Link>
            <div className="ml-auto base:hidden tablet:block">
              <Input icon={<BsSearch />} radius={20} placeholder="Search" />
            </div>
          </Container>
        </Box>
      </Box>
    </MantineProvider>
  );
};

export default Navbar;
