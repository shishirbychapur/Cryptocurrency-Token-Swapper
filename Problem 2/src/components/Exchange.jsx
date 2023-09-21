import From from "./From";
import React from "react";
import To from "./To";

export default function Exchange() {
  return (
    <div className="bg-white rounded-xl w-1/2 h-2/3 text-center flex flex-col justify-center">
      <p className="font-bold">Swap your cryptocurrency token!</p>
      <From />
      <To />
    </div>
  );
}