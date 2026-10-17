"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { body, display } from "@/lib/fonts";
import { spreads } from "./spreads";

const chapters = [
  ["Cover", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Resume", "/resume"],
  ["Contact", "/contact"],
] as const;

const S = spreads.length;
const indexFor = (path: string) => Math.max(0, spreads.findIndex((s) => s.path === path));
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D8B]";
const ease = "900ms cubic-bezier(0.6, 0.05, 0.25, 1)";

function Page({ side, n, children }: { side: "l" | "r"; n: number; children: ReactNode }) {
  const shade =
    side === "r"
      ? "bg-[linear-gradient(to_right,rgba(15,74,51,0.22),transparent_10%)]"
      : "bg-[linear-gradient(to_left,rgba(15,74,51,0.22),transparent_10%)]";
  return (
    <div className={`relative h-full w-full overflow-hidden bg-[#F4FBF7] p-[8%] pb-[12%] ${shade}`}>
      {side === "l" && (
        <span className="absolute -bottom-[16%] -left-[14%] aspect-square w-[52%] rounded-full bg-[#DDF1E5]" aria-hidden />
      )}
      <div className="relative">{children}</div>
      <span
        className={`${display.className} absolute bottom-[4.5%] ${side === "l" ? "left-[8%]" : "right-[8%]"} italic opacity-60`}
      >
        {n}
      </span>
    </div>
  );
}

export default function Book() {
  const pathname = usePathname();
  const router = useRouter();
  const [{ idx, prev }, setPos] = useState(() => {
    const i = indexFor(pathname);
    return { idx: i, prev: i };
  });
  const [reduce, setReduce] = useState(false);

  // URL -> book (nav links, back button, deep links)
  useEffect(() => {
    setPos((p) => (spreads[p.idx].path === pathname ? p : { idx: indexFor(pathname), prev: p.idx }));
  }, [pathname]);

  const step = (d: number) => {
    const to = Math.min(S - 1, Math.max(0, idx + d));
    if (to === idx) return;
    setPos({ idx: to, prev: idx });
    if (spreads[to].path !== spreads[idx].path) router.push(spreads[to].path, { scroll: false });
  };

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Small screens use a stacked list, so scroll it to the chosen spread.
  useEffect(() => {
    if (window.innerWidth < 768) document.getElementById(`s${idx}`)?.scrollIntoView({ behavior: "smooth" });
  }, [idx]);

  const leaves = spreads.map((s, i) => ({
    front: i === 0 ? s.right : <Page side="r" n={2 * i + 1}>{s.right}</Page>,
    back: spreads[i + 1] ? <Page side="l" n={2 * i + 2}>{spreads[i + 1].left}</Page> : null,
  }));

  const activePath = spreads[idx].path;

  return (
    <div className={`${body.className} min-h-screen px-4 py-6 md:py-8`}>
      <header className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-4">
        <Link href="/" className={`${display.className} text-xl font-bold italic ${focus}`}>
          Shrestha Jain
        </Link>
        <nav aria-label="Chapters" className="flex flex-wrap gap-1">
          {chapters.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={activePath === href ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${focus} ${
                activePath === href ? "bg-[#FFC2DC]" : "hover:bg-[#F4FBF7]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <h1 className="sr-only">Shrestha Jain</h1>

      {/* Desktop: the book */}
      <div className="hidden md:block">
        <div className="mx-auto mt-8 w-[min(92vw,1040px,calc((100vh_-_13rem)*1.538))] [container-type:inline-size]">
          <div
            className="text-[clamp(11px,1.5cqw,16px)] drop-shadow-[0_30px_30px_rgba(15,74,51,0.28)]"
            style={{
              transform: `translateX(${idx === 0 ? "-25%" : "0%"})`,
              transition: reduce ? "none" : `transform ${ease}`,
            }}
          >
            <div className="relative aspect-[2/1.3] w-full" style={{ perspective: "2400px" }}>
              <div className="absolute right-0 top-0 h-full w-1/2 rounded-r-2xl bg-[#0F4A33]" aria-hidden />
              {leaves.map((leaf, i) => {
                const isFlipped = i < idx;
                // Riffle: leaves between the old and new spread flip one after another.
                const k = idx > prev ? i - prev : prev - 1 - i;
                const d = reduce ? 0 : Math.max(0, Math.min(k, 12)) * 70;
                return (
                  <div
                    key={i}
                    onClick={(e) => {
                      if ((e.target as HTMLElement).closest("a")) return;
                      if (i === idx) step(1);
                      else if (i === idx - 1) step(-1);
                    }}
                    className="absolute right-0 top-0 h-full w-1/2 cursor-pointer"
                    style={{
                      transformOrigin: "left center",
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
                      zIndex: isFlipped ? i + 1 : S - i,
                      transition: reduce ? "none" : `transform ${ease} ${d}ms, z-index 0s linear ${d + 450}ms`,
                    }}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-r-2xl [backface-visibility:hidden]">{leaf.front}</div>
                    <div className="absolute inset-0 overflow-hidden rounded-l-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      {leaf.back}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button onClick={() => step(-1)} disabled={idx === 0} className={`rounded-full bg-[#0F4A33] px-6 py-3 font-medium text-[#FFC2DC] disabled:opacity-30 ${focus}`}>
            Previous page
          </button>
          <button onClick={() => step(1)} disabled={idx === S - 1} className={`rounded-full bg-[#0F4A33] px-6 py-3 font-medium text-[#FFC2DC] disabled:opacity-30 ${focus}`}>
            Next page
          </button>
        </div>
        <p className="mt-4 text-center text-sm opacity-70">Click a page, use the arrow keys, or pick a chapter above.</p>
      </div>

      {/* Mobile: the same pages, stacked */}
      <div className="mx-auto mt-8 max-w-xl space-y-12 text-[15px] md:hidden">
        {spreads.map((s, i) => (
          <section key={i} id={`s${i}`} className="scroll-mt-4 space-y-3">
            {i === 0 ? (
              <div className="h-[70vh] overflow-hidden rounded-3xl">{s.right}</div>
            ) : (
              <>
                <div className="overflow-hidden rounded-3xl"><Page side="l" n={2 * i}>{s.left}</Page></div>
                <div className="overflow-hidden rounded-3xl"><Page side="r" n={2 * i + 1}>{s.right}</Page></div>
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
