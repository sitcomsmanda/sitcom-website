import { H3, Text } from "@/components/typography";

type cardArgs = {
  thumbnail?: React.ReactNode;
  title: String;
  text: String;
};

export default function Card({ thumbnail, title, text }: cardArgs) {
  return (
    <div className="w-full bg-slate-50 drop-shadow-md border border-slate-300 px-4 py-6 rounded-lg flex flex-col gap-2">
      {thumbnail ? thumbnail : ""}
      <H3>{title}</H3>
      <Text>{text}</Text>
    </div>
  );
}
