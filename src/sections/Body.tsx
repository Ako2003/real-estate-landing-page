"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Body(){
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });

    return(
        <section className="container" id="about">
            <div className="pt-20 max-w-4xl mx-auto">
                <h6 className="mb-5">A Different State of Mind</h6>
                <h3>
                    Established in the historic quarter, where cultural legacy meets the <i
                    className="font-libre-baskerville"> sought-after culinary scene </i>, Brook St. is the best kept
                    secret of town, just across the sea front. Its urban renaissance is infusing new vibes and brings
                    back creatives, trend setters and <i className="font-libre-baskerville"> smart investors </i>.
                </h3>
            </div>

            {/* Images */}
            <div className="mt-20 max-w-5xl mx-auto pb-30">
                <div className="flex max-lg:flex-col lg:items-center justify-between">
                    <motion.div
                        ref={ref1}
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView1 ? { x: 0, opacity: 1 } : {}}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                        className="flex justify-start max-lg:mb-10">
                        <Image
                            src={"/images/yuvalna_photograph_of_a_Boardwalk_that_is_close_to_the_building_3273c742-f097-4ed5-a17e-82.jpg"}
                            alt={"Boardwalk near the building"} width={290} height={390} className="max-lg:w-[200px]"/>
                    </motion.div>
                    <motion.div
                        ref={ref2}
                        initial={{ x: 100, opacity: 0 }}
                        animate={isInView2 ? { x: 0, opacity: 1 } : {}}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                        className="flex justify-end">
                        <Image src={"/images/pexels-fernando-reyes-6600902 copy.jpg"} alt={"Beach"} width={209}
                               height={251}/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}