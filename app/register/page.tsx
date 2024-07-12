"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();

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

    const submitSignup = async (event: any) => {
        event.preventDefault();
        const dataComplete = {
            firstname: regdata.firstname,
            lastname: regdata.lastname,
            username: regdata.username,
            password: regdata.password,
        };
        if (
            !regdata.firstname ||
            !regdata.lastname ||
            !regdata.username ||
            !regdata.password
        ) {
            alert("Require Input");
        } else {
            try {
                const response = await axios.post(
                    "http://localhost:3000/api/getalll",
                    dataComplete
                );
                if (response.status === 200) {
                    setRegdata(response.data);
                    alert("Create Successful");
                    router.push("/userslist");
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <div className="max-h-lvh h-lvh flex flex-1 flex-col gap-10 justify-center items-center">
                <div className="text-5xl font-semibold">REGISTER PAGE</div>
                <form onSubmit={submitSignup}>
                    <div className="container max-h-full max-w-full h-full w-full bg-zinc-200 p-5 rounded-md shadow-xl">
                        <div className="font-semibold text-2xl text-center">
                            Register
                            <hr />
                        </div>

                        <div className="mt-1 font-semibold">Firstname </div>
                        <div>
                            <input
                                type="text"
                                placeholder="example : testfirstname"
                                className="input w-full mt-2 bg-zinc-200"
                                name="firstname"
                                value={regdata.firstname}
                                onChange={formChange}
                            />
                            <hr className="border-white" />
                        </div>

                        <div className="mt-1 font-semibold">lastname</div>

                        <div>
                            <input
                                type="text"
                                className="input w-full mt-2 bg-zinc-200"
                                placeholder="example : testlastname"
                                name="lastname"
                                value={regdata.lastname}
                                onChange={formChange}
                            />
                            <hr className="border-white" />
                        </div>

                        <div className="mt-1 font-semibold">username</div>

                        <div>
                            <input
                                type="text"
                                className="input w-full mt-2 bg-zinc-200"
                                placeholder="6 characters more"
                                name="username"
                                value={regdata.username}
                                onChange={formChange}
                            />
                            <hr className="border-white" />
                        </div>

                        <div className="mt-1 font-semibold">Password</div>

                        <div>
                            <input
                                type="text"
                                className="input w-full mt-2 bg-zinc-200"
                                placeholder="6 characters more"
                                name="password"
                                value={regdata.password}
                                onChange={formChange}
                            />
                            <hr className="border-white" />
                        </div>

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
