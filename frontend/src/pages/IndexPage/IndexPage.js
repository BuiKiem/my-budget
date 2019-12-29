import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { AccountList } from "../../components/accounts/AccountList/AccountList";
import useAxios from "axios-hooks";

export const IndexPage = () => {
  const [{ data, loading, error }] = useAxios({
    url: "http://localhost:8000/api/accounts/"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <Layout>
      <AccountList data={data} />
    </Layout>
  );
};
