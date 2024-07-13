"use client";

import "../globals.css";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const dataForm = {
            username,
            password,
        };
        if (dataForm.username && dataForm.password) {
            try {
                const response = await axios.post(
                    "http://localhost:3000/api/authen",
                    dataForm
                );
                console.log(response);

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
                    <div className="container max-h-96 max-w-96 h-full w-full bg-zinc-200 p-5 rounded-md shadow-lg relative">
                        <div className="font-semibold text-2xl text-center">
                            Login
                        </div>

                        <div className="mt-1 font-semibold">Username </div>
                        <div>
                            <input
                                type="text"
                                placeholder="example : test"
                                className="input w-full mt-2 bg-zinc-200"
                                name="username"
                                value={username}
                                onChange={(event)=>{setUsername(event.target.value)}}
                            />
                            <hr className="border-white" />
                        </div>

                        <div className="mt-1 font-semibold">Password </div>

                        <div>
                            <input
                                type="text"
                                className="input w-full mt-2 bg-zinc-200"
                                placeholder="6-10 characters"
                                name="password"
                                value={password}
                                onChange={(event)=>{setPassword(event.target.value)}}
                            />
                            <hr className="border-white" />
                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-primary mt-5 mb-10"
                                type="submit"
                            >
                                Sign in
                            </button>
                            <Link href={"/register"}>
                                <button
                                    className="btn btn-ghost mt-5 mb-3 ml-7"
                                    type="submit"
                                >
                                    No id, Sign up
                                </button>
                            </Link>
                        </div>

                        <Link href="/">
                            <span className="absolute left-1 bottom-1 text-sm hover:bg-violet-400">
                                <ArrowBackIcon /> Back to Home
                            </span>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
