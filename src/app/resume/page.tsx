export default function Resume() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            Resume
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            My resume.
          </h1>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-full bg-black px-6 py-3 text-white"
        >
          Open PDF ↗
        </a>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
        <iframe
          src="/resume.pdf"
          title="Shrestha Jain Resume"
          className="h-[1000px] w-full"
        />
      </div>
    </main>
  );
}