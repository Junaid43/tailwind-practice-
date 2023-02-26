import NavLinks from "./components/NavLinks";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="flex flex-wrap justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 space-x-4 py-6 gap-4">
          <nav className=" text-white px-4 flex gap-4 flex-wrap">
            <NavLinks href="/">Home</NavLinks>
            <NavLinks href="/about">About</NavLinks>
            <NavLinks href="/ecommerce">Ecommerce</NavLinks>
            <NavLinks href="/contact">Contact</NavLinks>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
