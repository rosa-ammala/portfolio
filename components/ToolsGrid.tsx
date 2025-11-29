import Image from "next/image";

export default function ToolsGrid() {
  const tools = [
    "figma",
    "html",
    "css",
    "angular",
    "typescript",
    "aws",
    "react",
    "javascript",
    "python",
    "git",
    "wordpress",
    "php"
  ];

  return (
    <section className="">

      <div className="grid grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool}
          >
            <Image
              src={`/icons/${tool}.svg`}
              alt={tool}
              width={32}
              height={32}
              className="
                w-full
                
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
