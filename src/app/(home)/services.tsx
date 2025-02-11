"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
// import AutoScroll from "embla-carousel-auto-scroll";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Stars from "@/assets/stars.svg";

const cardData = [
  {
    title: "Events",
    description:
      "Events by Straqa is an events managements platform that provides allow event hosts create tickets of different classes, manage sales, get real time data, and manage team all on one platform. Straqa also helps you manage all things payments.  ",
  },
  {
    title: "Transport",
    description:
      "Transport by Straqa is an transportation management platform that help business owners manage their fleets, drivers and coworkers on one platform. Straqa helps manage payments and provides all analytical data for business growth. ",
  },
  {
    title: "Logistics",
    description:
      "Logistics by Straqa is an logistics management platform hat helps business owners manage logistics, deliveries, drivers and track items. Straqa also manages payments for all parties involved.",
  },
  {
    title: "HealthTech",
    description:
      "Logistics by Straqa is an logistics management platform hat helps business owners manage logistics, deliveries, drivers and track items. Straqa also manages payments for all parties involved.",
  },
];

export function Services() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className='pb-16 relative'>
      <div className='-z-[1] pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[100vw] w-screen'>
        <Stars className='w-full' />
      </div>

      <div className='container space-y-12'>
        <div className='text-center space-y-1'>
          <p className='uppercase lg:text-lg opacity-50 leading-none tracking-tight'>
            VALUED CUSTOMERS
          </p>
          <h2 className='text-[32px] leading-none'>Meet Some of our Users</h2>
        </div>

        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[plugin.current]}
          className='w-full'
        >
          <CarouselContent>
            {[...cardData, ...cardData].map((data, index) => (
              <CarouselItem
                key={index}
                className='basis-full md:basis-1/2 lg:basis-[33%] h-full'
              >
                <Card className='aspect-[1.2/1] sm:aspect-auto md:aspect-[1.4/1]  lg:aspect-[1.6/1] shadow-[hsla(207,51%,46%,0.04)] h-full'>
                  <CardContent className='flex flex-col justify-between pt-6 space-y-5 h-full'>
                    <div className='space-y-1'>
                      <h5 className='text-2xl'>{data.title}</h5>
                      <p className='lg:text-sm'>{data.description}</p>
                    </div>

                    <div>
                      <Button>
                        <Link href='#'>Book a Demo</Link>
                      </Button>
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
