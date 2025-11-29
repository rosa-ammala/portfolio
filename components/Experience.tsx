import Image from "next/image";
import ToolsGrid from "./ToolsGrid";

export default function Experience() {
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

            <div className="flex flex-row gap-4 sm:gap-8">

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

                <p className="text-[15px] sm:text-[18px] lg:text-[26px] mt-3">
                  MyHomesID Oy - Software Developer Project Worker
                </p>  
                <p className="text-[15px] sm:text-[18px] lg:text-[26px] -mt-2 mb-1">
                  November 2025 - now
                </p>
                
                <p>
                  Developing and improving the look and usability of a knowledge base product 
                  using Angular (TypeScript) in an AWS environment. 
                  Projects around developing a dynamic forms feature. 
                  Including reporting and documenting completed work.
                </p>

                <p className="text-[16px] sm:text-[18px] lg:text-[26px] mt-3 mb-1">
                  MyHomesID Oy - Software Developer Intern
                </p>
                <p className="text-[16px] sm:text-[18px] lg:text-[26px] -mt-4 mb-1">
                  January 2025 - June 2025
                </p>
                <p>
                  Developing and improving the look and usability of a knowledge base product 
                  using Angular (TypeScript) in an AWS environment. 
                  Including reporting and documenting completed work.
                </p>
              </div>

              {/* RIGHT SIDE – TOOLS */}
              <div className="flex-[1] mr-6">
                <p className="text-[16px] sm:text-[20px] lg:text-[28px] mb-2 pt-12 ">
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
