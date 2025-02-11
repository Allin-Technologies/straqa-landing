"use client";

import * as React from "react";
import MarqueePrimitive from "react-fast-marquee";
import { reviews } from "./constant";
import { Card, CardContent } from "@/components/ui/card";
import Qoute from "@/assets/icons/Qoute.svg";
import Image from "next/image";
import Glow from "@/assets/glow/three.svg";

export function Reviews() {
  return (
    <div className='py-16 lg:mt-24'>
      <div className='space-y-12'>
        <div className='container text-center space-y-1 relative'>
          <p className='uppercase lg:text-lg opacity-50 leading-none tracking-tight'>
            TESTIMONIALS
          </p>
          <h2 className='text-[32px] leading-none'>Real people, Real review</h2>

          <div className='-z-[1] pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[100vw] w-screen overflow-hidden'>
            <Glow />
          </div>
        </div>

        <div className='space-y-4'>
          <MarqueePrimitive autoFill>
            {reviews.map((review, index) => (
              <Card key={index} className='h-full mx-2 p-0 max-w-[372px]'>
                <CardContent className='flex gap-4 p-4'>
                  <Image
                    src={review.img}
                    alt={review.name}
                    width={100}
                    height={134}
                    className='rounded-lg object-cover min-h-[100%] min-w-28 flex-shrink-0'
                  />

                  <div className='space-y-3'>
                    <div className='flex flex-col space-y-1'>
                      <Qoute className='size-5 self-start' />

                      <p className='text-sm text-balance opacity-70'>
                        {review.review}
                      </p>

                      <Qoute className='size-5 rotate-180 self-end' />
                    </div>
                    <p className='text-xl'>{review.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </MarqueePrimitive>
          <MarqueePrimitive autoFill direction='right'>
            {reviews.toReversed().map((review, index) => (
              <Card key={index} className='h-full mx-2 p-0 max-w-[372px]'>
                <CardContent className='flex gap-4 p-4'>
                  <Image
                    src={review.img}
                    alt={review.name}
                    width={100}
                    height={134}
                    className='rounded-lg object-cover min-h-[100%] min-w-28 flex-shrink-0'
                  />

                  <div className='space-y-3'>
                    <div className='flex flex-col space-y-1'>
                      <Qoute className='size-5 self-start' />

                      <p className='text-sm text-balance opacity-70'>
                        {review.review}
                      </p>

                      <Qoute className='size-5 rotate-180 self-end' />
                    </div>
                    <p className='text-xl'>{review.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </MarqueePrimitive>
        </div>
      </div>
    </div>
  );
}
