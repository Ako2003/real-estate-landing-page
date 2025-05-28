import Image from "next/image";

export default function CEO() {
    return (
        <section className="bg-yellow">
            <div className="max-w-7xl mx-auto py-20 flex justify-between items-center">
                <div>
                    <Image src={"/images/yuvalna_portrait_photography_mid_shot_of_a_woman_that_is_50_yea_9586c9a1-5465-4fe3-b3b9-0c.jpg"} width={461} height={550} alt="Raya Hayek" />
                </div>
                <div className="max-w-md">
                    <h6 className="mb-1">The Architect</h6>
                    <h3 className="mb-1">Raya Hayek</h3>
                    <h6 className="mb-5">Award winning architect and designer proudly presents her first residential project in town</h6>
                    <p className="font-madefor-display mb-5">I{"'"}m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <Image src={"/svg/signature.svg"} alt={"Raya Hayek's signature"} width={211} height={87}/>
                </div>
            </div>
        </section>
    )
}