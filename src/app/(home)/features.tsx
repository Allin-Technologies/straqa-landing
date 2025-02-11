"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { motion, useScroll, useTransform } from "framer-motion";
import { ImageMedia } from "@/components/media/next-image";
import { cn } from "@/utilities/ui";
import Glow from "@/assets/glow/four.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AILayout from "@/assets/ai-layout.svg";

const cardData = [
  {
    src: "/images/1.webp",
    title: "Track your event ticket sales",
    description: "See your most purchased tickets for events",
    align: "bottom",
  },
  {
    src: "/images/2.webp",
    title: "One platform for your transportation needs",
    description: "Get  information to run your transportation business",
    align: "bottom",
  },
  {
    src: "/images/3.webp",
    title: "Manage team in one space",
    description: "Track your team on a project",
    align: "bottom",
  },
];

export function Features() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className='w-full py-12 lg:py-16  relative overflow-visible'>
      <div className='relative w-full'>
        {/* AILayout */}
        <div className='-z-[1] pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[100vw] w-screen overflow-hidden'>
          <AILayout className='w-full' />
        </div>
        {/* glow && AILayout */}
        <div className='-z-[1] pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[100vw] w-screen'>
          <Glow className='w-full' />
        </div>
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        className='w-full container bg-transparent'
      >
        <CarouselContent className='bg-transparent'>
          {[...cardData, ...cardData].map((data, index) => (
            <CarouselItem
              // aspect-video lg:aspect-[1.5/1]
              key={index}
              className='basis-full md:basis-1/2 lg:basis-[33%] h-full'
            >
              <Card
                key={index}
                className='flex flex-col items-center max-h-[343px] justify-end px-6 overflow-clip space-y-6 h-full'
              >
                <div className='flex-1'>
                  <ImageMedia
                    src={{ src: data?.src, height: 200, width: 400 }}
                    className={cn("w-full min-w-[400px] h-80 object-contain", {
                      "object-bottom": data?.align === "bottom",
                      "object-center": data?.align === "center",
                    })}
                  />
                </div>
                <CardContent className='px-0 w-full flex flex-col items-start justify-start'>
                  <h4 className='lg:text-lg font-medium'>{data?.title}</h4>
                  <p className='text-[hsla(0,_0%,_47%,_1)]'>
                    {data?.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

// export function Features() {
//   const ref = React.useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({ target: ref });
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72.5%"]); // Adjust scrolling range

//   return (
//     <div
//       ref={ref}
//       className='w-full h-[150vh] relative container overflow-visible'
//     >
//       <div className='relative w-full'>
//         {/* glow && AILayout */}
//         <div className='-z-[1] pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[100vw] w-screen overflow-hidden'>
//           <Glow />
//         </div>
//       </div>
//       <div className='sticky top-0 flex h-[500px] items-center'>
//         <motion.div style={{ x }} className='flex gap-4 relative'>
//           {cardData.map((data, index) => (
//             <Card
//               key={index}
//               className='flex flex-col items-center max-h-[343px] justify-end px-6 overflow-clip space-y-6'
//             >
//               <div className='flex-1'>
//                 <ImageMedia
//                   src={{ src: data?.src, height: 200, width: 400 }}
//                   className={cn("h-full w-full min-w-[400px] object-contain", {
//                     "object-bottom": data?.align === "bottom",
//                     "object-center": data?.align === "center",
//                   })}
//                 />
//               </div>
//               <CardContent className='px-0 w-full flex flex-col items-start justify-start'>
//                 <h4 className='lg:text-lg font-medium'>{data?.title}</h4>
//                 <p className='text-[hsla(0,_0%,_47%,_1)]'>
//                   {data?.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </motion.div>
//       </div>

//       {/* Stars */}
//       <div className='-z-[1] pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[100vw] w-screen overflow-hidden'>
//         <Stars />
//       </div>
//     </div>
//   );
// }
