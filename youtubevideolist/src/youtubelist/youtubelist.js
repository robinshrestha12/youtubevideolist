import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"; 


import './youtubelist.css';


function Youtubevideolist() {
  
    const [videos, setVideos] = useState([]);
    const apiKey = process.env.REACT_APP_YOUR_YOUTUBE_API_KEY;
    const playlistid = process.env.REACT_APP_YOUR_YOUTUBE_PLAYLIST_ID;
    console.log(apiKey);
    console.log(playlistid);
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playlistid}&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setVideos(data.items);
                console.log(data);
            })
            .catch(error => console.error('Error fetching YouTube videos:', error));
    }, []);
    const navigate = useNavigate(); // Access the history object

    const handleReadMore = (videoId) => {
    //Navigate to the detailed video page
    navigate(`/video/${videoId}`);
     }

  
    return (
        <Container className="newspaper-style">
            <Row >
                {videos.map((video, index) => (
                  <Col xs={index === 0 ? 12 : 6} 
                  md={index === 0 ? 12 : 4} 
                  lg={index === 0 ? 8 : 4} 
                  key={video.id}
                  className={index === 0 ? "d-flex justify-content-center" : ""}>
                   <Card className={index === 0 ? 'feature-video' : ''}>
                            <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                className="embed-responsive-item"
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            </div>
                            <Card.Body>
                                <Card.Title>{video.snippet.title}</Card.Title>
                                <Card.Text className="truncate-text">
                                    {video.snippet.description}
                                </Card.Text>
                                <Button variant="link"onClick={() => handleReadMore(video.snippet.resourceId.videoId)}>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default Youtubevideolist;