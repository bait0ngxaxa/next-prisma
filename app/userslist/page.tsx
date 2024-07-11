"use client";

import axios from "axios";
import { useState, useEffect} from "react";
import { useRouter } from "next/navigation";

export default function Userslist() {
    interface users {
        id: number;
        firstname: string;
        lastname: string;
        username: string;
        password: string;
    }
    const router = useRouter();
    const [listUsers, setListUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("/api/getall");
            if (response.status === 200) {
                setListUsers(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (event: any) => {
        const id = parseInt(event.target.id);
        router.push(`/userslist/edit/${id}`);
    };

    const handleDelete = async (event:any)=>{
        const id = parseInt(event.target.id);
        try{
            const response = await axios.delete(`/api/getall/${id}`)
            if(response.status === 200){
                alert("Delete Successful")
                fetchData()
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
        <div className="text-center text-5xl mt-5 font-semibold">List Users</div>
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {listUsers.map((item: users) => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    <td>
                                        <button
                                            className="btn btn-ghost"
                                            id={String(item.id)}
                                            onClick={handleEdit}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-ghost"
                                            id={String(item.id)}
                                            onClick={handleDelete}
                                        >
                                            Delete
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
