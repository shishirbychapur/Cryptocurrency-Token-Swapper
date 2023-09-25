import { Card, CardHeader, Heading } from "@chakra-ui/react";

import From from "./From";
import React from "react";
import To from "./To";

export default function Exchange() {
  return (
    <Card className="bg-card text-center flex flex-col justify-center pb-4" size="lg" backgroundColor="#006b8b">
      <CardHeader>
        <Heading size="md" color="white">Coin Swap</Heading>
      </CardHeader>
        <From />
        <To />
    </Card>
  );
}