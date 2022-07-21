import React from "react";
import { useParams } from "react-router-dom";

const AdDetail = () => {
  const { id } = useParams();
  return <div className="text-light">{id}</div>;
};

export default AdDetail;
