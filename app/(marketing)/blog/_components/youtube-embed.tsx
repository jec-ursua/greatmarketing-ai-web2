export function YouTube({ id }: { id: string }) {
  return (
    <div className="my-6 aspect-video overflow-hidden rounded-2xl border border-neutral-200">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
