import React, { useState } from "react";
import { createContext } from "react";
import { IUser } from "../../types";
import { createNotNullUseContext } from "../../util/createUseContext";

type IUserContext = [
    IUser | null,
    React.Dispatch<React.SetStateAction<IUser | null>>
];

const userContext = createContext<IUserContext | null>(null);

interface Props {
    children: React.ReactNode;
}

export const UserContext = ({ children }: Props) => {
    const currentUserContext = useState<IUser | null>(null);

    return (
        <userContext.Provider value={currentUserContext}>
            {children}
        </userContext.Provider>
    );
};

export const useUserContext = createNotNullUseContext(userContext);
