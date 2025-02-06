import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Features } from "./features";
import { Services } from "./services";
import { Customers } from "./customers";
import { Specs } from "./specs";
import { Reviews } from "./reviews";
import { Contact } from "@/components/contact";
import AILayout from "@/assets/ai-layout.svg";

export default function Home() {
  return (
    <article className='pt-16 pb-24'>
      <div className='realtive w-screen overflow-hidden'>
        {/* AILayout */}
        <div className='-z-[1] pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[100vw] w-screen overflow-hidden'>
          <AILayout />
        </div>
        <div
          id='hero'
          className='relative mt-12 lg:mt-[12vh] flex items-center justify-center text-white'
        >
          <div className='container grid lg:grid-cols-12 gap-6'>
            <div className='col-span-9 space-y-6'>
              <div className='space-y-3'>
                <h1 className='text-[2.5rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-tight'>
                  Transforming Payments and Analytics for Every Sector
                </h1>
                <p className='text-xl bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent'>
                  — Welcome to Straqa, where we leverage AI to revolutionize
                  your payment processes and analytics. Our platform is designed
                  to streamline operations across diverse industries, ensuring
                  efficiency and growth.
                </p>
              </div>

              <div className='flex gap-4'>
                <Button asChild>
                  <Link href='#contact__form'>Get started</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='#contact__form'>Book a Demo</Link>
                </Button>
              </div>
            </div>
            <div className='hidden lg:flex col-span-3 justify-end'>
              {/* <Button asChild>
                <Link href='#'>Book a Demo</Link>
              </Button> */}
            </div>
          </div>
        </div>
        <Features />
      </div>
      <Services />
      <Customers />
      <Specs />
      <Reviews />
      <Contact />
    </article>
  );
}
