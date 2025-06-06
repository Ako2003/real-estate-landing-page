"use client"

import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import SocialMedia from "@/components/SocialMedia";
import {Menu, X} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";

const menu = [
    { title: "About", slug: "about" },
    { title: "The Building", slug: "building" },
    { title: "Location", slug: "location" },
    { title: "Amenities", slug: "amenities" },
];

export default function Nav() {
    const [showNav, setShowNav] = useState(true);
    const [toggle, setToggle] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
                // Scrolling down and past 50px - hide navbar
                setShowNav(false);
            } else {
                // Scrolling up - show navbar
                setShowNav(true);
            }

            lastScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className={`fixed top-0 w-full transition-transform duration-300 ease-in-out z-20 ${
                showNav ? "translate-y-0" : "lg:-translate-y-full"
            }`}
        >
            <div className="flex items-center h-[70px] w-full bg-pink">
                <div className="container flex items-center justify-between">
                    {/* Menu */}
                    <ul className="flex gap-5 font-light max-lg:hidden">
                        {menu.map((item) => (
                            <li key={item.title}>
                                <Link className="font-madefor-display" href={`/#${item.slug}`} passHref>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Logo */}
                    <Link href="/">
                        <h5 className="font-libre-baskerville font-bold">LP/52</h5>
                    </Link>

                    {/* Button and Social Media */}
                    <div className="flex items-center gap-x-5">
                        <Button bgColor="#3e2b24" textColor="#c5b593" borderColor="#3e2b24">
                            Inquire
                        </Button>
                        <SocialMedia socialMedia={["instagram", "youtube", "facebook"]} />
                        <AnimatePresence mode="wait" initial={false}>
                            <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
                                {
                                    toggle ? <X /> : <Menu />
                                }
                            </div>
                        </AnimatePresence>
                    </div>

                    {
                        toggle ? <Mobile setToggle={setToggle} /> : <></>
                    }

                </div>
            </div>
        </section>
    );
}

export function Mobile({ setToggle }: { setToggle: Dispatch<SetStateAction<boolean>> }) {
    return (
        <AnimatePresence>
            <motion.section
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute bg-pink h-[calc(100dvh-70px)] w-full left-0 top-[70px] z-30"
            >
                <ul className="flex flex-col justify-center items-center h-full gap-5 font-light">
                    {menu.map((item) => (
                        <li key={item.title} onClick={() => setToggle(false)}>
                            <Link className="font-madefor-display" href={`#${item.slug}`} passHref>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.section>
        </AnimatePresence>

    )
}