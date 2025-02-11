"use client";

import { features } from "./constant";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // type CarouselApi,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
// import AutoScroll from "embla-carousel-auto-scroll";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Specs() {
  return (
    <div className='py-16 lg:mt-24'>
      <div className='container space-y-12'>
        <div className='grid lg:grid-cols-2'>
          <div className='space-y-2'>
            <h2 className='text-[32px] leading-none'>Straqa is Built for</h2>
            <p className='opacity-70'>
              The development team at Straqa comprises of top minds and talents
              in the tech space to build a solution that is scalable, AI driven,
              seamless data collection process, fast payment integration and a
              user friendly design.
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            AutoPlay({
              playOnInit: true,
              stopOnInteraction: false,
              delay: 3000,
            }),
          ]}
          className='w-full'
        >
          <CarouselContent>
            {features.map(({ icon, ...feature }, index) => (
              <CarouselItem
                key={index}
                className='basis-full md:basis-1/2 lg:basis-[33%] 2xl:basis-1/4 h-full'
              >
                <Card className='shadow-[hsla(207,51%,46%,0.04)] lg:aspect-[1.3/1] h-full'>
                  <CardContent className='pt-6 space-y-5 h-full'>
                    <Image
                      src={icon}
                      alt=''
                      width={100}
                      height={100}
                      className='size-10'
                    />
                    <div className='space-y-1'>
                      <h5 className='text-2xl'>{feature.title}</h5>
                      <p className='lg:text-sm'>{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
