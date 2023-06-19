import Navigation from "@/layouts/Navigation";
import Hero from "@/layouts/Home/Hero";
import About from "@/layouts/Home/About";
import Testimonial from "@/layouts/Home/Testimonial";
import Documentation from "@/layouts/Home/Documentation";
import Activities from "@/layouts/Home/Activities";
import Contact from "@/layouts/Contact";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Hero />
        </section>

        <section className="overflow-hidden py-20">
          <About />
        </section>

        <section className="py-20 bg-gradient-radial from-blue-300 to-blue-200">
          <Testimonial />
        </section>

        <section className="overflow-hidden py-20">
          <Documentation />
        </section>

        <section className="py-20 bg-gradient-radial from-green-300 to-green-200">
          <Activities />
        </section>

        <section className="overflow-hidden py-20">
          <Contact />
        </section>
      </main>
    </>
  );
}
