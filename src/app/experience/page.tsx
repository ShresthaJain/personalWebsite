"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Fraunces, Bricolage_Grotesque } from "next/font/google";

// Fonts: Fraunces is a soft, slightly wonky serif for display; Bricolage Grotesque is a quirky sans for reading.
const display = Fraunces({ subsets: ["latin"], axes: ["SOFT", "WONK"], style: ["normal", "italic"] });
const body = Bricolage_Grotesque({ subsets: ["latin"] });

type Experience = {
  company: string;
  role: string;
  date: string;
  description: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    company: "Georgia Institute of Technology",
    role: "Head Teaching Assistant, College of Computing",
    date: "May 2026 – Present",
    description:
      "I lead a team of 30+ teaching assistants who support first-year and transfer students.",
    bullets: [
      "Coordinate workshops and small-group mentoring built around the questions new students actually have, from debugging habits to finding their footing in the major.",
      "Partner with faculty to keep assignments current and tied to what industry expects, so class work looks like the work students will do after it.",
      "Bring emerging AI tools into course material, teaching students to use them thoughtfully while still building the fundamentals underneath.",
    ],
  },
  {
    company: "DrFirst",
    role: "Talent Acquisition Intern, Technical Track",
    date: "Jun 2026 – Aug 2026",
    description:
      "Worked at the intersection of technical recruiting and AI-powered automation.",
    bullets: [
      "Built Claude-based tooling to screen resumes at scale, limiting evaluation strictly to skills-based criteria and making no automated hiring decisions, so people stay in charge of every outcome.",
      "Developed recruiting automations, including a LinkedIn candidate-sourcing tool that combines Playwright with Claude for Chrome to find and organize candidates.",
      "Conducted technical screening calls with candidates across experience levels, assessing fit for engineering roles and giving the hiring team an early, clearer picture.",
    ],
  },
  {
    company: "Georgia Institute of Technology",
    role: "Teaching Assistant, College of Computing",
    date: "Aug 2025 – May 2026",
    description:
      "Supported students in the College of Computing through workshops, networking, and feedback.",
    bullets: [
      "Ran 5 workshops per semester covering everything from debugging to choosing a CS concentration.",
      "Facilitated 10 cross-year networking sessions that connected 20+ computer science majors, helping newer students learn from people a few steps ahead of them.",
      "Delivered detailed feedback on 12 assignments across 30 students, aiming to show each student what to do next rather than only what went wrong.",
    ],
  },
  {
    company: "Start-Up (Stealth Mode)",
    role: "Software Engineering Intern",
    date: "May 2024 – Aug 2024",
    description: "Worked across frontend, full-stack development, and automation.",
    bullets: [
      "Redesigned the front end in React with a more intuitive layout and iconography, improving accessibility and usability.",
      "Built 2 full-stack applications in C++ and React, iterating on usability at each stage of development rather than saving it for the end.",
      "Integrated Node-RED to automate door-control logic, enabling seamless transitions between night and day modes.",
    ],
  },
];

/* ---------- Pages ---------- */

const paperRight = "bg-[#FFF5F9] bg-[linear-gradient(to_right,rgba(15,74,51,0.22),transparent_10%)]";
const paperLeft = "bg-[#FFF5F9] bg-[linear-gradient(to_left,rgba(15,74,51,0.22),transparent_10%)]";

function Folio({ n, side }: { n: number; side: "l" | "r" }) {
  return (
    <span
      className={`${display.className} absolute bottom-[5%] ${
        side === "l" ? "left-[9%]" : "right-[9%]"
      } italic opacity-60`}
    >
      {n}
    </span>
  );
}

function Cover() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-[#0F4A33] p-[9%] text-[#FFC2DC]">
      <span
        className="absolute right-[12%] top-0 h-[22%] w-[7%] bg-[#FF3D8B] [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)]"
        aria-hidden
      />
      <svg viewBox="0 0 120 120" className="w-[22%]" fill="none" stroke="#FF8FC2" strokeWidth="4" strokeLinecap="round" aria-hidden>
        <path d="M60 110V50" />
        <path d="M60 70C60 50 40 40 20 42c0 20 18 32 40 28Z" />
        <path d="M60 52C60 34 78 24 98 26c0 20-18 30-38 26Z" />
      </svg>
      <div>
        <p
          className={`${display.className} text-[4.2em] font-bold leading-[0.9] tracking-tight`}
          style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
        >
          Where I&rsquo;ve worked.
        </p>
        <p className="mt-[4%] text-[1.1em] text-[#FF8FC2]">Shrestha Jain. Open the cover to start reading.</p>
      </div>
    </div>
  );
}

function LeftPage({ e, n }: { e: Experience; n: number }) {
  return (
    <div className={`relative h-full w-full overflow-hidden p-[9%] ${paperLeft}`}>
      <span className="absolute -bottom-[14%] -left-[12%] aspect-square w-[62%] rounded-full bg-[#FFC2DC]" aria-hidden />
      <div className="relative">
        <span className="inline-block rounded-full bg-[#FFC2DC] px-[1em] py-[0.3em] text-[0.9em] font-medium">
          {e.date}
        </span>
        <h2
          className={`${display.className} mt-[6%] text-[2.6em] font-bold leading-[0.95] tracking-tight`}
          style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
        >
          {e.company}
        </h2>
        <p className={`${display.className} mt-[6%] text-[1.35em] italic leading-snug`}>{e.description}</p>
      </div>
      <Folio n={n} side="l" />
    </div>
  );
}

