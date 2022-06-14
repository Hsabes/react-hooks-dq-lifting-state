import React from "react";
import UserCard from "./UserCard";

function UserList({ users, setDisplayedUser }) {

  return (
    <div className="ui cards">
      {users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={() => setDisplayedUser(user)}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
  
