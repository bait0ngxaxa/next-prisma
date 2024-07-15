import "./globals.css";
import Link from "next/link";
import me from "../public/me.jpg";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";
import Cards from "@/components/Cards";
import project from "@/public/project.svg";
import page from "@/public/page-analysis.svg";
import port from "@/public/port-detection.svg";
import machine from "@/public/machine-vision.svg";
// import api from "@/public/api-interface.svg";
// import host from "@/public/host-record.svg";
interface card {
    title: string;
    description: string;
    source: StaticImageData;
}

export default function Home() {
    const cardDescrip = [
        {
            title: "Project",
            description: "This is my Project",
            source: project,
        },
        {
            title: "Skill",
            description: "This is my Skill",
            source: port,
        },
        {
            title: "SoftSkill",
            description: "This is my SoftSkill",
            source: page,
        },
        {
            title: "Expected",
            description: "This is my Expected",
            source: machine,
        },
    ];

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
            <section>
                <div className="container w-3/4 max-w-full max-h-full h-full flex flex-col gap-5 justify-center items-center mx-auto mt-20">
                    <div className="text-6xl slidel">Hi,THERE</div>
                    <div className="text-6xl slider">
                        This is My Portfolio Website
                    </div>

                    <div className="container max-h-full max-w-full w-full flex gap-8 shadow-xl p-7 justify-between rounded-md">
                        <div className="mx-auto shadow-md max-w-96 w-full slidel">
                            <Image
                                src={me}
                                alt="my-pic"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="max-w-full w-full text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid est impedit iusto vitae enim illo
                            earum dolor magni, praesentium sit laudantium nihil
                            quisquam reiciendis, doloremque voluptate
                            necessitatibus ea eos ab. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Eligendi reiciendis
                            accusamus alias ipsam provident ipsa, fuga
                            laudantium dignissimos. Nihil ut maiores temporibus,
                            atque sed quaerat maxime facilis veniam culpa cum?
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid est impedit iusto vitae enim illo
                            earum dolor magni, praesentium sit laudantium nihil
                            quisquam reiciendis, doloremque voluptate
                            necessitatibus ea eos ab. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Eligendi reiciendis
                            accusamus alias ipsam provident ipsa, fuga
                            laudantium dignissimos. Nihil ut maiores temporibus,
                            atque sed quaerat maxime facilis veniam culpa cum?
                        </div>
                    </div>
                    <Link href={"/profile"}>
                        <button className="btn btn-primary mx-auto ">
                            Get Start
                        </button>
                    </Link>
                </div>
            </section>
            {/* sect2 */}

            <section>
                <div className="container max-w-full w-full flex flex-1 flex-wrap justify-start gap-10 ml-36">
                    {cardDescrip.map((item: card, index) => {
                        return (
                            <Cards
                                key={index}
                                title={item.title}
                                desc={item.description}
                                src={item.source}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
}
