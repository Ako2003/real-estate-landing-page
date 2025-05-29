"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import "@/app/css/embla.css"
import Image from "next/image";


type PropType = {
    slides: {
        image: string,
        title: string
    }[],
    options?: EmblaOptionsType,
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel(
        options, [
        AutoScroll({ playOnInit: true, stopOnMouseEnter: true, stopOnInteraction: false, startDelay: 0, speed: 0.8 }),
    ])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => {
                        const isLast = index === slides.length - 1;
                        const slideWidth = (index % 2 === 0 || isLast) ? '551px' : '1030px';

                        return (
                            <div
                                className="embla__slide"
                                key={index}
                                style={{ flex: `0 0 ${slideWidth}` }}  // override flex-basis here
                            >
                                <div className="embla__slide__number flex-col" style={{ height: '600px' }}>
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        width={index % 2 === 0 ? 551 : 1030}
                                        height={551}
                                        className="object-cover h-[551px]"
                                    />
                                    <p className="font-madefor-display text-start mt-3">{slide.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
