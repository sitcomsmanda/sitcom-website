import About from "@/layouts/About";
import Purpose from "@/layouts/About/Purpose";
import Contact from "@/layouts/Home/Contact";

export default function AboutPage() {
  return (
    <main>
      <section className="py-20 md:mt-14">
        <About />
      </section>

      <section className="py-20 bg-gradient-radial from-slate-300 to-slate-100">
        <Purpose />
      </section>

      <section className="py-20">
        <Contact />
      </section>
    </main>
  );
}
