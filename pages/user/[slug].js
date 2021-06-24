import React from "react";
import { useRouter } from "next/router";

import User from "../../components/users/User";

const Profile = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <User username={slug} />;
};

export default Profile;
