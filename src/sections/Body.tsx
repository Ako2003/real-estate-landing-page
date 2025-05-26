import Image from "next/image";

export default function Body(){
    return(
        <section className="container">
            <div className="mt-20 max-w-4xl mx-auto">
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
                <div className="flex items-center justify-between">
                    <div>
                        <Image
                            src={"/images/yuvalna_photograph_of_a_Boardwalk_that_is_close_to_the_building_3273c742-f097-4ed5-a17e-82.jpg"}
                            alt={"Boardwalk near the building"} width={290} height={390}/>
                    </div>
                    <div>
                        <Image src={"/images/pexels-fernando-reyes-6600902 copy.jpg"} alt={"Beach"} width={209}
                               height={251}/>
                    </div>
                </div>
            </div>
        </section>
    )
}