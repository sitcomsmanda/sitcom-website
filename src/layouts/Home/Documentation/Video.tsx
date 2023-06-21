import YoutubePlayer from "@/components/media/YoutubePlayer";
import { fslc } from "@/modules/utils";

const bgVideoTwStyle = fslc(`
  bg-slate-900 h-3/4 
  absolute -left-40 -right-40 top-6 
  sm:h-auto sm:rounded
  sm:-top-4 sm:-bottom-4 sm:left-8 sm:right-8
  lg:-top-8 lg:-bottom-8
`);

export default function Video() {
  return (
    <div className="relative w-full sm:w-1/2 h-48 lg:h-80">
      <div className={bgVideoTwStyle} />
      <YoutubePlayer
        className="relative z-10 w-full h-full rounded"
        videoId="G-owMw1-Es0"
      />
    </div>
  );
}
