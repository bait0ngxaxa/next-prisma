import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-xl fixed top-0 right-0 left-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link href={"/"}>
                                    <p>Homepage</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/profile"}>
                                    <p>Profile</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/userslist"}>
                                    <p>Portfolio</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/about"}>
                                    <p>About</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link href={"/"}>
                        <p className="btn btn-ghost text-xl">
                            WELCOME TO MY WEBSITE
                        </p>
                    </Link>
                </div>
                <div className="navbar-end">
                    <Link href={"/register"}>
                        <button className="btn btn-ghost">
                            <span className="font-semibold">SignUp</span>
                        </button>
                    </Link>
                    <Link href={"/login"}>
                        <button className="btn btn-ghost">
                            <span className="font-semibold">Login</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="h-9"></div>
        </>
    );
}
