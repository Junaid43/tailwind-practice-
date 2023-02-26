"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function NavLinks({ href, children }) {
  let segment = useSelectedLayoutSegments();

  let active = href === `/${segment}`;
  return (
    <>
      <Link
        href={href}
        className={active ? "bg-white text-black px-4 py-4" : "px-4 py-4"}
      >
        {children}
      </Link>
    </>
  );
}
