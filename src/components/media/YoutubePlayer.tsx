export default function YoutubePlayer({
  className,
  videoId,
}: {
  className: string;
  videoId: string;
}) {
  return (
    <iframe
      className={className}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
