import { useGetEventQuery } from "@/ui/state/features/events";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Event = () => {
  const { id } = useParams();
  // console.log("Id ===>", typeof id);
  const eId = Number(id);
  const { data, isLoading, error } = useGetEventQuery(eId, { skip: !id });
  return (
    <div>
      <div className="">Hello from events</div>
    </div>
  );
};
