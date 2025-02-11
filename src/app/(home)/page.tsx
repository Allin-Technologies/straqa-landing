import { Button } from "@/components/ui/button";
// import Image from "next/image";
import Link from "next/link";
import { Features } from "./features";
import { Services } from "./services";
import { Customers } from "./customers";
import { Specs } from "./specs";
import { Reviews } from "./reviews";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <article className='pt-16 pb-24 lg:pt-32'>
      <div className='realtive w-screen overflow-hidden'>
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
                <Button asChild className='px-7 lg:px-10'>
                  <Link href='#contact__form'>Get started</Link>
                </Button>
                <Button asChild variant='outline' className='px-7 lg:px-10'>
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
