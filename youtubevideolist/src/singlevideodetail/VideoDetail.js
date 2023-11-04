import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function VideoDetail() {
    const location = useLocation();
    const videoDetail = location.state?.video; // Use optional chaining to access video safely

    // If videoDetail is not available, return an error message or loading state
    if (!videoDetail) {
        return <div>Video not found or no details available.</div>;
    }
    return (
        <div style={{ width: '60vw', height: '60vh'}}>
            <iframe
                style={{ width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${videoDetail.snippet.resourceId.videoId}`}                
                frameBorder="0"
                allowFullScreen
                title={videoDetail.snippet.title}
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
