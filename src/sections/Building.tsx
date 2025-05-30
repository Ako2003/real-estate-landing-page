import Image from "next/image";
import Button from "@/components/Button";

export default function Building() {
    return(
        <section className="bg-yellow">
            <div className="container">
                <div className="pt-20 max-w-4xl mx-auto">
                    <h6 className="mb-5">A Different State of Mind</h6>
                    <h3>
                        At 18 stories and with its <i className="font-libre-baskerville"> unique design </i>, La Perla
                        is a <i className="font-libre-baskerville"> modernist
                        icon </i> in the city’s skyline.
                    </h3>
                </div>

                {/* Images */}
                <div className="pt-20 mb-10">
                    <div className="flex max-md:flex-col mx-auto gap-x-20">
                        <div className="w-full max-md:mb-10">
                            <Image
                                src={"/images/c837a6_7c1f9ec45bb847d59f6805065ad64852~mv2.jpg"}
                                alt={"Kitchen with sink"} width={440} height={720}
                                className="w-full h-[720px] object-cover object-center"/>
                        </div>
                        <div className="w-full">
                            <Image src={"/images/c837a6_8466b841f89349109f8ed9e27d4999a2~mv2.jpg"}
                                   alt={"Bathroom with bath"} width={440}
                                   height={720} className="w-full h-[720px] object-cover object-center"/>
                        </div>
                    </div>
                </div>

                <div className="pb-20 flex max-md:flex-col gap-y-5 justify-between">
                    <h3 className="italic">Gardenia Apt.</h3>
                    <p className="font-madefor-display max-w-2xs">
                        I{"'"}m a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex gap-x-3">
                            <Image src={"/svg/floor/brown.svg"} width={20} height={20} alt={"Brown Floor Icon"}/>
                            <span className="font-madefor-display">Floors: 1-2</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/space/brown.svg"} width={20} height={20} alt={"Brown Space Icon"}/>
                            <span className="font-madefor-display">Space: 150 Sqm</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/bedroom/brown.svg"} width={20} height={20} alt={"Brown Bedroom Icon"}/>
                            <span className="font-madefor-display">Bedrooms: 2</span>
                        </div>
                        <div className="flex gap-x-3">
                            <Image src={"/svg/bathroom/brown.svg"} width={20} height={20} alt={"Brown Bathroom Icon"}/>
                            <span className="font-madefor-display">Bathrooms: 1-2</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Button bgColor="#3e2b24" textColor="#c5b593" borderColor="#3e2b24">
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