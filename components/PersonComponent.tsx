import React, { FC } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { fetchPerson } from "../pages/person";
import { IPerson } from "../ts/interfaces/IPerson";

const PersonComponent: FC = () => {
  const { data }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error>(
    "person",
    fetchPerson
  );
  return (
    <div>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
    </div>
  );
};

export default PersonComponent;
