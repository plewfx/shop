import Image from "next/image";

const generateStars = (starCount: number) => {
  if (starCount < 0 || starCount > 5) {
    throw new Error("Star count must be between 0 and 5");
  }

  let stars = Array.from({length: Math.floor(starCount)}, () => <Image src="/star.svg" width={18.5} height={18.5} alt="star" />);

  Number.isInteger(starCount) || stars.push(<Image src="/half-star.svg" width={8.7} height={18.5} alt="star" />);

  return stars;
}


interface ClothType {
  id: number,
  name: string,
  rating: number,
  price: number,
  discount: number,
  img: string
}

const Cloth = ({ cloth }: { cloth: ClothType } ) => {
  return (
    <div key={cloth.id} className="flex flex-col gap-4 sm:gap-[10px]">
        <Image
            src={cloth.img}
            width={295}
            height={298}
            alt={cloth.name}
            className="bg-beige rounded-[20px] sm:rounded-[13px]"
        />
        <div className="flex flex-col gap-2 sm:gap-1">
        <h5 className="font-bold text-xl sm:text-base">{cloth.name}</h5>
        <div className="flex items-center gap-[13px] sm:gap-[11px]">
            <div className="flex gap-1 text-amber-400 text-xl">
            {generateStars(cloth.rating)}
            </div>
            <div className="text-sm">{Number.isInteger(cloth.rating) ? cloth.rating + '.0' : cloth.rating}/<span className="opacity-60">5</span></div>
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
  )
}

export default Cloth