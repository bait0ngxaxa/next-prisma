"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Register() {
    const [firstname, setFirstname] = useState(false);
    const [lastname, setLastname] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [regdata, setRegdata] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
    });

    const formChange = (event: any) => {
        const { name, value } = event.target;
        setRegdata({
            ...regdata,
            [name]: value,
        });
    };

    const submitSignup = (event: any) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (regdata.username.length < 6) {
            setUsername(true);
        } else {
            setUsername(false);
        }
    }, [regdata.username]);
    useEffect(() => {
        if (regdata.password.length < 6) {
            setPassword(true);
        } else {
            setPassword(false);
        }
    }, [regdata.password]);

    return (
        <>
            <div className="max-h-lvh h-lvh flex flex-1 flex-col gap-10 justify-center items-center">
                <div className="text-5xl font-semibold">REGISTER PAGE</div>
                <form onSubmit={submitSignup}>
                    <div className="container max-h-full max-w-full h-full w-full bg-violet-300 p-5 rounded-md shadow-xl">
                        <div className="font-semibold text-2xl text-center">
                            Register
                            <hr />
                        </div>

                        <div className="mt-1 font-semibold">Firstname </div>
                        <div>
                            <input
                                type="text"
                                placeholder="example : testfirstname"
                                className="input w-full mt-2 bg-violet-300"
                                name="firstname"
                                value={regdata.firstname}
                                onChange={formChange}
                            />
                            <hr />
                        </div>

                        <div className="mt-1 font-semibold">lastname</div>

                        <div>
                            <input
                                type="text"
                                className="input w-full mt-2 bg-violet-300"
                                placeholder="example : testlastname"
                                name="lastname"
                                value={regdata.lastname}
                                onChange={formChange}
                            />
                            <hr />
                        </div>

                        <div className="mt-1 font-semibold">username</div>

                        <div>
                            <input
                                type="text"
                                className="input w-full mt-2 bg-violet-300"
                                placeholder="6 characters more"
                                name="username"
                                value={regdata.username}
                                onChange={formChange}
                            />
                            <hr />
                        </div>
                        {username ? (
                            <div className="text-red-500">
                                username must be 6 character
                            </div>
                        ) : null}
                        <div className="mt-1 font-semibold">Password</div>

                        <div>
                            <input
                                type="text"
                                className="input w-full mt-2 bg-violet-300"
                                placeholder="6 characters more"
                                name="password"
                                value={regdata.password}
                                onChange={formChange}
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
                                className="btn btn-primary mt-5 "
                                type="submit"
                            >
                                Sign up
                            </button>
                            <Link href={"/login"}>
                                <button
                                    className="btn btn-ghost mt-5 ml-8"
                                    type="submit"
                                >
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
