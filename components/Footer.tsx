import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative h-40 w-full overflow-hidden">
      <Image
        src="/top-view-paper-material-pienennetty.png"
        alt=""
        fill
        className="object-cover pointer-events-none select-none"
        aria-hidden="true"
      />

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
        <p className="mt-2 text-[10px] text-neutral-800">
          Paper like images, paper-clip and scrapbook letters are designed by 
          <a href="http://freepik.com"
            className="text-neutral-800 underline underline-offset-2 hover:bg-orange-100"
          > Freepik </a>.
        </p>
        <p className="mt-2 text-[10px] text-neutral-800">
          Icons crafted by tandpfun. Skill Icons collection in 
          <a href="https://freesvgicons.com/packs/skill-icons"
            className="text-neutral-800 underline underline-offset-2 hover:bg-orange-100"
          > SVG Icons </a>.
        </p>
        <p className="mt-2 text-[10px] text-neutral-800">
          Stickers(by bukeicon) and people figures(by paulalee) by 
          <a href="https://flaticon.com"
            className="text-neutral-800 underline underline-offset-2 hover:bg-orange-100"
          > FlatIcon </a>.
        </p>

        <p className="mt-2 text-[10px] text-neutral-800">Doodles by me, Rosa Ämmälä.</p>
      </div>
    </footer>    
  );
}