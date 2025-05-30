"use client"
import Image from "next/image";
import Button from "@/components/Button";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

export default function Sky() {
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });
    return(
        <section className="bg-brown">
            <div className="container">
                {/* Images */}
                <div className="pt-20 mb-10">
                    <div className="flex max-lg:flex-col mx-auto gap-x-20">
                        <motion.div
                            ref={ref1}
                            initial={{ y: -100, opacity: 0 }}
                            animate={isInView1 ? { y: 0, opacity: 1 } : {}}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.2,
                            }} className="w-full max-lg:mb-10">
                            <Image
                                src={"/images/c837a6_b71e08bb5f4842229b68056de18675d0~mv2.jpg"}
                                alt={"Room with sofa"} width={440} height={720}
                                className="w-full h-[720px] object-cover object-center"/>
                        </motion.div>
                        <motion.div ref={ref2}
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={isInView2 ? { y: 0, opacity: 1 } : {}}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 0.2,
                                    }} className="w-full">
                            <Image src={"/images/c837a6_c358e5c675c4402ba31877a5537a47aa~mv2.jpg"}
                                   alt={"Office view"} width={440}
                                   height={720} className="w-full h-[720px] object-cover object-center"/>
                        </motion.div>
                    </div>
                </div>

                <div className="pb-20 flex max-lg:flex-col gap-y-5 justify-between">
                    <h3 className="italic !text-yellow">Sky Apt.</h3>
                    <p className="font-madefor-display max-w-2xs !text-yellow">
                        I{"'"}m a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex gap-x-3">
                            <Image src={"/svg/floor/yellow.svg"} width={20} height={20} alt={"Yellow Floor Icon"} className="object-cover object-center"/>
                            <span className="!text-yellow font-madefor-display">Floors: 1-2</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/space/yellow.svg"} width={20} height={20} alt={"Yellow Space Icon"}/>
                            <span className="!text-yellow font-madefor-display">Space: 150 Sqm</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/bedroom/yellow.svg"} width={20} height={20} alt={"Yellow Bedroom Icon"}/>
                            <span className="!text-yellow font-madefor-display">Bedrooms: 2</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/bathroom/yellow.svg"} width={20} height={20} alt={"Yellow Bathroom Icon"}/>
                            <span className="!text-yellow font-madefor-display">Bathrooms: 1-2</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Button bgColor="#c5b593" textColor="#3e2b24" borderColor="#c5b593">
                            Check Availability
                        </Button>
                        <Button bgColor="#3e2b24" textColor="#c5b593" borderColor="#c5b593">
                            View floor plan
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}