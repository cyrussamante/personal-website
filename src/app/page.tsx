import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4 bg-gray-850 text-white">
        <h1>Cyruss Amante</h1>
        <p>Software Engineering Student @ McMaster University</p>
        <h2>Experience</h2>
        <h2>Projects</h2>
      </main>
      <SiteFooter />
    </div>
  );
}
