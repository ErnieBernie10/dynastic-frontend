import React from "react";
import { useParams } from "react-router-dom";
import { useDynasty } from "../../../api/dynasty";
import DynastyDashboard from "./DynastyDashboard";

const DynastyContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useDynasty(id);
  if (data) {
    return <DynastyDashboard dynasty={data} id={id} />;
  }
  return <div>Problem loading page</div>;
};

export default DynastyContainer;
