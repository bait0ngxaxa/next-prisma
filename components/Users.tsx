"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { users } from "@/app/userslist/page";
import { useEffect, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function Users({ listUsers }: { listUsers: users[] }) {
    const router = useRouter();
    const [listUser, setListUser] = useState(listUsers);

    const handleEdit = (event: any) => {
        const id = parseInt(event.target.id);
        router.push(`http://localhost:3000/userslist/edit/${id}`);
    };

    const handleDelete = async (event: any) => {
        const id = parseInt(event.target.id);
        try {
            const response = await axios.delete(
                `http://localhost:3000/api/getall/${id}`
            );
            if (response.status === 200) {
                alert("Delete Successful");
                fetchApi();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchApi = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/getall/"
            );
            if (response.status === 200) {
                setListUser(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <>
            <div className="text-center text-5xl mt-20 font-semibold">
                List Users
            </div>
            <div className="overflow-x-auto shadow-lg mt-5">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>firstName</th>
                            <th>Lastname</th>
                            <th>username</th>
                            <th>password</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {listUser.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    <td>{item.createdAt}</td>
                                    <td>
                                        <button
                                            className="btn btn-ghost"
                                            id={String(item.id)}
                                            onClick={handleEdit}
                                        >
                                            <EditOutlinedIcon
                                                id={String(item.id)}
                                            />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-ghost"
                                            id={String(item.id)}
                                            onClick={handleDelete}
                                        >
                                            <DeleteOutlineOutlinedIcon
                                                id={String(item.id)}
                                            />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
