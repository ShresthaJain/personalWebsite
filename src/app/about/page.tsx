export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
        About
      </p>

      <h1 className="mt-4 text-5xl font-bold tracking-tight">
        Building technology with purpose.
      </h1>

      <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            I&apos;m a Computer Science student at the Georgia Institute of
            Technology, where I focus on theoretical computer science and
            artificial intelligence.
          </p>

          <p>
            My interests sit at the intersection of algorithms, machine
            learning, software engineering, and emerging technology. I enjoy
            taking technically challenging problems and turning them into
            systems that people can actually use.
          </p>

          <p>
            Recently, I&apos;ve become particularly interested in medical
            technology. Through Georgia Tech&apos;s Medical Robotics Club,
            I&apos;m working on machine learning systems for controlling
            prosthetic arms using EMG signals.
          </p>

          <p>
            I&apos;ve also worked on recruiting automation, computer vision,
            machine learning, full-stack applications, and sports analytics.
            These experiences have helped me understand both the technical and
            practical sides of building software.
          </p>

          <p>
            Outside of technology, I enjoy reading, rowing, and crochet.
          </p>
        </div>

        

        <aside className="h-fit rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold">Currently</h2>

          <div className="mt-6 space-y-5 text-sm">
            <div>
              <p className="text-gray-400">Education</p>
              <p className="mt-1">Georgia Tech</p>
            </div>

            <div>
              <p className="text-gray-400">Degree</p>
              <p className="mt-1">B.S. Computer Science</p>
            </div>

            <div>
              <p className="text-gray-400">Expected graduation</p>
              <p className="mt-1">May 2027</p>
            </div>

            <div>
              <p className="text-gray-400">Focus</p>
              <p className="mt-1">
                AI/ML · Algorithms · Medical Technology
              </p>
            </div>
            <div>
                <p className="text-gray-400">Professional development</p>
                <p className="mt-1">
                Advanced Certificate in AI Forward Deployed Engineering
                </p>
                <p className="mt-1 text-sm text-gray-500">
                IIT Delhi CEP · 2026–2027
                </p>
                </div>
          </div>
        </aside>
      </div>

      <section className="mt-24 border-t border-gray-200 pt-16">
        <h2 className="text-3xl font-bold">Technical Skills</h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold">Languages</h3>
            <p className="mt-3 text-gray-600">
              Java · Python · JavaScript · TypeScript · C++ · HTML · CSS
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Frameworks & Tools</h3>
            <p className="mt-3 text-gray-600">
              React · Tailwind CSS · PyTorch · Scikit-learn · NumPy · Pandas
              · MySQL · Firebase · Vercel · Playwright · OpenFace
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24 rounded-3xl bg-[#E8F3ED] p-8 md:p-12">
  <div className="max-w-3xl">
    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F6F50]">
      Currently learning
    </p>

    <h2 className="mt-3 text-3xl font-bold text-[#12372A]">
      AI Forward Deployed Engineering
    </h2>

    <p className="mt-5 text-lg leading-8 text-[#315443]">
      I&apos;m currently completing IIT Delhi&apos;s Advanced Certificate
      in AI Forward Deployed Engineering, expanding my experience from
      traditional ML and software development into modern production AI
      systems.
    </p>

            <div className="mt-8 flex flex-wrap gap-3">
            {[
                "RAG",
                "LLM Evaluation",
                "Agentic Systems",
                "LangGraph",
                "LangSmith",
                "Vector Databases",
                "Docker",
                "Cloud AI",
                "MLOps",
            ].map((skill) => (
                <span
                key={skill}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#1F6F50]"
                >
                {skill}
                </span>
            ))}
            </div>
        </div>
        </section>
    </main>
  );
}
