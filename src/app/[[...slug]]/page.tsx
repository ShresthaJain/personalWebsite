// One catch-all route replaces every folder's page.tsx. The book reads the URL itself.
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: [] },
    ...["about", "experience", "projects", "resume", "contact"].map((s) => ({ slug: [s] })),
  ];
}

export default function Page() {
  return null;
}
