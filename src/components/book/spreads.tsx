import type { ReactNode } from "react";
import { display } from "@/lib/fonts";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";

export type Spread = { path: string; left: ReactNode; right: ReactNode };

const soft = { fontVariationSettings: '"SOFT" 100, "WONK" 1' };

const H = ({ children, size = "2.6em" }: { children: ReactNode; size?: string }) => (
  <h2 className={`${display.className} font-bold leading-[0.95] tracking-tight`} style={{ ...soft, fontSize: size }}>
    {children}
  </h2>
);
const Pill = ({ children }: { children: ReactNode }) => (
  <span className="inline-block rounded-full bg-[#FFC2DC] px-[1em] py-[0.3em] text-[0.9em] font-medium">{children}</span>
);
const Lede = ({ children }: { children: ReactNode }) => (
  <p className={`${display.className} mt-[5%] text-[1.3em] italic leading-snug`}>{children}</p>
);
const Chips = ({ items, dark }: { items: string[]; dark?: boolean }) => (
  <div className="flex flex-wrap gap-[0.5em]">
    {items.map((t) => (
      <span
        key={t}
        className={`rounded-full px-[0.9em] py-[0.35em] text-[0.9em] font-medium ${dark ? "bg-[#FFC2DC] text-[#0F4A33]" : "bg-[#DDF1E5]"}`}
      >
        {t}
      </span>
    ))}
  </div>
);
const Dots = ({ items }: { items: string[] }) => (
  <ul className="mt-[5%] space-y-[1em] leading-[1.5]">
    {items.map((b) => (
      <li key={b} className="flex gap-[0.8em]">
        <span className="mt-[0.55em] h-[0.6em] w-[0.6em] shrink-0 rounded-full bg-[#FF3D8B]" aria-hidden />
        <span>{b}</span>
      </li>
    ))}
  </ul>
);
const Body = ({ children }: { children: ReactNode }) => (
  <div className="mt-[5%] space-y-[1em] leading-[1.55]">{children}</div>
);
const link = "text-[1.5em] font-medium underline decoration-[#FF3D8B] decoration-[3px] underline-offset-[0.25em]";

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
        <p className={`${display.className} text-[5em] font-bold leading-[0.88] tracking-tight`} style={soft}>
          Shrestha Jain
        </p>
        <p className="mt-[5%] max-w-[22em] text-[1.15em] text-[#BEE3CD]">
          Computer science, machine learning, and medical technology, told one chapter at a time. Open the cover to
          start reading.
        </p>
      </div>
    </div>
  );
}

