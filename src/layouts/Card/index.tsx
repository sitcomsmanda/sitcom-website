import { H3, Text } from "@/components/typography";

type cardArgs = {
  title: String;
  text: String;
};

export default function Card({ title, text }: cardArgs) {
  return (
    <div className="bg-slate-50 drop-shadow-md border border-slate-300 px-4 py-6 rounded-lg flex flex-col gap-2">
      <H3>{title}</H3>
      <Text>{text}</Text>
    </div>
  );
}
