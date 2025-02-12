import Link from "next/link";
import Logo from "@/components/logo";
import X from "@/assets/icons/Twitter.svg";
import Instagram from "@/assets/icons/Instagram.svg";
import Glow from "@/assets/glow/two.svg";

export function Footer() {
  return (
    <footer className='border-t pt-16 pb-6 relative'>
      <div className='container space-y-16'>
        <div className='flex flex-col lg:flex-row items-start justify-between gap-12'>
          <Logo />

          <div className='flex flex-col gap-4 opacity-70'>
            <h3 className='text-sm uppercase font-semibold leading-snug tracking-tight'>
              info
            </h3>

            <div className='grid gap-2'>
              <Link href='#about__'>About us</Link>
              <Link href='https://calendly.com/straqa-support/bookademo'>
                Book a Demo
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-4 opacity-70'>
            <h3 className='text-sm uppercase font-semibold leading-snug tracking-tight'>
              Contact us
            </h3>

            <div className='grid gap-2'>
              <p>
                Straqa headquarters, 669 N Broad Street Middletown Delaware US
              </p>
              <Link href='tel:+2349051555542'>+234 9051555542</Link>
              <Link href='mailto:support@straqa.com'>support@straqa.com</Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-6'>
          <p className='opacity-50 hover:opacity-80 transition-opacityn duration-150 ease-linear cursor-default'>
            © {new Date().getFullYear()} — Copyright
          </p>
          <div className='flex gap-4 items-center [&_svg]:size-[30px] [&_svg]:hover:opacity-80 [&_svg]:transition-opacity [&_svg]:duration-150 [&_svg]:ease-linear'>
            <Link href='https://x.com/straqahq?s=21' target='_blank'>
              <X />
            </Link>
            <Link
              href='https://www.instagram.com/straqahq?igsh=MXducGtkZXk1MjN6eA%3D%3D&utm_source=qr'
              target='_blank'
            >
              <Instagram className='' />
            </Link>
          </div>
        </div>
      </div>

      {/* glow */}
      <div className='-z-[1] pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[100vw] w-screen overflow-hidden'>
        <Glow />
      </div>
    </footer>
  );
}

{
  /* <div>
  <h3 className='font-bold text-2xl'>STRAQA</h3>
  <p className='opacity-50'>
    We are a team of passionate developers, designers, and marketers who are
    committed to creating the best products for our clients.
  </p>
</div>; */
}
