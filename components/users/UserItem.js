import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const UserItem = ({ user: { login, avatar_url, html_url, type } }) => {
  return (
    <div className="flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex flex-col p-6 items-center">
        <img
          src={avatar_url}
          className="rounded-full w-32 h-32 bg-gray-900"
          alt=""
        />
        <h3 className="text-gray-900 text-lg font-medium mt-6">{login}</h3>
        <div className="mt-3">
          <span
            className={`px-2 py-1 text-xs font-medium user-${type.toLowerCase()} rounded-full`}
          >
            {type}
          </span>
        </div>
      </div>
      <div className="text-center">
        <Link href={`/user/${login}`}>
          <a className="text-gray-700 font-medium flex items-center justify-center py-3 text-center hover:text-gray-500">
            View Profile
          </a>
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
