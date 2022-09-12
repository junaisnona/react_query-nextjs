import React, { FC } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { IPerson } from "../../ts/interfaces/IPerson";

export const fetchPerson = async (): Promise<IPerson> => {
  const res = await fetch("/api/person");

  if (res.ok) {
    return res.json();
  }

  throw new Error("Network response not Ok");
};

const PersonPage: FC = () => {
  const {
    isLoading,
    isError,
    isFetching,
    error,
    data,
  }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error>(
    "person",
    fetchPerson,
    // {
    // select: (person) => person.name, // We can return purticular values from the api,

    // staleTime: 5 * 1000,
    // },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  );
};

export default PersonPage;
