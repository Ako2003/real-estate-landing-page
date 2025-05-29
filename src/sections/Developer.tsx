import Image from "next/image";

export default function Developer() {
    return (
        <section className="bg-yellow">
            <div className="max-w-7xl mx-auto py-20 flex justify-between items-center">
                <div className="max-w-md">
                    <h6 className="mb-1">The Developer</h6>
                    <h3 className="mb-1">Mogendor Group</h3>
                    <h6 className="mb-5">With over 155 successful projects since 1989, Mogendor launches yet another
                        architectural gem</h6>
                    <p className="font-madefor-display mb-5">I{"'"}m a paragraph. Click here to add your own text and
                        edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make
                        changes to the font. I’m a great place for you to tell a story and let your users know a little
                        more about you.</p>
                </div>
                <div>
                    <Image
                        src={"/images/yuvalna_photograph_of_FULL_three_high_buildings_that_is_part_of_b5145927-1d2c-4fc8-9fd9-6c.jpg"}
                        width={461} height={550} alt="Three high buildings"/>
                </div>
            </div>
        </section>
    )
}