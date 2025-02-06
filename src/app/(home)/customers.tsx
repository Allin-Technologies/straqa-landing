"use client";

import { partners } from "./constant";
import Image from "next/image";
import Glow from "@/assets/glow/one.svg";

export function Customers() {
  return (
    <div className='py-12 lg:pt-0 lg:pb-16 lg:mt-24 relative'>
      <div className='container space-y-6 lg:space-y-12'>
        <div className='text-center space-y-1'>
          <p className='uppercase lg:text-lg opacity-50 leading-none tracking-tight'>
            VALUED CUSTOMERS
          </p>
          <h2 className='text-[32px] leading-none'>Meet Some of our Users</h2>
        </div>

        <div className='grid grid-cols-2 lg:flex gap-8'>
          {partners.map((partner, index) => (
            <div
              key={index}
              className='basis-1/2 md:basis-1/4 hover:text-white'
            >
              <div className=''>
                <div className='flex items-center justify-center'>
                  <Image
                    src={partner}
                    alt='icon'
                    width={500}
                    height={140}
                    className='h-10 object-contain object-center'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* glow */}
      <div className='-z-[1] pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 max-w-[100vw] w-screen overflow-hidden'>
        <Glow />
      </div>
    </div>
  );
}
