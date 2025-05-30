import EmblaCarousel from "@/components/EmblaCarousel";
import { slides } from "@/constants/slides";

export default function Amentities(){

    return(
        <section id="amenities">
            <div className="pt-30 pb-20">
                <div className="max-w-4xl w-11/12 mx-auto">
                    <h6 className="mb-5">Premier Amenities for Elevated Living</h6>
                    <h3 className="">Indulge in <i className="font-libre-baskerville">Unparalleled Luxury <br className="max-md:hidden" /> </i> at Our Urban Oasis</h3>
                </div>

                <div className="max-w-[1750px] mx-auto mt-15">
                    <EmblaCarousel slides={slides} options={{
                        loop: true,
                        dragFree: true,
                    }} />
                </div>
            </div>
        </section>
    )
}