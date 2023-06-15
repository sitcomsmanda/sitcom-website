import Hero from "@/layouts/Home/Hero";
import Profile from "@/layouts/About/Profile";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>

      <section className="overflow-hidden mt-10">
        <Profile />
      </section>

      <section className="mb-96"></section>
    </main>
  );
}
