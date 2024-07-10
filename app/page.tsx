"use client";

import "./globals.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="container w-3/4 max-w-full h-lvh flex flex-col gap-5 justify-center items-center mx-auto">
            <div className="text-6xl slidel">Hi,HOMEPAGE</div>
                
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid est impedit iusto vitae enim illo earum dolor magni,
                    praesentium sit laudantium nihil quisquam reiciendis,
                    doloremque voluptate necessitatibus ea eos ab. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eligendi
                    reiciendis accusamus alias ipsam provident ipsa, fuga
                    laudantium dignissimos. Nihil ut maiores temporibus, atque
                    sed quaerat maxime facilis veniam culpa cum?
                </div>
                <Link href={"/login"}>
                    <button className="btn btn-primary mx-auto ">
                        Go to Login
                    </button>
                </Link>
            </div>
        </>
    );
}
