import { stats } from "@/constants";
import Image from "next/image"

const Home = () => {
  return (
    <>
      <section className="pt-[103px] sm:py-10 pb-[116px] sm:pb-0 bg-[#F2F0F1] relative overflow-hidden">
        <div className="container grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col 2xl:items-start gap-8 sm:gap-5">
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button className="py-4 px-14 bg-black rounded-full text-white text-base mt-1">Shop Now</button>
            </div>
            <div className="flex flex-wrap gap-x-16 gap-y-3 sm:justify-center">
              {stats.map(stat => (
                <div className="flex flex-col">
                  <div className="text-[40px] sm:text-2xl font-bold">{stat.number}+</div>
                  <p>{stat.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:relative">
            <Image
              src="/blink.svg"
              width={56}
              height={56}
              alt="blink"
              className="absolute z-40 top-80 right-[42%] lg:left-0"
            />
            <Image
              src="/blink.svg"
              width={104}
              height={104}
              alt="blink"
              className="absolute z-40 top-20 right-20 lg:right-0"
            />
            <Image
              src="/hero.png"
              width={623}
              height={585}
              alt="Hero image"
              className="absolute top-0 right-20 xl:-right-10 lg:right-0 sm:right-20"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;