import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";
import Body from "@/sections/Body";
import Building from "@/sections/Building";
import Ocean from "@/sections/Ocean";
import Sky from "@/sections/Sky";
import Motivation from "@/sections/Motivation";
import Location from "@/sections/Location";
import CEO from "@/sections/CEO"
import Developer from "@/sections/Developer";


export default function Page(){
    return (
        <div className="w-full main-background h-[880px]">
            <Nav />
            <Hero />
            <Body />
            <Building />
            <Ocean />
            <Sky />
            <Motivation />
            <Location />
            <CEO />
            <Developer />
        </div>
    )
}