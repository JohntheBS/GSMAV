import {
  Box,
  Button,
  Container,
  Input,
  MantineProvider,
  Textarea,
} from "@mantine/core";
import React from "react";

const Contact = () => {
  return (
    <MantineProvider>
      <Box className="text-white bg-sky-600 p-10 md:p-24">
        <Container>
          <h1 className="text-3xl text-center pb-5 font-bold">Contact Us</h1>
          <Box component="form" className="grid gap-5">
            <div className="flex justify-between gap-5">
              <Input className="w-full" placeholder="First Name" />
              <Input className="w-full" placeholder="Last Name" />
            </div>
            <Input placeholder="Email" type="email" required />
            <Textarea minRows={4} />
            <Button  type="submit" color={"orange"} className="bg-orange-500 mx-auto">Send</Button>
          </Box>
        </Container>
      </Box>
    </MantineProvider>
  );
};

export default Contact;
