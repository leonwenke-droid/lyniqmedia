import Footer from "./Footer";
import Navigation from "./Navigation";
import PageBackground from "./PageBackground";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageBackground />
      <Navigation />
      <main id="main-content" style={{ position: "relative", zIndex: 1 }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
