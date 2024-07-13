"use server";

import Users from "@/components/Users";
import axios from "axios";

export interface users {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    createdAt: string;
}

export default async function Userslist() {
    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/getall"
            );
            if (response.status !== 200) {
                throw new Error("Unexpect Error");
            }
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const listUsers: users[] = await fetchData();

    return (
        <>
            <Users listUsers={listUsers} />
        </>
    );
}
