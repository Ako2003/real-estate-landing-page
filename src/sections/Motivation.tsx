"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Motivation() {
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });
    return (
        <section>
            <div className="mx-auto max-w-4xl w-11/12 py-30">
                <motion.div
                    ref={ref1}
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView1 ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.2,
                    }} className="flex justify-start">
                    <Image src={"/images/pexels-hiraldo-photos-1238187226-23124396 copy.jpg"} width={180} height={220}
                           alt={"Girl on the beach"}/>
                </motion.div>
                <h3 className="my-20 max-lg:text-center">
                    “Immerse yourself in the seamless fusion of <i className="font-libre-baskerville">timeless
                    architecture</i> and <i className="font-libre-baskerville">modern design</i>, where each home tells
                    a story of its own”
                </h3>
                <motion.div
                    ref={ref2}
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView2 ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.2,
                    }}className="flex justify-end">
                    <Image src={"/images/yuvalna_photograph_building_that_is_close_to_the_beace__the_a_c5aa863f-6b7e-48d1-a8f3-1e8f.jpg"} width={280} height={220} alt={"Balcony"} className="max-lg:w-[144px] max-lg:h-[149px]"/>
                </motion.div>
            </div>
        </section>
    )
}