"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Editusers({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const router = useRouter();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitEdit = async (event: React.FormEvent) => {
        event.preventDefault();
        const dataComplete = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
        };
        if (!firstname || !lastname || !username || !password) {
            alert("Require Input");
        } else {
            try {
                const response = await axios.put(
                    `http://localhost:3000/api/getall/${id}`,
                    dataComplete
                );
                if (response.status === 200) {
                    alert("Edit Successful");
                    router.push("/userslist");
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/getall/${id}`);
            setFirstname(response.data.firstname);
            setLastname(response.data.lastname);
            setUsername(response.data.username);
            setPassword(response.data.password);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="max-h-lvh h-lvh flex flex-1 flex-col gap-10 justify-center items-center">
                <div className="text-5xl font-semibold">EDIT ID {id}</div>
                <form onSubmit={submitEdit}>
                    <div className="container max-h-full max-w-full h-full w-full bg-zinc-200 p-5 rounded-md shadow-xl">
                        <div className="font-semibold text-2xl text-center">
                            Edit
                            <hr />
                        </div>

                        <div className="mt-1 font-semibold">Firstname </div>
                        <div>
                            <input
                                type="text"
                                placeholder="example : testfirstname"
                                className="input w-full mt-2 bg-zinc-200"
                                name="firstname"
                                value={firstname}
                                onChange={(event) =>
                                    setFirstname(event.target.value)
                                }
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
                                value={lastname}
                                onChange={(event) =>
                                    setLastname(event.target.value)
                                }
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
                                value={username}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
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
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                            <hr className="border-white" />
                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-primary mt-5 "
                                type="submit"
                            >
                                Edit
                            </button>
                            <Link href={"/userslist"}>
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