export const spreads: Spread[] = [
  { path: "/", left: null, right: <Cover /> },

  // About, spread 1
  {
    path: "/about",
    left: (
      <>
        <H>Building technology with purpose.</H>
        <Body>
          <p>
            I’m a Computer Science student at the Georgia Institute of Technology, where I focus on theoretical
            computer science and artificial intelligence.
          </p>
          <p>
            My interests sit at the intersection of algorithms, machine learning, software engineering, and emerging
            technology. I enjoy taking technically challenging problems and turning them into systems that people can
            actually use.
          </p>
          <p>
            Recently, I’ve become particularly interested in medical technology. Through Georgia Tech’s Medical
            Robotics Club, I’m working on machine learning systems for controlling prosthetic arms using EMG signals.
          </p>
        </Body>
      </>
    ),
    right: (
      <>
        <Body>
          <p>
            I’ve also worked on recruiting automation, computer vision, machine learning, full-stack applications, and
            sports analytics. These experiences have helped me understand both the technical and practical sides of
            building software.
          </p>
          <p>Outside of technology, I enjoy reading, rowing, and crochet.</p>
        </Body>
        <dl className="mt-[8%] space-y-[1.1em] border-t-2 border-[#FF3D8B] pt-[6%]">
          {[
            ["Studying", "B.S. Computer Science, Georgia Tech"],
            ["Expected graduation", "May 2027"],
            ["Focus", "AI/ML, algorithms, and medical technology"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-[0.85em] opacity-70">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </>
    ),
  },

  // About, spread 2
  {
    path: "/about",
    left: (
      <>
        <H>Technical skills.</H>
        <h3 className="mt-[8%] font-semibold">Languages</h3>
        <div className="mt-[3%]">
          <Chips items={["Java", "Python", "JavaScript", "TypeScript", "C++", "HTML", "CSS"]} />
        </div>
        <h3 className="mt-[8%] font-semibold">Frameworks and tools</h3>
        <div className="mt-[3%]">
          <Chips
            items={["React", "Tailwind CSS", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "MySQL", "Firebase", "Vercel", "Playwright", "OpenFace"]}
          />
        </div>
      </>
    ),
    right: (
      <div className="rounded-[1.5em] bg-[#0F4A33] p-[7%] text-[#E4F5EA]">
        <Pill><span className="text-[#0F4A33]">Currently learning</span></Pill>
        <h2 className={`${display.className} mt-[6%] text-[2em] font-bold leading-tight`} style={soft}>
          AI Forward Deployed Engineering
        </h2>
        <p className="mt-[5%] leading-[1.55]">
          I’m completing IIT Delhi’s Advanced Certificate in AI Forward Deployed Engineering (2026–2027), expanding
          from traditional ML and software development into modern production AI systems.
        </p>
        <div className="mt-[6%]">
          <Chips
            dark
            items={["RAG", "LLM Evaluation", "Agentic Systems", "LangGraph", "LangSmith", "Vector Databases", "Docker", "Cloud AI", "MLOps"]}
          />
        </div>
      </div>
    ),
  },

  // One spread per role
  ...experiences.map((e) => ({
    path: "/experience",
    left: (
      <>
        <Pill>{e.date}</Pill>
        <div className="mt-[6%]"><H>{e.company}</H></div>
        <Lede>{e.description}</Lede>
      </>
    ),
    right: (
      <>
        <h3 className={`${display.className} text-[1.9em] font-semibold leading-tight`}>{e.role}</h3>
        <Dots items={e.bullets} />
      </>
    ),
  })),

  // One spread per project
  ...projects.map((p) => ({
    path: "/projects",
    left: (
      <>
        <div className="flex flex-wrap gap-[0.5em]">
          {p.category.split(" · ").map((c) => (
            <Pill key={c}><span className="capitalize">{c.toLowerCase()}</span></Pill>
          ))}
        </div>
        <div className="mt-[6%]"><H size="2.3em">{p.title}</H></div>
        <Lede>{p.description}</Lede>
      </>
    ),
    right: (
      <>
        <Dots items={Array.isArray(p.details) ? p.details : [p.details]} />
        <div className="mt-[6%]"><Chips items={p.technologies} /></div>
      </>
    ),
  })),

  // Resume
  {
    path: "/resume",
    left: (
      <>
        <H>My resume.</H>
        <Lede>The short version is in this book. The full version is one click away.</Lede>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[8%] inline-block rounded-full bg-[#0F4A33] px-[1.6em] py-[0.8em] font-medium text-[#FFC2DC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D8B]"
        >
          Open the PDF ↗
        </a>
      </>
    ),
    right: (
      <>
        <h3 className={`${display.className} text-[1.9em] font-semibold leading-tight`}>Roles at a glance</h3>
        <ul className="mt-[6%] space-y-[1.2em]">
          {experiences.map((e) => (
            <li key={e.role + e.date} className="border-l-[3px] border-[#FF3D8B] pl-[1em]">
              <p className="font-semibold">{e.role}</p>
              <p className="opacity-75">{e.company}, {e.date}</p>
            </li>
          ))}
        </ul>
      </>
    ),
  },

  // Contact
  {
    path: "/contact",
    left: (
      <>
        <H>Let’s build something interesting.</H>
        <Lede>
          I’m interested in opportunities involving AI/ML, software engineering, medical technology, and other
          technically challenging problems.
        </Lede>
      </>
    ),
    right: (
      <div className="flex h-full flex-col justify-center gap-[1.2em]">
        <a href="mailto:shrestha.jain05@gmail.com" className={link}>shrestha.jain05@gmail.com</a>
        <a href="https://github.com/ShresthaJain" target="_blank" rel="noopener noreferrer" className={link}>GitHub ↗</a>
        <a href="https://www.linkedin.com/in/shrestha-jain-223b43254" target="_blank" rel="noopener noreferrer" className={link}>LinkedIn ↗</a>
        <p className={`${display.className} mt-[1em] text-[1.2em] italic opacity-70`}>Thanks for reading.</p>
      </div>
    ),
  },
];
