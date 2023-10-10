import Cloth from "@/components/Cloth";
import { brands, newArrivals, stats, styles, topSelling } from "@/constants";
import Image from "next/image"
import Link from "next/link"

const Style = ({ style }) => (
  <div className="bg-cover bg-right-bottom rounded-[20px] pt-[25px] sm:pt-4 pl-9 sm:pl-6 bg-white" style={{backgroundImage: `url(${style.image})`}}>
    <h4 className="font-bold text-4xl capitalize">{style.name}</h4>
  </div>
)

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
            {newArrivals.map(cloth => (
              <Cloth key={cloth.id} cloth={cloth} />
            ))}
          </div>
          <Link href="/shop" className="text-base font-medium py-4 px-16 border border-opacity-10 rounded-full duration-200 hover:bg-black hover:bg-opacity-10 lg:self-stretch flex justify-center">View All</Link>
        </div>
      </section>
      <section className="pt-[72px] sm:pt-[50px]">
        <div className="container flex flex-col items-center gap-[55px]">
          <h2>Top selling</h2>
          <div className="flex gap-5 sm:gap-4 flex-wrap items-center justify-center">
            {topSelling.map(cloth => (
              <Cloth key={cloth.id} cloth={cloth} />
            ))}
          </div>
          <Link href="/shop" className="text-base font-medium py-4 px-16 border border-opacity-10 rounded-full duration-200 hover:bg-black hover:bg-opacity-10 lg:self-stretch flex justify-center">View All</Link>
        </div>
      </section>
      <section className="py-20 sm:py-[50px]">
        <div className="container flex flex-col items-center gap-16 sm:gap-7 pt-[70px] sm:pt-10 pb-[76px] sm:pb-[27px] bg-zinc-100 rounded-[40px] sm:rounded-[20px] px-16 sm:px-6">
            <h2>BROWSE BY dress STYLE</h2>
            <div className="flex flex-col gap-5 sm:gap-4 self-stretch">
              <div className="grid grid-cols-[4fr_6fr] grid-rows-[289px] gap-5 sm:gap-4 sm:grid-cols-1 sm:grid-rows-[repeat(2,289px)]">
                <Style style={styles[0]}/>
                <Style style={styles[1]}/>
              </div>
              <div className="grid grid-cols-[6fr_4fr] grid-rows-[289px] gap-5 sm:gap-4 sm:grid-cols-1 sm:grid-rows-[repeat(2,289px)]">
                <Style style={styles[2]}/>
                <Style style={styles[3]}/>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home;