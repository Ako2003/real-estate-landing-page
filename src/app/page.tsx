import Nav from "@/components/Nav";
import {
    Hero,
    Body,
    Building,
    Ocean,
    Sky,
    Motivation,
    Location,
    CEO,
    Developer,
    Amentities,
    Presale,
    BackgroundImage,
    GetInTouch
} from "@/sections"


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
            <Amentities />
            <Presale />
            <BackgroundImage />
            {/*<GetInTouch />*/}
        </div>
    )
}