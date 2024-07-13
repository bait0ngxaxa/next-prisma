import "./globals.css";
import Link from "next/link";
import me from "../public/me.jpg";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
            <div className="container w-3/4 max-w-full max-h-full h-full flex flex-col gap-5 justify-center items-center mx-auto mt-20">
                <div className="text-6xl slidel">Hi,THERE</div>
                <div className="text-6xl slider">
                    This is My Portfolio Website
                </div>

                <div className="container max-h-full max-w-full w-full flex gap-8 shadow-xl p-7 justify-between rounded-md">
                    <div className="mx-auto shadow-md max-w-96 w-full slidel">
                        <Image src={me} alt="my-pic" width={400} height={400} />
                    </div>
                    <div className="max-w-full w-full text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid est impedit iusto vitae enim illo earum dolor
                        magni, praesentium sit laudantium nihil quisquam
                        reiciendis, doloremque voluptate necessitatibus ea eos
                        ab. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Eligendi reiciendis accusamus alias ipsam
                        provident ipsa, fuga laudantium dignissimos. Nihil ut
                        maiores temporibus, atque sed quaerat maxime facilis
                        veniam culpa cum? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aliquid est impedit iusto vitae enim
                        illo earum dolor magni, praesentium sit laudantium nihil
                        quisquam reiciendis, doloremque voluptate necessitatibus
                        ea eos ab. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eligendi reiciendis accusamus alias
                        ipsam provident ipsa, fuga laudantium dignissimos. Nihil
                        ut maiores temporibus, atque sed quaerat maxime facilis
                        veniam culpa cum?
                    </div>
                </div>
                <Link href={"/profile"}>
                    <button className="btn btn-primary mx-auto ">
                        Get Start
                    </button>
                </Link>
            </div>
        </>
    );
}
