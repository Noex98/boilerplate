import React from "react";
import { useUserContext } from "../../context";

export const Profile = () => {
    const [user] = useUserContext();

    console.log(user);

    return <div>Profile</div>;
};
