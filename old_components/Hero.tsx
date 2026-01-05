import Image from "next/image";

export default function Hero() {
  return (
    <section className="
      relative w-full min-h-[calc(100vh-80px)] 
      flex flex-col lg:flex-row 
      items-center justify-center 
      gap-8 lg:gap-20 
      px-6 sm:px-10 lg:px-20 
    ">

      {/* VASEN: vihko */}
      <div className="
        relative flex flex-col gap-6 
        w-full max-w-md sm:max-w-lg lg:max-w-xl 
        min-w-[320px] sm:min-w-[420px] lg:min-w-[520px]
      ">
        <Image
          src="/open-notebook-isolated.png"
          alt="Notebook"
          width={450}
          height={300}
          priority
          className="
            w-full min-w-[320px] sm:min-w-[420px] lg:min-w-[520px] 
            drop-shadow-2xl
          "
        />

        {/* Notebookin sisältö overlayna */}
        <div className="
          absolute inset-0 
          pl-16 sm:pl-18 lg:pl-20 
          pr-8 sm:pr-10 lg:pr-10
          flex items-start justify-between gap-4 items-center
        ">
          {/* Left - Intro */}
          <div className="flex flex-col gap-3">
            <Image
              src="/rosa-letters.png"
              alt="Rosa title"
              width={220}
              height={100}
              priority
              className=""
            />

            <p className="font-handwritten text-2xl sm:text-3xl lg:text-4xl mt-2">
              Web Designer and <br />
              Software Developer
            </p>

            <Image
              src="/underline.svg"
              alt="Underline doodle"  
              width={200}
              height={100}
              priority
              className=""
            />
          </div>

          {/* Right - Doodles */}
          <div className="flex flex-col gap-20 items-end">
            <Image
              src="/stars.svg"
              alt="Stars doodle"
              width={60}
              height={60}
              priority
            />
            <Image
              src="/paper-plane.svg"
              alt="Paper plane"
              width={60}
              height={60}
              priority
            />
          </div>
        </div>
      </div>

      {/* OIKEA: polaroid-kuvat */}
      <div className="
        relative w-full 
        max-w-[180px] sm:max-w-[280px] lg:max-w-[320px] 
        h-[280px] sm:h-[320px] lg:h-[410px]
      ">
        <Image
          src="/rosa-2.jpg"
          alt="Me outside"
          width={150}
          height={150}
          priority
          className="
            absolute top-0 left-0 
            w-[140px] sm:w-[180px] lg:w-[220px] 
            h-auto rotate-[-6deg] drop-shadow-lg 
            border-8 border-white
          "
        />

        <Image
          src="/top-view-paper-clip-table-turned.png"
          alt="Paper clip photo"
          width={50}
          height={60}
          priority
          className="
            absolute z-20
            top-7 sm:top-4 lg:top-8 
            left-1/2 -translate-x-1/2 
            ml-2
            w-[30px] sm:w-[40px] lg:w-[50px] 
            h-auto rotate-[4deg] drop-shadow-lg
          "
        />

        <Image
          src="/rosa-1.jpg"
          alt="Me photo"
          width={150}
          height={150}
          priority
          className="
            absolute z-10
            top-16 sm:top-18 lg:top-24 
            left-1/2 -translate-x-1/2 
            w-[140px] sm:w-[180px] lg:w-[220px] 
            h-auto rotate-[4deg] drop-shadow-lg 
            border-8 border-white
          "
        />

        <Image
          src="/arrow.svg"
          alt="That's me arrow"
          width={80}
          height={85}
          priority
          className="
            absolute z-0
            top-[70%] sm:top-[76%] lg:top-[80%]
            left-[-6%]
            -translate-x-1/2
          "
        />
      </div>

    </section>
  );
}