import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import ChannelInfo from "./ChannelInfo";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import VideoCard from "../../components/VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);

  const [searchParams] = useSearchParams();

  const id = searchParams.get("v");

  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));

    api.get(`/comments?id=${id}`).then((res) => setComments(res.data));
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto">
      <div>
        <div className="h-[50vh] lg:h-[60vh] rounded-md overflow-hidden">
          
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        {!video && <p>Yukleniyor..</p>}
        {video && (
          <>
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            <ChannelInfo video={video} />
            <VideoInfo video={video} />
            <Comments data={comments} />
          </>
        )}{" "}
      </div>
      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === "video" && (
              <VideoCard key={item.videoId} video={item} isRow={true} />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
