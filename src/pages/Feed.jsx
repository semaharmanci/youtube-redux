import { useContext } from "react";
import SideBar from "../components/SideBar";
import { videoContext } from "../context/videoContext";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
const Feed = () => {
  const { videos, isLoading, error } = useContext(videoContext);

  return (
    <div className="flex">
      <SideBar />
      <div className="videos"> 
        {isLoading ? (
          <p><Loader/></p>
        ) : error ? (
          <p>error</p>
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId} />
              )
          )
         
        )}
      </div>
    </div>
  );
};

export default Feed;
