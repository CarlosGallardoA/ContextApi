import React, { useEffect, useContext } from "react";
import UserContext from "../../context/User/UserContext";

function UserList() {
  const { users, getUsers, getProfile } = useContext(UserContext);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="list-group h-100">
      {users.length
        ? users.map((user) => (
            <a
              key={user.id}
              href="#!"
              onClick={() => getProfile(user.id)}
              className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
            >
              <img
                src={user.avatar}
                alt=""
                className="img-fluid mr-4 rounded-circle"
                width="70"
              />
              <p>{user.first_name + " " + user.last_name}</p>
            </a>
          ))
        : null}
    </div>
  );
}

export default UserList;
