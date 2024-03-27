import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import CartSimple from '@/public/icons/CartSimple';
import Logo from '@/public/icons/Logo';
import YouTube from '@/public/icons/YouTube';
import Facebook from '@/public/icons/Facebook';
import Twitter from '@/public/icons/Twitter';
import Link from 'next/link';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['vietnamese', 'cyrillic', 'latin'],
  variable: '--font-Montserrat',
  display: 'swap',
});
const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin', 'devanagari', 'latin-ext'],
  variable: '--font-Poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=' h-full'>
      <body className={`${poppins.variable} ${montserrat.variable} font-montserrat h-[calc(100%-82px)]`}>
        <header className="fixed top-0 w-full bg-white font-poppins">
          <div className="container flex justify-between items-center h-[100px] md:h-[82px] px-5">
            <div className=" flex md:hidden flex-col justify-around size-6 cursor-pointer">
              <div className=" h-0.5 bg-dark"></div>
              <div className=" h-0.5 bg-dark"></div>
              <div className=" h-0.5 bg-dark"></div>
            </div>

            <Link href='/'><Logo /></Link>

            <ul className="font-semibold hidden md:flex items-center md:gap-6 lg:gap-[75px]">
              <li className=' hover:underline cursor-pointer'><a href="#aboutUs">আমাদের সম্পর্কে</a></li>
              <li className=' hover:underline cursor-pointer'><a href="#shop">দোকান</a></li>
              <li className=' hover:underline cursor-pointer'><a href="#reviews">পর্যালোচনা</a></li>
              <li className=' hover:underline cursor-pointer'><a href="#contactUs">যোগাযোগ</a></li>
            </ul>

            <Link href='/cart' className="relative cursor-pointer">
              <CartSimple />

              <div className="absolute -top-1/2 -right-1/2 w-5 h-5 bg-mint rounded-full text-white flex justify-center items-center text-xs font-montserrat font-bold">
                2
              </div>
            </Link>
          </div>
        </header>

        <main className='mt-[100px] md:mt-[82px] md:min-h-[calc(100%-248px-85px)]'>{children}</main>

        <footer className="bg-white py-[60px] lg:py-0 px-5 text-dark relative z-10">
        <div className="lg:h-[248px] container flex justify-between flex-wrap">
          <div className="flex flex-col justify-center mr-32">
            <Logo />

            <div className="mt-5 font-medium">© 2024 কপিরাইট, সমস্ত অধিকার সংরক্ষিত</div>
          </div>

          <div className="flex items-center grow mt-9 lg:mt-0">
            <div className="flex justify-between w-full flex-wrap gap-5">
              <div className="flex flex-col gap-1">
                <div className="text-[#778BC6] font-semibold">আমাদের সম্পর্কে</div>

                <div>আমাদের সম্পর্কে</div>

                <div>দোকান</div>

                <div>পর্যালোচনা</div>

                <div>যোগাযোগ</div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-[#778BC6] font-semibold">আইনগত</div>

                <div>গোপনীয়তা নীতি</div>

                <div>কুকি নীতি</div>

                <div>শর্তাবলী ও শর্তাদি</div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-[#778BC6] font-semibold">যোগাযোগ</div>

                <div>10 নং স্ট্রিট</div>

                <div>ঢাকা</div>

                <div>বাংলাদেশ</div>

                <div>+880 1547 881110</div>
              </div>

              <div className="flex gap-4">
                <a href="https://www.youtube.com/">
                  <YouTube />
                </a>

                <a href="https://www.facebook.com/">
                  <Facebook />
                </a>

                <a href="https://twitter.com/">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}

