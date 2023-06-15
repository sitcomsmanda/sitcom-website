import Hero from "@/layouts/Home/Hero";
import Profile from "@/layouts/About/Profile";
import Testimonial from "@/layouts/About/Testimonial";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>

      <section className="overflow-hidden py-20">
        <Profile />
      </section>

      <section className="py-20 bg-gradient-radial from-green-300 to-green-200">
        <Testimonial />
      </section>

      <section className="mb-96"></section>
    </main>
  );
}
