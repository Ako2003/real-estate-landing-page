import Link from "next/link";
import Button from "@/components/Button";
import SocialMedia from "@/components/SocialMedia";

const menu = [
    { title: "About", slug: "about" },
    { title: "The Building", slug: "the-building" },
    { title: "Location", slug: "location" },
    { title: "Amenities", slug: "amenities" },
]

export default function Nav() {
    return(
        <section className="flex items-center h-[70px] w-full bg-pink">
            <div className="container flex items-center justify-between">
                {/* Menu */}
                <ul className="flex gap-5 font-light">
                    {menu.map((item) => (
                        <li key={item.title}>
                            <Link href={`#${item.slug}`} passHref>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/*  Logo  */}
                <h5 className="font-libre-baskerville font-bold">LP/52</h5>

                {/* Button and Social Media */}
                <div className="flex items-center gap-x-5">
                    <Button bgColor="#3e2b24" textColor="#c5b593" borderColor="#3e2b24">Inquire</Button>
                    <SocialMedia socialMedia={["instagram", "youtube", "facebook"]} />
                </div>
            </div>
        </section>
    )
}