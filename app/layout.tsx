import { Metadata } from "next";
import "./globals.css";
import { Reenie_Beanie } from "next/font/google";
import Image from "next/image";

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reenie-beanie",
});

export const metadata: Metadata = {
  title: "Rosa Ämmälä",
  description: "Web Designer and Software Developer Portfolio",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={reenieBeanie.variable}>
        <div className="fixed inset-0 -z-10">
          <Image
            src="/design-space-paper-textured-background.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {children}
        {/* <main className="pt-0"></main> */}
      </body>
    </html>
  );
}
