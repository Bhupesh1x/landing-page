import { getVideoId } from "../../utils";

type YouTubeEmbedProps = {
  url: string;
};

export function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  // Extract video ID from the URL

  const videoId = getVideoId(url);

  return (
    <div>
      {videoId ? (
        <iframe
          width="640"
          height="350"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="lg:w-[640px] lg:h-[350px] h-[250px] w-[320px] mx-auto"
        ></iframe>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
}
