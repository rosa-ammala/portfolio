import Image from "next/image";

export default function Contact() {
  return (
    <section
      className="
        relative w-full min-h-screen
        flex items-center justify-center
        overflow-hidden
      "
    >
      <div
        className="
          relative
          w-[min(95vw,640px)]
          min-w-[260px]
          max-w-[640px]
          aspect-[5/6]
          flex items-center justify-center
        "
      >
        {/* Envelope */}
        <Image
          src="/brown-envelope-with-message-card.png"
          alt="Envelope and contact card"
          fill
          sizes="(max-width: 768px) 95vw, 640px"
          className="object-contain drop-shadow-2xl -rotate-[16deg] ml-3"
          priority
        />

        {/* Overlay - matches white card */}
        <div
          className="
            absolute
            top-[40%]
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[clamp(180px,58vw,360px)]
            pointer-events-auto
            mt-1 sm:mt-2
          "
        >
          <div
            className="
              flex flex-col items-center text-center
              gap-[clamp(0.65rem,2vw,1rem)]
            "
          >
            <Image
              src="/contact-letters.png"
              alt="Contact Me"
              width={200}
              height={90}
              className="
                w-[clamp(120px,30vw,200px)]
                h-auto
              "
            />

            <p
              className="
                font-handwritten leading-snug
                text-[clamp(1rem,1.8vw,1.25rem)]
              "
            >
              Rosa Ämmälä<br />
              rosa.ammala@gmail.com
            </p>

            <a
              href="https://www.linkedin.com/in/rosa-ämmälä-86b1b922b"
              target="_blank"
              rel="noopener noreferrer"
              className="
                uppercase tracking-[0.2em] no-underline
                text-[clamp(0.65rem,1.3vw,0.875rem)]
              "
            >
              <Image 
                src="/linkedin.svg"
                alt="linkedin svg icon"
                width={24}
                height={24}
                className="
                  w-[clamp(18px,3vw,30px)]
                  h-auto
                "
              />
            </a>
          </div>
        </div>

        {/* Thank you image on brown envelope */}
        <div
          className="
            absolute
            bottom-[17%] sm:bottom-[18%]
            left-[61%]
            -translate-x-1/2
            -translate-y-1/2
            -rotate-[16deg]
            pointer-events-auto
          "
        >
          <Image
            src="/thank-you.png"
            alt="Thank you"
            width={60}
            height={60}
            className="
              w-[clamp(42px,6vw,80px)]
              h-auto
            "
          />
        </div>
      </div>
    </section>
  );
}
