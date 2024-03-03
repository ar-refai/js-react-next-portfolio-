import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-48 text-lg ">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          src='/hero.png'
          alt='hero'
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="md:text-6xl text-4xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        {/* BUTTONS */}
        <div className="flex gap-4 w-full">

          <button className="p-4 rounded-lg ring ring-black bg-black text-white  transition-all duration-500 ease-in-out hover:ring-0">
            View my work
          </button>
          <button className="p-4 rounded-lg ring ring-black hover:text-white hover:bg-black transition-all duration-500 ease-in-out hover:ring-0">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}
