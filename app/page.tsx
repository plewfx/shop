import { brands, clothes, stats } from "@/constants";
import Image from "next/image"
import Link from "next/link"

function generateStarIcon(starCount: number): string {
  if (starCount < 0 || starCount > 5) {
    throw new Error("Star count must be between 0 and 5");
  }

  const filledStar = "★"; // Full star character
  const emptyStar = "☆"; // Empty star character

  return filledStar.repeat(starCount) + emptyStar.repeat(5 - starCount);
}

const Home = () => {
  return (
    <>
      <section className="pt-[103px] sm:py-10 pb-[116px] sm:pb-0 bg-beige relative overflow-hidden">
        <div className="container grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col 2xl:items-start gap-8 sm:gap-5">
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button className="py-4 px-14 bg-black rounded-full text-white text-base mt-1 duration-200 hover:bg-gray-800">Shop Now</button>
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
              className="absolute top-0 right-20 lg:right-0 sm:right-20 z-[99]"
            />
          </div>
        </div>
      </section>
      <section className="bg-black py-[42px] sm:py-[39px] overflow-hidden shadow-inner">
        <div className="container scroll flex gap-28">
          {brands.map(brand => (
            <Image
              src={brand.url}
              width={brand.width}
              height={brand.height}
              alt={brand.name}
            />
          ))}
          {brands.map(brand => (
            <Image
              src={brand.url}
              width={brand.width}
              height={brand.height}
              alt={brand.name}
            />
          ))}
        </div>
      </section>
      <section className="pt-[72px] sm:pt-[50px]">
        <div className="container flex flex-col items-center gap-[55px] pb-16 sm:pb-10 border-b border-opacity-10">
          <h2>NEW ARRIVALS</h2>
          <div className="flex gap-5 sm:gap-4 flex-wrap items-center justify-center">
            {clothes.map(cloth => (
              <div className="flex flex-col gap-4 sm:gap-[10px]">
                <Image
                  src={cloth.img}
                  width={295}
                  height={298}
                  alt={cloth.name}
                  className="bg-beige rounded-[20px] sm:rounded-[13px] "
                />
                <div className="flex flex-col gap-2 sm:gap-1">
                  <h5 className="font-bold text-xl sm:text-base">{cloth.name}</h5>
                  <div className="flex items-center gap-[13px] sm:gap-[11px]">
                    <div className="flex gap-1 text-amber-400 text-xl">
                      {generateStarIcon(cloth.rating)}
                    </div>
                    <div className="text-sm">{cloth.rating}/<span className="opacity-60">5</span></div>
                  </div>
                  {
                    cloth.discount ? (
                      <div className="flex gap-[10px] sm:gap-[5px]">
                        <div className="text-2xl sm:text-xl font-bold">${cloth.price - (cloth.price * (20 / 100))}</div>
                        <div className="text-2xl sm:text-xl font-bold opacity-40 line-through">${cloth.price}</div>
                        <div className="flex items-center justify-center text-xs sm:text-[10px] font-medium text-red-500 bg-red-100 rounded-full px-[14px]">-{cloth.discount}%</div>
                      </div>
                    ) : (
                      <div className="text-2xl sm:text-xl font-bold">${cloth.price}</div>
                    )
                  }
                </div>
              </div>
            ))}
          </div>
          <Link href="/shop" className="text-base font-medium py-4 px-16 border border-opacity-10 rounded-full duration-200 hover:bg-black hover:bg-opacity-10 lg:self-stretch flex justify-center">View All</Link>
        </div>
      </section>
    </>
  )
}

export default Home;