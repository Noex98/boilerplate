import { useContext } from "react";

export const createNotNullUseContext =
    <Type>(context: React.Context<Type>) =>
    () => {
        const currentContext = useContext(context);

        if (!currentContext) {
            throw new Error(
                "Error: Attempting to use context outside the respective context provider"
            );
        }

        return currentContext;
    };
