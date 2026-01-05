import Image from "next/image";
import ToolsGrid from "./ToolsGrid";

export default function Experience() {
  return (
    <section
      className="
        relative w-full h-full 
        flex items-center justify-center
        overflow-hidden
      "
    >
      {/* WRAPPER: centers card + polaroid together */}
      <div className="relative w-[min(880px,100%)] max-w-[880px] ml-6 sm:ml-10 lg:ml-28">

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
              w-[90%]
              ml-4
              flex flex-col
            "
          >

            <div className="flex flex-row gap-2">

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
                  src="/experience-letters.png"
                  alt="Experience"
                  width={260}
                  height={120}
                  className="w-[250px] sm:w-[300px] lg:w-[400px] mb-2 lg:mb-4"
                />

                <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[26px] mt-3 font-handwritten">
                  MyHomesID Oy - Software Developer Commission Worker
                </p>  
                <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] -mt-2 mb-1 font-handwritten">
                  November 2025 - now
                </p>
                
                <p className="text-[10px] sm:text-[11px] md:text-[13px] lg:text-[16px] tracking-wide">
                  Developing and improving the look and usability of a knowledge base product 
                  using Angular (TypeScript) in an AWS environment. 
                  Projects around developing a dynamic forms feature. 
                  Including reporting and documenting completed work.
                </p>

                <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] mt-3 mb-1 font-handwritten">
                  MyHomesID Oy - Software Developer Intern
                </p>
                <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] -mt-4 mb-1 font-handwritten">
                  January 2025 - June 2025
                </p>
                <p className="text-[10px] sm:text-[11px] md:text-[13px] lg:text-[16px] tracking-wide">
                  Developing and improving the look and usability of a knowledge base product 
                  using Angular (TypeScript) in an AWS environment. 
                  Including reporting and documenting completed work.
                </p>
              </div>

              {/* RIGHT SIDE – TOOLS */}
              <div className="flex-[1]">
                <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] ml-4 mb-2 pt-12 font-handwritten">
                  Tools
                </p>

                <ToolsGrid />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
