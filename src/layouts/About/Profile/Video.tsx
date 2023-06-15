export default function Video() {
  return (
    <iframe
      className="w-full h-48 rounded"
      src="https://www.youtube.com/embed/ovroVcucdBU"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
