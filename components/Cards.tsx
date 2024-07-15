import Image, { StaticImageData } from "next/image";

export default function Cards({
    title,
    desc,
    src,
}: {
    title: string;
    desc: string;
    src: StaticImageData;
}) {
    return (
        <>
            <div className="">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <Image src={src} alt="project-icon" width={120}></Image>
                    </figure>
                    <div className="card-body items-center text-justify">
                        <h2 className="card-title">{title}</h2>
                        <p>{desc}</p>
                        <div className="card-actions w-full justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
