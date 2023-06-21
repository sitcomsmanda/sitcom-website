import Member from "@/layouts/Member";
import Administrator from "@/layouts/Member/Administrator";
import Contact from "@/layouts/Home/Contact";

export default function MemberPage() {
  return (
    <main>
      <section className="pb-20 md:mt-14">
        <Member />
      </section>

      <section className="py-20 bg-gradient-radial from-blue-300 to-blue-100">
        <Administrator />
      </section>

      <section className="py-20">
        <Contact />
      </section>
    </main>
  );
}
