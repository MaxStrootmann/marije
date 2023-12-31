import "~/styles/globals.css";

// // import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const metadata = {
  title: "Marije Smak Photography",
  description: "Portfolio under construction",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`font-sans ${inter.variable} bg-beige`}>{children}</body> */}
      <body className="bg-beige md:text-lg">{children}</body>
    </html>
  );
}