function RightPage({ e, n }: { e: Experience; n: number }) {
  return (
    <div className={`relative h-full w-full overflow-hidden p-[9%] ${paperRight}`}>
      <h3 className={`${display.className} text-[1.9em] font-semibold leading-tight`}>{e.role}</h3>
      <ul className="mt-[6%] space-y-[1.1em] text-[1em] leading-[1.55]">
        {e.bullets.map((b) => (
          <li key={b} className="flex gap-[0.8em]">
            <span className="mt-[0.6em] h-[0.6em] w-[0.6em] shrink-0 rounded-full bg-[#FF3D8B]" aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Folio n={n} side="r" />
    </div>
  );
}

function EndPage() {
  return (
    <div className="flex h-full w-full items-end bg-[#FF3D8B] p-[9%] text-[#0F4A33]">
      <p className={`${display.className} text-[2.6em] font-bold italic leading-none`}>To be continued.</p>
    </div>
  );
}

/* ---------- Book ---------- */

function Book() {
  const [flipped, setFlipped] = useState(0);
  const [reduce, setReduce] = useState(false);

  // Leaf i: front is a right-hand page, back is the next left-hand page.
  const leaves: { front: ReactNode; back: ReactNode }[] = [
    { front: <Cover />, back: <LeftPage e={experiences[0]} n={2} /> },
    ...experiences.map((e, i) => ({
      front: <RightPage e={e} n={2 * i + 3} />,
      back: experiences[i + 1] ? <LeftPage e={experiences[i + 1]} n={2 * i + 4} /> : <EndPage />,
    })),
  ];
  const N = leaves.length;
  const go = (d: number) => setFlipped((f) => Math.min(N, Math.max(0, f + d)));

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "ArrowRight") go(1);
      if (ev.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Center the closed book, then recenter as it opens and closes.
  const shift = flipped === 0 ? "-25%" : flipped === N ? "25%" : "0%";
  const ease = "900ms cubic-bezier(0.6, 0.05, 0.25, 1)";

  return (
    <div className="hidden md:block" role="region" aria-label="Experience book">
      <div
        className={`${body.className} mx-auto w-[min(92vw,1040px)] text-[clamp(12px,1.5vw,16px)] text-[#0F4A33]`}
        style={{ perspective: "2400px" }}
      >
        <div
          className="relative aspect-[2/1.3] w-full drop-shadow-[0_30px_30px_rgba(15,74,51,0.25)]"
          style={{ transform: `translateX(${shift})`, transition: reduce ? "none" : `transform ${ease}` }}
        >
          <div className="absolute right-0 top-0 h-full w-1/2 rounded-r-2xl bg-[#0F4A33]" aria-hidden />
          {leaves.map((leaf, i) => {
            const isFlipped = i < flipped;
            return (
              <div
                key={i}
                onClick={() => setFlipped(isFlipped ? i : i + 1)}
                className="absolute right-0 top-0 h-full w-1/2 cursor-pointer"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
                  zIndex: isFlipped ? i + 1 : N - i,
                  transition: reduce ? "none" : `transform ${ease}, z-index 0s linear 450ms`,
                }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-r-2xl [backface-visibility:hidden]">
                  {leaf.front}
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-l-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  {leaf.back}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          disabled={flipped === 0}
          className="rounded-full bg-[#0F4A33] px-6 py-3 font-medium text-[#FFC2DC] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D8B] disabled:opacity-30"
        >
          Previous page
        </button>
        <button
          onClick={() => go(1)}
          disabled={flipped === N}
          className="rounded-full bg-[#FF3D8B] px-6 py-3 font-medium text-[#0F4A33] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A33] disabled:opacity-30"
        >
          Next page
        </button>
      </div>
      <p className="mt-4 text-center text-sm opacity-70">Click a page or use the arrow keys.</p>
    </div>
  );
}

/* Small screens: a plain stacked list, since a two-page spread gets too small to read. */
function MobileList() {
  return (
    <div className="space-y-6 md:hidden">
      {experiences.map((e) => (
        <article key={`${e.company}-${e.role}`} className="rounded-3xl bg-[#FFF5F9] p-6">
          <p className="inline-block rounded-full bg-[#FFC2DC] px-3 py-1 text-sm font-medium">{e.date}</p>
          <h2 className={`${display.className} mt-4 text-3xl font-bold leading-tight`}>{e.company}</h2>
          <h3 className={`${display.className} mt-2 text-lg italic`}>{e.role}</h3>
          <p className="mt-4">{e.description}</p>
          <ul className="mt-4 space-y-3">
            {e.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FF3D8B]" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <main className={`${body.className} min-h-screen overflow-x-hidden bg-[#FFC2DC] px-6 py-16 text-[#0F4A33] md:py-24`}>
      <h1
        className={`${display.className} mx-auto mb-12 max-w-[1040px] text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-tight md:mb-20 md:sr-only`}
        style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
      >
        Where I&rsquo;ve worked.
      </h1>
      <MobileList />
      <Book />
    </main>
  );
}
