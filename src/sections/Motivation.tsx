import Image from "next/image";

export default function Motivation() {
    return (
        <section>
            <div className="mx-auto max-w-4xl w-11/12 py-30">
                <div className="flex justify-start">
                    <Image src={"/images/pexels-hiraldo-photos-1238187226-23124396 copy.jpg"} width={180} height={220}
                           alt={"Girl on the beach"}/>
                </div>
                <h3 className="my-20 max-lg:text-center">
                    “Immerse yourself in the seamless fusion of <i className="font-libre-baskerville">timeless
                    architecture</i> and <i className="font-libre-baskerville">modern design</i>, where each home tells
                    a story of its own”
                </h3>
                <div className="flex justify-end">
                    <Image src={"/images/yuvalna_photograph_building_that_is_close_to_the_beace__the_a_c5aa863f-6b7e-48d1-a8f3-1e8f.jpg"} width={280} height={220} alt={"Balcony"} className="max-lg:w-[144px] max-lg:h-[149px]"/>
                </div>
            </div>
        </section>
    )
}