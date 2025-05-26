import Image from "next/image";
import Button from "@/components/Button";

export default function Sky() {
    return(
        <section className="bg-brown">
            <div className="container">
                {/* Images */}
                <div className="pt-20 mb-10">
                    <div className="flex mx-auto gap-x-20">
                        <div className="w-full">
                            <Image
                                src={"/images/c837a6_b71e08bb5f4842229b68056de18675d0~mv2.jpg"}
                                alt={"Room with sofa"} width={440} height={720}
                                className="w-full h-[720px] object-cover object-center"/>
                        </div>
                        <div className="w-full">
                            <Image src={"/images/c837a6_c358e5c675c4402ba31877a5537a47aa~mv2.jpg"}
                                   alt={"Office view"} width={440}
                                   height={720} className="w-full h-[720px] object-cover object-center"/>
                        </div>
                    </div>
                </div>

                <div className="pb-20 flex justify-between">
                    <h3 className="italic !text-yellow">Sky Apt.</h3>
                    <p className="font-madefor-display max-w-2xs !text-yellow">
                        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex gap-x-3">
                            <Image src={"/svg/floor/yellow.svg"} width={20} height={20} alt={"Yellow Floor Icon"}/>
                            <span className="!text-yellow">Floors: 1-2</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/space/yellow.svg"} width={20} height={20} alt={"Yellow Space Icon"}/>
                            <span className="!text-yellow">Space: 150 Sqm</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/bedroom/yellow.svg"} width={20} height={20} alt={"Yellow Bedroom Icon"}/>
                            <span className="!text-yellow">Bedrooms: 2</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/bathroom/yellow.svg"} width={20} height={20} alt={"Yellow Bathroom Icon"}/>
                            <span className="!text-yellow">Bathrooms: 1-2</span>
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