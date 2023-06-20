import { H1, H3 } from "@/components/typography";

export default function Description() {
  return (
    <div className="flex flex-col gap-5 w-full sm:w-1/2 lg:gap-10">
      <H1>Mengenal SITCOM</H1>

      <H3>
        {`SITCOM (Student Information Technology Community) adalah sebuah
        ekstrakurikuler yang berdedikasi di SMA Negeri 2 Bandung dalam bidang
        Informasi Teknologi.`}
      </H3>
    </div>
  );
}
