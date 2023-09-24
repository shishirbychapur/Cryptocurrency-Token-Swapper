import { Card, CardHeader, Heading, Text } from "@chakra-ui/react";

import From from "./From";
import React from "react";
import To from "./To";

export default function Exchange() {
  return (
    <Card className="text-center flex flex-col justify-center pb-4" size="lg">
      <CardHeader>
        <Heading size="md">Swap your cryptocurrency token!</Heading>
      </CardHeader>
      <From />
      <To />
    </Card>
  );
}