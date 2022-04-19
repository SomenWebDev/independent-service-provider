import React from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { nameId } = useParams();
  return (
    <div>
      <h1>{nameId} </h1>
    </div>
  );
};

export default CheckOut;
