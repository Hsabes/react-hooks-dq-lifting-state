import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [displayedUser, setDisplayedUser] = useState(users[0])

  console.log(displayedUser);

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} displayedUser={displayedUser}
          setDisplayedUser={setDisplayedUser} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={displayedUser} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;

// Users state is currently set to all of the objects in the users array
// We need to, on click, set the users state to the individual user being
//  clicked on

// separate state that, if true, sets the state of users to the individual
//  card being clicked