//import "./App.css";
import React from "react";

import Painting from "./components/social-profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friend-list/Friend-list";
import TransactionHistory from "./components/transaction-history/Transactions-history";

import user from "./components/social-profile/user.json";
import data from "./components/statistics/data.json";
import friends from "./components/friend-list/friends.json";
import transactions from "./components/transaction-history/transactions.json";

const App = () => {
  return (
    <div>
      <Painting
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
