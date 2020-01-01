import React from "react";
import { Account } from "../../components/accounts/Account/Account";
import useAxios from "axios-hooks";

export const AccountsPage = () => {
  const [{ data, loading, error }] = useAxios({
    url: "http://localhost:8000/api/accounts/"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      {data.map(account => (
        <Account key={account.id} variant="outlined" account={account} />
      ))}
    </div>
  );
};
