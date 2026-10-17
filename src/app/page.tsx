import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-8">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Computer Science • AI/ML • Medical Technology
        </p>

        <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I&apos;m Shrestha Jain.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-600">
          I&apos;m a Computer Science student at Georgia Tech interested in
          artificial intelligence, machine learning, algorithms, and building
          technology that solves meaningful real-world problems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-black px-7 py-3 text-white transition hover:opacity-80"
          >
            View my work
          </Link>

          <Link
            href="/about"
            className="rounded-full border border-gray-300 px-7 py-3 transition hover:bg-gray-100"
          >
            About me
          </Link>
        </div>

        <div className="mt-12 flex gap-6 text-sm text-gray-500">
          <a
            href="https://github.com/ShresthaJain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/shrestha-jain-223b43254"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:shrestha.jain05@gmail.com" className="hover:text-black">
            Email ↗
          </a>
        </div>
      </section>

      {/* Focus */}
      <section className="border-y border-gray-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-8 py-20 md:grid-cols-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
              01
            </p>
            <h2 className="mt-3 text-2xl font-semibold">AI & Machine Learning</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Building ML systems using computer vision, neural networks,
              and data-driven approaches.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
              02
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Medical Technology</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Exploring the intersection of software, robotics, and healthcare
              through prosthetics and medical robotics.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
              03
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Software Engineering</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Building full-stack applications, automation tools, and
              production software.
            </p>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-8 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-400">
              Selected work
            </p>
            <h2 className="mt-2 text-4xl font-bold">Featured Projects</h2>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm underline underline-offset-4 sm:block"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/projects"
            className="group rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-gray-400">Machine Learning</p>
            <h3 className="mt-3 text-2xl font-semibold">
              Real-Time Deception Detection
            </h3>
            <p className="mt-4 leading-7 text-gray-600">
              An LSTM-based system using OpenFace computer vision to detect
              deception from micro-expression data.
            </p>
            <p className="mt-6 text-sm font-medium group-hover:underline">
              Learn more →
            </p>
          </Link>

          <Link
            href="/projects"
            className="group rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-gray-400">Medical Robotics</p>
            <h3 className="mt-3 text-2xl font-semibold">
              EMG Prosthetic Control
            </h3>
            <p className="mt-4 leading-7 text-gray-600">
              Leading machine learning work to map EMG signals from the hand
              to prosthetic arm gestures.
            </p>
            <p className="mt-6 text-sm font-medium group-hover:underline">
              Learn more →
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}