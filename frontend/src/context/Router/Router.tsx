import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, Signup, Profile } from "../../pages";
import { useUserContext } from "../UserContext/UserContext";

export const Router = () => {
    const [user] = useUserContext();

    return (
        <BrowserRouter>
            {!user && (
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/*" element={<Navigate to={"/login"} />} />
                </Routes>
            )}

            {user && (
                <Routes>
                    <Route path="/" element={<Profile />} />
                </Routes>
            )}
        </BrowserRouter>
    );
};
