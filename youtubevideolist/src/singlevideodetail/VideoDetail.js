import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VideoDetail() {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    // Fetch video details (like title, description) using videoId
    // Update state using setVideoDetail

    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                // ... other props
            ></iframe>
            {videoDetail && (
                <>
                    <h1>{videoDetail.snippet.title}</h1>
                    <p>{videoDetail.snippet.description}</p>
                </>
            )}
        </div>
    );
}

export default VideoDetail;
