"use client";

import "../globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Login() {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);

    useEffect(() => {
        if (userData.username.length < 6) {
            setUsername(true);
        } else {
            setUsername(false);
        }
    }, [userData.username]);

    useEffect(() => {
        if (userData.password.length < 6) {
            setPassword(true);
        } else {
            setPassword(false);
        }
    }, [userData.password]);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const dataForm = {
            username: userData.username,
            password: userData.password,
        };
        if (dataForm.username && dataForm.password) {
            try {
                const response = await axios.post(
                    "http://localhost:3000/api/getall",
                    dataForm
                );
                console.log(response.data);

                if (response.status === 200) {
                    alert("Successful");
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Username and Password is Require!!!");
        }
    };

    return (
        <>
            <div className="max-h-lvh h-lvh flex flex-1 flex-col gap-10 justify-center items-center">
                <div className="text-5xl font-semibold">LOGIN PAGE</div>
                <form onSubmit={handleSubmit}>
                    <div className="container max-h-96 max-w-96 h-full w-full bg-violet-300 p-5 rounded-md shadow-lg relative">
                        <div className="font-semibold text-2xl text-center">
                            Login
                        </div>

                        <div className="mt-1 font-semibold">Username </div>
                        <div>
                            <input
                                type="text"
                                placeholder="example : test"
                                className="input w-full mt-2 bg-violet-300"
                                name="username"
                                value={userData.username}
                                onChange={handleChange}
                            />
                            <hr />
                        </div>
                        {username ? (
                            <div className="text-red-500">
                                username must be 6 character
                            </div>
                        ) : null}
                        <div className="mt-1 font-semibold">Password </div>

                        <div>
                            <input
                                type="text"
                                className="input w-full mt-2 bg-violet-300"
                                placeholder="6-10 characters"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                            />
                            <hr />
                        </div>
                        {password ? (
                            <div className="text-red-500">
                                password must be 6 character
                            </div>
                        ) : null}
                        <div className="text-center">
                            <button
                                className="btn btn-primary mt-5 mb-3"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </div>

                        <Link href="/">
                            <span className="absolute left-1 bottom-1 text-sm">
                                Back to Home
                            </span>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
