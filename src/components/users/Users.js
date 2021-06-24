import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 pt-4 pb-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:pt-6 sm:pb-24 xl:grid-cols-4">
            {users &&
              users.map((user) => (
                <UserItem key={user.id} user={user}></UserItem>
              ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Users;
