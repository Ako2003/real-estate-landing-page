"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CEO() {
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
                    }}>
                    <Image src={"/images/yuvalna_portrait_photography_mid_shot_of_a_woman_that_is_50_yea_9586c9a1-5465-4fe3-b3b9-0c.jpg"} width={461} height={550} alt="Raya Hayek" />
                </motion.div>
                <motion.div
                    ref={ref2}
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView2 ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.2,
                    }} className="max-w-md max-md:mt-10">
                    <h6 className="mb-1">The Architect</h6>
                    <h3 className="mb-1">Raya Hayek</h3>
                    <h6 className="mb-5">Award winning architect and designer proudly presents her first residential project in town</h6>
                    <p className="font-madefor-display mb-5">I{"'"}m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <Image src={"/svg/signature.svg"} alt={"Raya Hayek's signature"} width={211} height={87}/>
                </motion.div>
            </div>
        </section>
    )
}