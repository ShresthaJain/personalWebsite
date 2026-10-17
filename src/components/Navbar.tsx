import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6">
      <Link
        href="/"
        className="text-xl font-bold tracking-tight text-[#12372A]"
      >
        SJ<span className="text-[#F4A7BB]">.</span>
      </Link>

      <div className="hidden items-center gap-8 text-sm font-medium md:flex">
        <Link href="/about" className="hover:text-[#1F6F50]">
          About
        </Link>

        <Link href="/projects" className="hover:text-[#1F6F50]">
          Projects
        </Link>

        <Link href="/experience" className="hover:text-[#1F6F50]">
          Experience
        </Link>

        <Link href="/resume" className="hover:text-[#1F6F50]">
          Resume
        </Link>

        <Link
          href="/contact"
          className="rounded-full bg-[#12372A] px-5 py-2.5 text-white transition hover:bg-[#1F6F50]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}