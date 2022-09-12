import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useQuery } from "react-query";
import PersonComponent from "../../components/PersonComponent";
import { IPerson } from "../../ts/interfaces/IPerson";

const getPersonById = async (
  id: string | string[] | undefined
): Promise<IPerson> => {
  if (typeof id === "string") {
    const res = await fetch(`/api/person/${id}`);

    if (res.ok) {
      return res.json();
    }

    throw new Error("error fetching person");
  }

  throw new Error("invalid ID");
};

const PersonPage: FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { isLoading, isError, error, data } = useQuery<IPerson, Error>(
    ["person", id],
    () => getPersonById(id),
    {
      enabled: !!id,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <Link href="/">Go Home</Link>
      <h3>{data?.id}</h3>
      <h3>{data?.name}</h3>
      <h3>{data?.age}</h3>
      <h1>Person Component</h1>
      <PersonComponent />
    </div>
  );
};

export default PersonPage;
