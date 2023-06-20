import Documentation from "@/layouts/Documentation";
import VideoList from "@/layouts/Documentation/VideoList";
import Contact from "@/layouts/Home/Contact";

export default function DocumentationPage() {
  return (
    <main>
      <section className="min-h-screen pb-20 md:mt-14">
        <Documentation />
      </section>

      <section className="py-20 bg-gradient-radial from-slate-300 to-slate-100">
        <VideoList />
      </section>

      <section className="py-20">
        <Contact />
      </section>
    </main>
  );
}
