export default function Video() {
  return (
    <div className="relative w-full sm:w-1/2 h-48 rounded shadow shadow-black">
      <div className="absolute bg-slate-950 h-3/4 -left-40 -right-40 top-6 sm:left-0 sm:right-0" />
      <iframe
        className="relative z-10 w-full h-full"
        src="https://www.youtube.com/embed/ovroVcucdBU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
