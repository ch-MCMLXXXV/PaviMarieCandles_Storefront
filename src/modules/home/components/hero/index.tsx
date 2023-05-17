import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="mb-4 text-2xl-semi drop-shadow-md shadow-black">
          Beautiful, Scented Soy Candles
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Leap into spring with out lovely scents!
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="/main.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={100}
        objectFit="cover"
        alt="Ceramic Bowl Candle"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
