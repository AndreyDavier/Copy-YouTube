import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UrlResults: FC = () => {
    const paramFromUrl: string | null = new URLSearchParams(window.location.search).get("query");
    const [videos, setVideis] = useState([])
    const [info, setInfo] = useState([])
    const response: string = `https://youtube.googleapis.com/youtube/v3/search?q=${paramFromUrl}&maxResults=1&key=AIzaSyCtKVNVQ1_HesG21Mb73i6tk2Ubf4a3fR0`



    const getVideos = async () => {
        await fetch(response)
            .then((res) => res.json())
            .then((data) => {
                data.items.forEach((el) => {
                    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${el.id.videoId}&key=AIzaSyCtKVNVQ1_HesG21Mb73i6tk2Ubf4a3fR0`)
                        .then((res) => res.json())
                        .then((data) => {
                            fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2C%20snippet&id=${el.id.videoId}&key=AIzaSyCtKVNVQ1_HesG21Mb73i6tk2Ubf4a3fR0`)
                                .then((res) => res.json())
                                .then((data) => { setInfo(data.items) })
                        })
                });
            })
    }

    useEffect(() => {
        getVideos()
    }, [])

    return (
        <div>
            {info.map((el) =>
                <div>
                    <img src="" alt="" />
                    <div>
                        <Link to={""}></Link>
                        <div>
                            <span></span><span></span>
                        </div>
                        <Link to={""}></Link>
                        <p></p>
                    </div>
                </div>

            )}
        </div>
    )
}

export default UrlResults