import Activities from "@/layouts/Activities";
import Program from "@/layouts/Activities/Program";
import Contact from "@/layouts/Home/Contact";

export default function ActivitiesPage() {
  return (
    <main>
      <section className="min-h-screen pb-20 md:pt-14">
        <Activities />
      </section>

      <section className="py-20 bg-gradient-radial from-green-300 to-green-100">
        <Program />
      </section>

      <section className="py-20">
        <Contact />
      </section>
    </main>
  );
}
