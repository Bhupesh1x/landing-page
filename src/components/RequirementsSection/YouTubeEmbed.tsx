import { getVideoId } from "../../utils";

type YouTubeEmbedProps = {
  url: string;
};

export function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  // Extract video ID from the URL

  const videoId = getVideoId(url);

  return (
    <div className="w-full">
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-[300px] w-[300px] lg:w-[640px] lg:h-[350px]"
        ></iframe>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
}
