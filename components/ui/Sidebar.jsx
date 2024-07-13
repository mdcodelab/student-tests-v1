"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./button";
import { FaRegNoteSticky } from "react-icons/fa6";
import { LuGoal } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import Image from "next/image";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full bg-muted">
      <h1 className="text-center py-10 font-semibold text-2xl">Management financiar</h1>
      <Image src="/images/image.avif" alt="photo" width={200} height={200} className="mx-auto rounded"/>
      <div className="flex flex-col py-4 gap-y-10 pt-10">
        <Button
          asChild
          variant={pathname === "/profile/test" ? "default" : "link"}
        >
          <Link
            href="/profile/test"
            className="flex items-center gap-x-2 text-lg"
          >
            <FaRegNoteSticky /> Test
          </Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/profile/results" ? "default" : "link"}
        >
          <Link
            href="/profile/results"
            className="flex items-center gap-x-2 text-lg"
          >
            <LuGoal /> Rezultate
          </Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/profile/students" ? "default" : "link"}
        >
          <Link
            href="/profile/students"
            className="flex items-center gap-x-2 text-lg"
          >
            <PiStudent /> Studenti
          </Link>
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;
