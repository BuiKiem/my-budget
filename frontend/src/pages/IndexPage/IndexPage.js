import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { AccountList } from "../../components/accounts/AccountList/AccountList";

export const IndexPage = () => {
  return (
    <Layout>
      <AccountList />
    </Layout>
  );
};
