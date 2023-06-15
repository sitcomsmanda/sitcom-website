import { H3, Text } from "@/components/typography";

type cardArgs = {
  thumbnail?: React.ReactNode;
  title: String;
  text: String;
};

export default function Card({ thumbnail, title, text }: cardArgs) {
  return (
    <div className="overflow-hidden w-full bg-slate-50 drop-shadow-md border border-slate-300 rounded-lg">
      {thumbnail ? thumbnail : ""}
      <div className="px-4 py-6 flex flex-col gap-2">
        <H3>{title}</H3>
        <Text>{text}</Text>
      </div>
    </div>
  );
}
