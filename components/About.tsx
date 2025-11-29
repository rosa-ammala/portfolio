import Image from "next/image";

export default function About() {
  return (
    <section
      className="
        relative w-full h-full
        flex items-center justify-center
        overflow-hidden
        font-handwritten
      "
    >
      {/* WRAPPER: centers card + polaroid together */}
      <div className="relative w-[min(880px,100%)] max-w-[880px] ml-6 sm:ml-10 lg:ml-28">

        {/* POLAROID + CLIP GROUP */}
        <div
          className="
            absolute 
            top-1/2 -translate-y-1/2
            -left-2 sm:-left-6 lg:-left-28
            z-30
          "
        >
          <div className="relative">
            {/* Polaroid photo */}
            <Image
              src="/rosa-1.jpg"
              alt="Me"
              width={200}
              height={200}
              className="
                w-[140px] sm:w-[180px] lg:w-[220px]
                h-auto
                border-[10px] border-white
                shadow-xl
              "
            />

            {/* Paper Clip */}
            <Image
              src="/top-view-paper-clip-table-turned.png"
              alt="Paper clip"
              width={60}
              height={60}
              className="
                absolute
                -top-9 sm:-top-12 lg:-top-16
                left-1/2 -translate-x-1/2 
                w-[28px] sm:w-[40px] lg:w-[55px]
                h-auto
                z-20
              "
            />
          </div>
        </div>

        {/* BROWN CARD */}
        <div 
          className="
            relative -rotate-1 overflow-hidden
            w-[520px] sm:w-[620px] md:w-[700px] lg:w-full
          "
        >
          <Image
            src="/top-view-paper-material-pienennetty.png" 
            alt="Brown paper card"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />

          {/* TEXT CONTENT OVER CARD */}
          <div
            className="
              absolute
              top-[12%]
              left-1/2 -translate-x-1/2
              w-[70%]
              ml-20 sm:ml-20 md:ml-18 lg:ml-12
              flex flex-col
            "
          >

            <div className="flex flex-row gap-4 sm:gap-6">

              {/* LEFT TEXT */}
              <div 
                className="
                  flex-[2]
                  text-[12px] sm:text-[14px] lg:text-[20px]
                  leading-relaxed
                "
              >
                {/* ABOUT ME otsikko */}
                <Image
                  src="/about-me-letters.png"
                  alt="About Me"
                  width={260}
                  height={120}
                  className="w-[150px] sm:w-[260px] lg:w-[300px] mb-2 lg:mb-4"
                />
                <p>
                  I am a recently graduated engineer specialized in software
                  development. I combine analytical thinking, curiosity, and a
                  drive to create user-oriented solutions. I learn new
                  technologies quickly and enjoy challenges that blend logical
                  thinking with creativity. My internship and project work
                  strengthened my skills in software development, teamwork, and
                  agile methods. I work carefully and self-directedly, and I value
                  clear communication and strong team collaboration.
                </p>

                <p className="text-[14px] sm:text-[16px] lg:text-[22px] mt-3 mb-1">Education</p>

                <p>
                  Information and communication technology, engineer<br />
                  Jamk university of applied sciences<br />
                  2021 – 2025
                </p>
              </div>

              {/* RIGHT SIDE – SKILLS */}
              <div className="flex-[1]">
                <p className="text-[14px] sm:text-[16px] lg:text-[22px] mb-2 pt-4 ">Skills</p>

                <ul className="
                  space-y-1 
                  text-[12px] sm:text-[14px] lg:text-[20px]
                  mb-4
                ">
                  <li>• Team worker</li>
                  <li>• Self-directed</li>
                  <li>• Time management</li>
                  <li>• Organizational skills</li>
                  <li>• Reliable</li>
                  <li>• Curiosity to learn</li>
                </ul>

                {/* KEEP LEARNING TARRA */}
                <Image
                  src="/learning.png"
                  alt="Keep learning sticker"
                  width={140}
                  height={140}
                  className="
                    w-[55px] sm:w-[100px] lg:w-[130px]
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
