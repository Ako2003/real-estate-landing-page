"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Developer() {
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });
    return (
        <section className="bg-yellow">
            <div className="max-w-7xl mx-auto w-11/12 py-20 flex max-md:flex-col gap-x-10 justify-between items-center">
                <motion.div
                    ref={ref1}
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView1 ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.2,
                    }} className="max-w-md max-md:mb-10">
                    <h6 className="mb-1">The Developer</h6>
                    <h3 className="mb-1">Mogendor Group</h3>
                    <h6 className="mb-5">With over 155 successful projects since 1989, Mogendor launches yet another
                        architectural gem</h6>
                    <p className="font-madefor-display mb-5">I{"'"}m a paragraph. Click here to add your own text and
                        edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make
                        changes to the font. I’m a great place for you to tell a story and let your users know a little
                        more about you.</p>
                </motion.div>
                <motion.div
                    ref={ref2}
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView2 ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.2,
                    }}>
                    <Image
                        src={"/images/yuvalna_photograph_of_FULL_three_high_buildings_that_is_part_of_b5145927-1d2c-4fc8-9fd9-6c.jpg"}
                        width={461} height={550} alt="Three high buildings"/>
                </motion.div>
            </div>
        </section>
    )
}