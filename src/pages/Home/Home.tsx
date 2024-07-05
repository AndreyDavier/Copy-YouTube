import styles from "./Home.module.scss";
import ScrollContainer from "../../components/ScrollContainer/ScrollContainer";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeInterface, Snippet, Statistics } from "../../interaface/home.interface";

export const Home: FC = () => {

  const defaultValue: Snippet[] = [];
  const defaultStats: Statistics[] = [];
  const [vidoes, setVideos] = useState(defaultValue);
  const [stats, setStats] = useState(defaultStats);

  const getVideo = async () => {
    await fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUDzGdB9TTgFm8jRXn1tBdoA&key=AIzaSyCtKVNVQ1_HesG21Mb73i6tk2Ubf4a3fR0")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items[0]);

        data.items.forEach((el: HomeInterface) =>
          fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${el.snippet.resourceId.videoId}&key=AIzaSyCtKVNVQ1_HesG21Mb73i6tk2Ubf4a3fR0`
          )
            .then((res) => res.json())
            .then((data) => setStats(data.items))
        );
        setVideos(data.items);
      });
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className={styles["home-contents"]}>
      <div id="scroll-container">
        <ScrollContainer />
      </div>
      <div className={styles["contents"]}>
        {vidoes.map((video) =>
          stats.map((stat) => (
            <Link className={styles["link-video"]} key={video.snippet.resourceId.videoId}
              to={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}>
              <img
                width={300}
                height={180}
                src={`${video.snippet.thumbnails.standard.url}`}
                alt=""
              />
              <h4>{video.snippet.title}</h4>
              <span>{stat.statistics.viewCount} просмотров</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
