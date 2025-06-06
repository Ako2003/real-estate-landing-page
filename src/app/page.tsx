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
    Footer,
} from "@/sections"


export default function Page(){
    return (
        <div className="w-full main-background lg:bg-fixed h-[880px]">
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
            <Footer />
        </div>
    )
}