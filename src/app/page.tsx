export default function Home({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>{children}</div>
    // <div className="grid items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
    // </div>
  );
}
