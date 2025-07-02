export default function Home({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid items-center justify-items-center  gap-16 font-[family-name:var(--font-geist-sans)]">
      <div>{children}</div>
    </div>
  );
}
