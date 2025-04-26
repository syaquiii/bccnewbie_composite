import AuthHero from "./_components/AuthHero";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen grid lg:grid-cols-2">
      {children}
      <AuthHero />
    </section>
  );
}
