import Image from "next/image";
import Button from "@/components/Button";

export default function Ocean() {
    return(
        <section className="bg-[#645941]">
            <div className="container">
                {/* Images */}
                <div className="pt-20 mb-10">
                    <div className="flex mx-auto gap-x-20">
                        <div className="w-full">
                            <Image
                                src={"/images/c837a6_ba96a404cf3349b2bf9c98aee7e510fd~mv2.jpg"}
                                alt={"Room with Lamp"} width={440} height={720}
                                className="w-full h-[720px] object-cover object-center"/>
                        </div>
                        <div className="w-full">
                            <Image src={"/images/c837a6_985cf8523ccb48358adf849b8f2f9923~mv2.jpg"}
                                   alt={"Room with Bed"} width={440}
                                   height={720} className="w-full h-[720px] object-cover object-center"/>
                        </div>
                    </div>
                </div>

                <div className="pb-20 flex justify-between">
                    <h3 className="italic !text-pink">Ocean Apt.</h3>
                    <p className="font-madefor-display max-w-2xs !text-pink">
                        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex gap-x-3">
                            <Image src={"/svg/floor/white.svg"} width={20} height={20} alt={"White Floor Icon"}/>
                            <span className="!text-pink">Floors: 3-15</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/space/white.svg"} width={20} height={20} alt={"White Space Icon"}/>
                            <span className="!text-pink">Space: 120 Sqm</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/bedroom/white.svg"} width={20} height={20} alt={"White Bedroom Icon"}/>
                            <span className="!text-pink">Bedrooms: 3</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/bathroom/white.svg"} width={20} height={20} alt={"White Bathroom Icon"}/>
                            <span className="!text-pink">Bathrooms: 1-2</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Button bgColor="#fff" textColor="#645941" borderColor="#fff">
                            Check Availability
                        </Button>
                        <Button bgColor="#c5b593" textColor="#3e2b24" borderColor="#3e2b24">
                            View floor plan
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}