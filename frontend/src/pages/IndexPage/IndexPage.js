import React from "react";
import { AccountList } from "../../components/accounts/AccountList/AccountList";

export const IndexPage = ({ data }) => {
  return <AccountList data={data} />;
};
