import React from "react";
import { useParams } from "react-router-dom";
import { useDynasty } from "../../api/dynasty";
import DynastyDashboard from "./DynastyDashboard";

const DynastyContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useDynasty(id);
  if (data && !isLoading) {
    return <DynastyDashboard dynasty={data} id={id} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default DynastyContainer;
