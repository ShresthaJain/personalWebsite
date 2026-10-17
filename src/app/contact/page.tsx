export default function Contact() {
  return (
    <main className="mx-auto flex min-h-[75vh] max-w-5xl flex-col justify-center px-8 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
        Contact
      </p>

      <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
        Let&apos;s build something interesting.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
        I&apos;m interested in opportunities involving AI/ML, software
        engineering, medical technology, and other technically challenging
        problems.
      </p>

      <div className="mt-10 flex flex-col items-start gap-4">
        <a
          href="mailto:shrestha.jain05@gmail.com"
          className="text-xl underline underline-offset-8"
        >
          shrestha.jain05@gmail.com
        </a>

        <a
          href="https://github.com/ShresthaJain"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl underline underline-offset-8"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/shrestha-jain-223b43254"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl underline underline-offset-8"
        >
          LinkedIn ↗
        </a>
      </div>
    </main>
  );
}