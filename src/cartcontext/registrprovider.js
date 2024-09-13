import React, { createContext, useEffect, useState } from "react";

const SignContext = createContext(null);

const SignProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("userDetails");
        return savedUser ? JSON.parse(savedUser) : [];
    });

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        localStorage.setItem("userDetails", JSON.stringify(user));
    }, [user]);

    const signUpUser = (newUser) => {
        const userExists = user.some(
            (existingUser) => existingUser.email === newUser.email
        );

        if (!userExists) {
            setUser((prevUser) => [...prevUser, newUser]);
            setCurrentUser(newUser);
        } else {
            alert("User already exists.");
        }
    };

    const signInUser = (email, password) => {
        const savedUsers = localStorage.getItem("userDetails");
        const users = savedUsers ? JSON.parse(savedUsers) : [];

        const foundUser = users.find(
            (existingUser) =>
                existingUser.email === email && existingUser.password === password
        );

        if (foundUser) {
            setCurrentUser(foundUser);
            return true;
        } else {
            alert("Invalid email or password.");
            return false;
        }
    };

    return (
        <SignContext.Provider
            value={{
                signUpUser,
                signInUser,
                currentUser,
            }}
        >
            {children}
        </SignContext.Provider>
    );
};

export { SignContext, SignProvider };
