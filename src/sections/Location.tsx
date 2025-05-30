import Image from "next/image";

export default function Location() {
    return (
        <section className="bg-yellow" id="location">
            <div className="mx-auto max-w-4xl py-20">
                <h6 className="font-libre-baskerville text-center">Best Possible Location</h6>

                <div className="flex flex-wrap max-md:max-w-xs mx-auto text-center w-11/12 justify-between mt-10">
                    <div>
                        <h3 className="italic">02 Min.</h3>
                        <h6 className="font-libre-baskerville text-center">from the beach</h6>
                    </div>
                    <div>
                        <h3 className="italic">05 Min.</h3>
                        <h6 className="font-libre-baskerville text-center">from city hall</h6>
                    </div>
                    <div className="w-fit max-md:mx-auto max-md:mt-5">
                        <h3 className="italic">10 Min.</h3>
                        <h6 className="font-libre-baskerville text-center">from central station</h6>
                    </div>
                </div>


                <div className="flex justify-center mt-10">
                    <Image src="/images/La Perla map.avif" width={812} height={458} alt="La Perla map"/>
                </div>
            </div>
        </section>
    )
}