export default function Video() {
  return (
    <div className="relative w-full sm:w-1/2 h-48 lg:h-80">
      <div className="absolute bg-slate-900 h-3/4 -left-40 -right-40 top-6 sm:h-auto sm:-top-4 sm:-bottom-4 sm:rounded sm:left-8 sm:right-8 lg:-top-8 lg:-bottom-8" />
      <iframe
        className="relative z-10 w-full h-full rounded"
        src="https://www.youtube.com/embed/ovroVcucdBU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
