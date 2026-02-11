import React from "react";
import { userLists } from "./dataList";
import { Link } from "react-router";

const UserList = () => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userLists.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}/${user.name}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
