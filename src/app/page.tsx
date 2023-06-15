import Hero from "@/layouts/Home/Hero";
import Profile from "@/layouts/About/Profile";
import Testimonial from "@/layouts/About/Testimonial";
import Highlight from "@/layouts/Documentation/Highlight";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>

      <section className="overflow-hidden py-20">
        <Profile />
      </section>

      <section className="py-20 bg-gradient-radial from-blue-300 to-blue-200">
        <Testimonial />
      </section>

      <section className="overflow-hidden py-20">
        <Highlight />
      </section>

      <section className="mb-96"></section>
    </main>
  );
}
