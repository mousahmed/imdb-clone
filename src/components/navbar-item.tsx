"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  param: string;
}

function NavbarItem({ title, param }: Props) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-amber-600 font-semibold p-2 m-4 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
