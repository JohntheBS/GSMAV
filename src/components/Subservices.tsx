import { Box, Container, MantineProvider } from "@mantine/core";
import { IoConstructSharp } from "react-icons/io5";
import {BsBuilding} from "react-icons/bs"
import {FaShippingFast} from "react-icons/fa"
import React from "react";

const Subservices = () => {
  return (
    <MantineProvider>
      <Box component="body">
        <Container className="py-16">
          <h1 className="text-center text-3xl font-extrabold mb-4 text-orange-500">Main Services</h1>
          <div className="flex gap-5 flex-wrap items-center justify-center">
            <div className="w-[250px]">
              <IoConstructSharp className="h-8 w-8 text-center text-orange-500"/>
              <h2 className="font-extrabold text-orange-500">Repairs</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam recusandae id doloribus delectus. Aperiam, obcaecati.
                At sapiente, assumenda esse dolore doloremque iste iure
                distinctio. Nisi natus ad numquam odio esse.
              </p>
            </div>
            <div className="w-[250px]">
              <BsBuilding className="h-8 w-8 text-center text-orange-500 "/>
              <h2 className="font-extrabold text-orange-500">Installation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam recusandae id doloribus delectus. Aperiam, obcaecati.
                At sapiente, assumenda esse dolore doloremque iste iure
                distinctio. Nisi natus ad numquam odio esse.
              </p>
            </div>
            <div className="w-[250px]">

            <p><FaShippingFast className="h-8 w-8 text-center text-orange-500 "/></p>
              <h2 className="font-extrabold text-orange-500">Livraison</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam recusandae id doloribus delectus. Aperiam, obcaecati.
                At sapiente, assumenda esse dolore doloremque iste iure
                distinctio. Nisi natus ad numquam odio esse.
              </p>
            </div>
          </div>
        </Container>
      </Box>
    </MantineProvider>
  );
};

export default Subservices;
