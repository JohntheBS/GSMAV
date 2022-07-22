import { Box, Button, Card, Image, Text } from "@mantine/core";
import React from "react";
import pic1 from "../Images/download.jpg";
import pic2 from "../Images/images (1).jpg";
import pic3 from "../Images/images.jpg";

const Teams = () => {
  return (
    <div>
      <Box component="body" className="p-10">
        <h1 className="font-extrabold text-3xl text-center pb-10 text-orange-500">
          Our Team
        </h1>
        <div className="flex justify-around gap-10 flex-wrap">
          <Card
            shadow="sm"
            p="xl"
            component="a"
            target="_blank"
            className="hover:scale-110 transition w-[250px]"
          >
            <Card.Section>
              <Image src={pic1} height={160} alt="No way!" />
            </Card.Section>

            <Text weight={500} size="lg" className="text-orange-500 py-3">
              John Doew
            </Text>

            <Text size="sm">
              Proffessional skill civil engineer specialized in house
              construction and Libalities purchase
            </Text>
            <Button
              variant="outline"
              color={"orange"}
              className="my-2 capitalize"
            >
              Contact him
            </Button>
          </Card>
          <Card
            shadow="sm"
            p="xl"
            component="a"
            target="_blank"
            className="hover:scale-110 transition w-[250px]"
          >
            <Card.Section>
              <Image src={pic2} height={160} alt="No way!" />
            </Card.Section>

            <Text weight={500} size="lg" className="text-orange-500 py-3">
              Paul Picker
            </Text>

            <Text size="sm">
              Proffessional skill civil engineer specialized in house
              construction and Libalities purchase
            </Text>
            <Button
              variant="outline"
              color={"orange"}
              className="my-2 capitalize"
            >
              Contact him
            </Button>
          </Card>
          <Card
            shadow="sm"
            p="xl"
            component="a"
            target="_blank"
            className="hover:scale-110 transition w-[250px]"
          >
            <Card.Section>
              <Image src={pic3} height={160} alt="No way!" />
            </Card.Section>

            <Text weight={500} size="lg" className="text-orange-500 py-3">
              Andrew Marsden
            </Text>

            <Text size="sm">
              Proffessional skill civil engineer specialized in house
              construction and Libalities purchase
            </Text>
            <Button
              variant="outline"
              color={"orange"}
              className="my-2 capitalize"
            >
              Contact him
            </Button>
          </Card>
        </div>
      </Box>
    </div>
  );
};

export default Teams;
