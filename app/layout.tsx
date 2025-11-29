import "./globals.css";
import { Reenie_Beanie } from "next/font/google";

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reenie-beanie",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={reenieBeanie.variable}>
        <main className="pt-0">{children}</main>
      </body>
    </html>
  );
}
